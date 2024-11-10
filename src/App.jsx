import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme';
import Main from './components/Main';
import { saveThemePreference, getInitialTheme } from './themeUtils';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme());

  useEffect(() => {
    saveThemePreference(isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Main toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
    </ThemeProvider>
  );
};

export default App;