import { View, Text, StyleSheet } from "react-native";

const DeckListScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Deck List</Text>
    </View>
  );
};

export default DeckListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
