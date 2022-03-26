import { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TextInput } from 'react-native-paper';

import { RootStackScreenProps } from '../types';
import { useDispatch } from '../store/hooks';
import { saveQuestion } from '../store/decks/slice';
import { Button } from '../components';

const NewCardScreen = ({ route, navigation }: RootStackScreenProps<'NewCardScreen'>) => {
  const deckId = route?.params?.deckId || null;
  const dispatch = useDispatch();

  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = () => {
    if (!deckId) return;
    dispatch(saveQuestion({ deckId, question: { question, answer } }));
    navigation.goBack();
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.fieldView}>
          <TextInput
            mode="outlined"
            placeholder="Question"
            label="Question"
            value={question}
            onChangeText={setQuestion}
          />
          <TextInput
            style={styles.answerField}
            mode="outlined"
            placeholder="Answer"
            label="Answer"
            value={answer}
            onChangeText={setAnswer}
          />
        </View>
        <View style={styles.buttonView}>
          <Button mode="contained" onPress={handleSubmit}>
            Submit
          </Button>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NewCardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'space-evenly'
  },
  fieldView: {
    flex: 1,
    justifyContent: 'center'
  },
  answerField: {
    marginTop: 20
  },
  buttonView: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center'
  }
});
