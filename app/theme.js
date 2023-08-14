import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#AB96D9',
      light: '#DCDCDC',
      brightest: '#FFF',
      dark: '#200459',
      extraDark: '#6D49F1'
    },
    secondary: {
      main: '#FAE84E',
    },
    text: {
        light: '#FFF',
        dark: '#000'
    }
  },
  typography: {
    fontFamily: 'Ubuntu',
  },
});

export default theme;