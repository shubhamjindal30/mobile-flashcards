import { StyleSheet, View, Button as DefaultButton } from 'react-native';
import { Paragraph, Title } from 'react-native-paper';

import { RootStackScreenProps } from '../types';
import { Theme } from '../constants';
import { decks } from './DeckListScreen';
import { Button } from '../components';

const DeckScreen = ({ route, navigation }: RootStackScreenProps<'DeckScreen'>) => {
  const deckId = route?.params?.deckId || null;

  const deck = deckId ? decks.find((x) => x.id === deckId) : null;

  return (
    <View style={styles.container}>
      <View style={styles.headingView}>
        <Title style={styles.title}>{deck?.name}</Title>
        <Paragraph>{Object.keys(deck?.cards || {}).length} card(s)</Paragraph>
      </View>
      <View style={styles.buttonsView}>
        <Button mode="contained" onPress={() => navigation.navigate('NewCardScreen')}>
          Add Card
        </Button>
        <Button
          style={styles.marginTop}
          mode="contained"
          color={Theme.colors.backdrop}
          onPress={() => {}}
        >
          Start Quiz
        </Button>
        <View style={styles.marginTop}>
          <DefaultButton title="Delete Deck" color={Theme.colors.notification} onPress={() => {}} />
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
