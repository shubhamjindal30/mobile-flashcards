import { useEffect } from 'react';
import { ScrollView, StyleSheet, Button as DefaultButton } from 'react-native';
import { Paragraph, Title } from 'react-native-paper';

import { RootStackScreenProps } from '../types';
import { ClickableCard } from '../components';

const decks = [
  {
    id: 1,
    name: 'deck 1',
    cards: {
      '1': {},
      '2': {},
      '3': {}
    }
  },
  {
    id: 2,
    name: 'deck 2',
    cards: {
      '1': {},
      '2': {}
    }
  },
  {
    id: 3,
    name: 'deck 3',
    cards: {
      '1': {}
    }
  }
];

const DeckListScreen = ({ navigation }: RootStackScreenProps<'DeckListScreen'>) => {
  const handleAdd = () => {};

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <DefaultButton title="Add" onPress={handleAdd} />
    });
  }, [handleAdd]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {decks.map((deck) => (
        <ClickableCard key={deck.id} style={styles.card} onPress={() => {}}>
          <Title>{deck.name}</Title>
          <Paragraph>{Object.keys(deck.cards || {}).length} Card(s)</Paragraph>
        </ClickableCard>
      ))}
    </ScrollView>
  );
};

export default DeckListScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center'
  },
  card: {
    marginTop: 20
  }
});
