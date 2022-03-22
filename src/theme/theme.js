import { createTheme } from '@mui/material/styles';
import merge from 'deepmerge';
import { green, grey, indigo, red } from '@mui/material/colors';

const customBlue = {
  50: '#e9f0fb',
  100: '#c8daf4',
  200: '#a3c1ed',
  300: '#7ea8e5',
  400: '#6395e0',
  500: '#4782da',
  600: '#407ad6',
  700: '#376fd0',
  800: '#2f65cb',
  900: '#2052c2 ',
};
const defaultVariant = {
  palette: {
    mode: 'light',
    primary: {
      main: customBlue[700],
      contrastText: '#FFF',
    },
    secondary: {
      main: customBlue[500],
      contrastText: '#FFF',
    },
    background: {
      default: '#F7F9FC',
      paper: '#FFF',
    },
  },
  header: {
    color: grey[500],
    background: '#FFF',
    search: {
      color: grey[800],
    },
    indicator: {
      background: customBlue[600],
    },
  },
  footer: {
    color: grey[500],
    background: '#FFF',
  },
  sidebar: {
    color: grey[200],
    background: '#233044',
    header: {
      color: grey[200],
      background: '#233044',
      brand: {
        color: customBlue[500],
      },
    },
    footer: {
      color: grey[200],
      background: '#1E2A38',
      online: {
        background: green[500],
      },
    },
    badge: {
      color: '#FFF',
      background: customBlue[500],
    },
  },
};

const theme = createTheme(
  merge(defaultVariant, {
    palette: {
      mode: 'dark',
      primary: {
        main: customBlue[600],
        contrastText: '#FFF',
      },
      background: {
        default: '#1B2635',
        paper: '#233044',
      },
      text: {
        primary: 'rgba(255, 255, 255, 0.95)',
        secondary: 'rgba(255, 255, 255, 0.5)',
      },
    },
    header: {
      color: grey[300],
      background: '#1B2635',
      search: {
        color: grey[200],
      },
    },
    footer: {
      color: grey[300],
      background: '#233044',
    },
  })
);

export default theme;
