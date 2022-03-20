import { View, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TextInput, Title } from 'react-native-paper';

import { Button } from '../components';

const NewDeckScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.fieldView}>
          <Title style={styles.title}>What's the title of your new deck?</Title>
          <TextInput mode="outlined" placeholder="Deck Title" />
        </View>
        <View style={styles.buttonView}>
          <Button mode="contained">Create Deck</Button>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NewDeckScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: 'space-evenly'
  },
  fieldView: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 20
  },
  buttonView: {
    flex: 1,
    justifyContent: 'center'
  }
});
