import { DefaultTheme } from 'react-native-paper';

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      secondary: string;
      secondaryDark: string;
      white: string;
      black: string;
    }
  }
}

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#145DA0',
    secondary: '#398AB9',
    secondaryDark: '#222222',
    error: 'red',
    darkGrey: '#444',
    white: '#ffffff',
    black: '#000000',
  }
};
