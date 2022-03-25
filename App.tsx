import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';

import { Theme } from './src/constants';
import Navigation from './src/navigation';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={Theme}>
        <SafeAreaProvider>
          <Navigation />
          <StatusBar style="auto" />
        </SafeAreaProvider>
      </PaperProvider>
    </Provider>
  );
};

export default App;
