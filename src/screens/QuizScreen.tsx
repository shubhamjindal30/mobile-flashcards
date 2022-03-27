import { useState } from 'react';
import { StyleSheet, View, Button as DefaultButton } from 'react-native';
import { Title } from 'react-native-paper';

import { RootStackScreenProps } from '../types';
import { Theme } from '../constants';
import { useSelector } from '../store/hooks';
import { Button, ShowMessage } from '../components';

const QuizScreen = ({ route, navigation }: RootStackScreenProps<'QuizScreen'>) => {
  const deckId = route?.params?.deckId || null;
  const decks = useSelector((state) => state.deck.decks);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isShowAnswer, setIsShowAnswer] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const deck = deckId ? decks[deckId] : null;

  if (!deck) return <ShowMessage>Deck not found!</ShowMessage>;

  const questions = deck.questions;

  if (questions.length < 1)
    return (
      <ShowMessage>
        Sorry, you cannot take a quiz because there are no cards in this deck.
      </ShowMessage>
    );

  const handleReset = () => {
    setCurrentQuestion(0);
    setCorrectAnswers(0);
    setIsShowAnswer(false);
  };

  const handleGoBack = () => navigation.goBack();

  if (currentQuestion >= questions.length)
    return (
      <View style={styles.container}>
        <View style={styles.headingView}>
          <Title style={styles.title}>
            Score: {Math.round((correctAnswers / questions.length) * 100)}%
          </Title>
        </View>
        <View style={styles.buttonsView}>
          <Button mode="contained" onPress={handleReset}>
            Restart Quiz
          </Button>
          <Button
            style={styles.marginTop}
            mode="contained"
            color={Theme.colors.backdrop}
            onPress={handleGoBack}
          >
            Back to Deck
          </Button>
        </View>
      </View>
    );

  const handleAnswer = () => setIsShowAnswer(!isShowAnswer);

  const handleCorrect = () => {
    setCorrectAnswers(correctAnswers + 1);
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleIncorrect = () => setCurrentQuestion(currentQuestion + 1);

  return (
    <View style={styles.container}>
      <Title style={styles.topHeading}>
        {currentQuestion + 1}/{questions.length}
      </Title>
      <View style={styles.headingView}>
        <Title style={styles.title}>
          {!isShowAnswer
            ? questions[currentQuestion]?.question
            : questions[currentQuestion]?.answer}
        </Title>
        <DefaultButton
          title={`Show ${!isShowAnswer ? 'answer' : 'question'}`}
          color={Theme.colors.notification}
          onPress={handleAnswer}
        />
      </View>
      <View style={styles.buttonsView}>
        <Button mode="contained" color={Theme.colors.success} onPress={handleCorrect}>
          Correct
        </Button>
        <Button
          style={styles.marginTop}
          mode="contained"
          color={Theme.colors.error}
          onPress={handleIncorrect}
        >
          Incorrect
        </Button>
      </View>
    </View>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topHeading: {
    margin: 10
  },
  title: {
    fontSize: 25,
    marginBottom: 20
  },
  headingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonsView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  marginTop: {
    marginTop: 20
  }
});
