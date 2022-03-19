import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';

import { Theme } from './src/constants';
import DeckListScreen from './src/screens/DeckListScreen';

export default function App() {
  return (
    <PaperProvider theme={Theme}>
      <SafeAreaProvider>
        <DeckListScreen />
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </PaperProvider>
  );
}
