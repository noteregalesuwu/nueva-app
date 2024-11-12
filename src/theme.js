import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1de9b6',
      uenoCountdown: '#1de9b6',
    },
    background: {
      default: '#fff',
      ueno: '#1de9b6',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1de9b6',
      uenoCountdown: '#1de9b6',
    },
    background: {
      default: '#121212',
      ueno: '#1de9b6',
    },
  },
});