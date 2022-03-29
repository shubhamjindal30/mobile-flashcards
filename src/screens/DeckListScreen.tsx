import { useEffect } from 'react';
import { ScrollView, StyleSheet, Button as DefaultButton } from 'react-native';
import { Paragraph, Title } from 'react-native-paper';

import { RootStackScreenProps } from '../types';
import { useDispatch, useSelector } from '../store/hooks';
import { deleteAllDecks } from '../store/decks/slice';
import { ClickableCard } from '../components';

const DeckListScreen = ({ navigation }: RootStackScreenProps<'DeckListScreen'>) => {
  const dispatch = useDispatch();
  const decks = useSelector((state) => state.deck.decks);

  const handleAdd = () => navigation.navigate('NewDeckScreen');
  const handleClear = () => dispatch(deleteAllDecks());

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <DefaultButton title="Add" onPress={handleAdd} />
    });

    navigation.setOptions({
      headerLeft: () => <DefaultButton title="Clear Storage" onPress={handleClear} />
    });
  }, [handleAdd, handleClear]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {Object.values(decks).map((deck) => (
        <ClickableCard
          key={deck.id}
          style={styles.card}
          onPress={() =>
            navigation.navigate('DeckScreen', {
              deckId: deck.id
            })
          }
        >
          <Title>{deck.title}</Title>
          <Paragraph>{deck.questions.length} Card(s)</Paragraph>
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
