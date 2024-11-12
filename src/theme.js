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
      navBar: '#1de9b6',
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
      navBar: '#1de9b6',
    },
  },
});

export const lightChristmas = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#226f54',
      uenoCountdown: '#da2c38',
    },
    secondary: {
      main: '#da2c38',
    },
    background: {
      default: '#87c38f',
      ueno: '#ff1744',
      navBar: '#226f54',
    },
  },
});

export const darkChristmas = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#226f54',
      uenoCountdown: '#226f54',
    },
    secondary: {
      main: '#da2c38',
    },
    background: {
      default: '#43291f',
      ueno: '#ff1744',
      navBar: '#226f54',
    },
  },
});
