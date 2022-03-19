import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';

import { Theme } from './src/constants';
import Navigation from './src/navigation';

const App = () => {
  return (
    <PaperProvider theme={Theme}>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </PaperProvider>
  );
}

export default App;
