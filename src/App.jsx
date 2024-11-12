import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme';
import Main from './components/Main';
import { saveThemePreference, getInitialTheme } from './themeUtils';
import { getAuth, signInAnonymously } from 'firebase/auth';
import { app } from './firebaseConfig';
import { requestPermission } from './components/RequestPermissions';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme());

  useEffect(() => {
    saveThemePreference(isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    const auth = getAuth(app);
    signInAnonymously(auth)
      .then(() => {
        console.log('Usuario anónimo autenticado');
      })
      .catch((error) => {
        console.error('Error en la autenticación anónima:', error);
      });

    requestPermission();
  }, []);

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
