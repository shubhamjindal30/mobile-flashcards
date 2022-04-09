/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { useEffect } from 'react';
import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  DeckListScreen,
  DeckScreen,
  NewCardScreen,
  NewDeckScreen,
  QuizScreen,
  NotFoundScreen
} from '../screens';
import { RootStackParamList } from '../types';
import { useDispatch } from '../store/hooks';
import { getDecks } from '../store/decks/slice';

const navigationRef = createNavigationContainerRef<RootStackParamList>();

export const navigate = (name: keyof RootStackParamList, params: any) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};

const Navigation = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDecks());
  }, [dispatch]);

  return (
    <NavigationContainer ref={navigationRef}>
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
      <Stack.Screen
        name="NewCardScreen"
        component={NewCardScreen}
        options={{ headerShown: true, title: 'Add Card' }}
      />
      <Stack.Screen
        name="QuizScreen"
        component={QuizScreen}
        options={{ headerShown: true, title: 'Quiz' }}
      />
      <Stack.Screen name="NotFoundScreen" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
};

export default Navigation;
