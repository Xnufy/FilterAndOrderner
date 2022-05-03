import React from 'react';
import {SafeAreaView} from 'react-native';

import {ThemeProvider} from 'styled-components';

import theme from './src/global/theme';

import Home from './src/pages/Home';

const App = () => {
  return (
    <SafeAreaView>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </SafeAreaView>
  );
};

export default App;
