import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme, lightChristmas, darkChristmas } from './theme';
import Main from './components/Main';
import { saveThemePreference, getInitialTheme } from './themeUtils';

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(getInitialTheme());

  useEffect(() => {
    saveThemePreference(currentTheme);
  }, [currentTheme]);

  const toggleTheme = (theme) => {
    setCurrentTheme(theme); // Ahora actualiza `currentTheme` basado en el tema seleccionado
  };

  const getTheme = () => {
    switch (currentTheme) {
      case 'dark':
        return darkTheme;
      case 'lightChristmas':
        return lightChristmas;
      case 'darkChristmas':
        return darkChristmas;
      default:
        return lightTheme;
    }
  };

  return (
    <ThemeProvider theme={getTheme()}>
      <Main toggleTheme={toggleTheme} currentTheme={currentTheme} />
    </ThemeProvider>
  );
};

export default App;
