import { THEMES } from '@/settings/theme';
import {
  error,
  info,
  primary,
  secondary,
  success,
  warning,
  customLayout,
} from './themeColors';

const fontSize = 14;

export const defaultTheme = {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '4px',
        },
        sizeLarge: {
          padding: '0.6rem 1.5rem',
        },
        containedPrimary: {
          color: 'white',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
        },
        html: {
          MozOsxFontSmoothing: 'grayscale',
          WebkitFontSmoothing: 'antialiased',
          height: '100%',
          width: '100%',
        },
        body: {
          height: '100%',
        },
        a: {
          textDecoration: 'none',
          color: 'inherit',
        },
        '#root': {
          height: '100%',
        },
        '#nprogress .bar': {
          zIndex: '9999 !important',
          backgroundColor: '#61A9FF !important',
          width: '100%',
          position: 'fixed',
        },
        'input[type=number]::-webkit-outer-spin-button, input[type=number]::-webkit-inner-spin-button':
          {
            WebkitAppearance: 'none',
            margin: 0,
          },
      },
    },
    MuiRating: {
      styleOverrides: {
        root: {
          color: '#FFD600',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
  typography: {
    fontSize: 14,
    h1: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '1.25rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1rem',
    },
    h4: {
      fontWeight: 600,
      fontSize,
    },
    h5: {
      fontWeight: 600,
      fontSize,
    },
    h6: {
      fontWeight: 500,
      fontSize,
    },
    p: {
      fontSize,
    },
    overline: {
      fontWeight: 600,
    },
    body1: {
      fontSize,
    },
    body2: {
      fontSize,
    },
  },
};

export const themesOptions = {
  [THEMES.LIGHT]: {
    palette: {
      // primary,
      secondary,
      // error,
      //
      // warning,
      // success,
      // info,
      // divider: secondary[300],
      background: {
        default: '#ffffff',
      },
      text: {
        primary: secondary[500],
        secondary: secondary[450],
        disabled: secondary[400],
      },
      ...customLayout.light,
      mode: 'light',
    },
    components: {},
  },
  [THEMES.DARK]: {
    palette: {
      primary,
      error,
      warning,
      success,
      info,
      background: {
        default: '#1e2732',
        paper: '#222b36',
      },
      ...customLayout.dark,
      mode: 'dark',
    },
    components: {
      MuiTableCell: {
        styleOverrides: {
          root: {
            border: 'none',
          },
        },
      },
      MuiPopover: {
        styleOverrides: {
          root: {
            '& .MuiPopover-paper': {
              border: '1px solid rgba(255, 255, 255, 0.12)',
            },
          },
        },
      },
    },
  },
};
