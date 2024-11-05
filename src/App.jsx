import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import Main from './components/Main';
import theme from './themes/mainTheme';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main></Main>
    </ThemeProvider>
  );
}

export default App;
