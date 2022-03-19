import { View, Text, StyleSheet } from 'react-native';

import { RootStackScreenProps } from '../types';
import { Button } from '../components';

const NotFoundScreen = ({ navigation }: RootStackScreenProps<'NotFoundScreen'>) => {
  const handlePress = () => navigation.navigate('DeckListScreen');
  return (
    <View style={styles.container}>
      <Text>Screen not found.</Text>
      <Button mode="contained" onPress={handlePress}>
        Go to Home
      </Button>
    </View>
  );
};

export default NotFoundScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
