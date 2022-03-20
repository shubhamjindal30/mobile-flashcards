/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DeckListScreen, DeckScreen, NewDeckScreen, NotFoundScreen } from '../screens';
import { RootStackParamList } from '../types';

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DeckListScreen"
        component={DeckListScreen}
        options={{ headerShown: true, title: 'Decks' }}
      />
      <Stack.Screen
        name="DeckScreen"
        component={DeckScreen}
        options={{ headerShown: true, title: '' }}
      />
      <Stack.Screen
        name="NewDeckScreen"
        component={NewDeckScreen}
        options={{ headerShown: true, title: '' }}
      />
      <Stack.Screen name="NotFoundScreen" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
};

export default Navigation;
