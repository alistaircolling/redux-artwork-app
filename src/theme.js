import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0a3a61',
    },
    secondary: {
      main: '#d1a110',
    },
  },
  typography: {
    fontFamily: [
      'Helvetica',
    ].join(','),
  },
});

export default theme
