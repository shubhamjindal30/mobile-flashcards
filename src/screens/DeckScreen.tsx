import { StyleSheet, View, Button as DefaultButton } from 'react-native';
import { Paragraph, Title } from 'react-native-paper';

import { RootStackScreenProps } from '../types';
import { Theme } from '../constants';
import { useDispatch, useSelector } from '../store/hooks';
import { deleteDeck } from '../store/decks/slice';
import { Button, ShowMessage } from '../components';

const DeckScreen = ({ route, navigation }: RootStackScreenProps<'DeckScreen'>) => {
  const deckId = route?.params?.deckId || null;
  const dispatch = useDispatch();
  const decks = useSelector((state) => state.deck.decks);

  const deck = deckId ? decks[deckId] : null;

  if (!deck) return <ShowMessage>Deck not found!</ShowMessage>;

  const handleAddCard = () => navigation.navigate('NewCardScreen', { deckId: deck.id });
  const handleStartQuiz = () => navigation.navigate('QuizScreen', { deckId: deck.id });
  const handleDelete = () => {
    dispatch(deleteDeck(deck.id));
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.headingView}>
        <Title style={styles.title}>{deck?.title}</Title>
        <Paragraph>{deck?.questions.length} card(s)</Paragraph>
      </View>
      <View style={styles.buttonsView}>
        <Button mode="contained" onPress={handleAddCard}>
          Add Card
        </Button>
        <Button
          style={styles.marginTop}
          mode="contained"
          color={Theme.colors.backdrop}
          onPress={handleStartQuiz}
        >
          Start Quiz
        </Button>
        <View style={styles.marginTop}>
          <DefaultButton
            title="Delete Deck"
            color={Theme.colors.notification}
            onPress={handleDelete}
          />
        </View>
      </View>
    </View>
  );
};

export default DeckScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 30
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
