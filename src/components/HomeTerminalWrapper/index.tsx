import { styled, Theme } from '@mui/material/styles';

export const Wrapper = styled('div')(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  width: '100%',
  padding: '20px',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  minHeight: '100vh',
  maxHeight: '100vh',
  overflowY: 'auto',

  '.image': {
    position: 'relative',
    width: '100%',
    height: '20vh',
    marginTop: 50,

    [theme.breakpoints.down('lg')]: {
      marginBottom: 20,
      marginTop: 30,
    },
  },

  '.terminal': {
    display: 'flex',
    alignItems: 'flex-end',
    width: '35%',
    flexDirection: 'column',
    backgroundColor: '#232323',
    '.options': {
      display: 'flex',
      borderRadius: '8px 8px 0 0',
      paddingRight: 20,
      '.MuiSvgIcon-root': {
        fontSize: '1.2rem',
      },
      '.MuiButtonBase-root': {
        ':hover': {
          backgroundColor: 'transparent !important',
        },
      },
    },
    '.text': {
      width: '100%',
      padding: 30,
      minHeight: '40vh',
      [theme.breakpoints.down('md')]: {
        fontSize: '1.5em',
      },
      [theme.breakpoints.down('sm')]: {
        padding: 15,
        fontSize: '1em',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.8em',
      },
    },

    [theme.breakpoints.down('xl')]: {
      width: '45%',
    },
    [theme.breakpoints.down('lg')]: {
      width: '55%',
    },
    [theme.breakpoints.down('md')]: {
      width: '85%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },

  '.Typewriter__wrapper': {
    fontSize: '1.8em',
    '.user-name, .frontend': {
      color: theme.palette.text.secondary,
      cursor: 'pointer',
    },
    '.dollar': {
      color: theme.palette.error.main,
    },
    '#continue-blink': {
      color: theme.palette.text.secondary,
      animation: 'blinker 1s linear infinite',
      cursor: 'pointer',
      fontWeight: 800,
    },
    '@keyframes blinker': {
      '50%': { opacity: 0 },
    },
  },
  '& .Typewriter__cursor ': {
    fontSize: '1.8em',
    lineHeight: 0,
  },
  '& .ContainerWrapper ': {
    width: '100%',
    display: 'flex',
    padding: '0 100px',
    margin: 'auto',
    justifyContent: 'space-evenly',

    '.game-area': {
      width: '600px !important',
      height: '100% !important',
    },

    '.game-area-overlay': {
      position: 'absolute',
      zIndex: 50,
      width: '100%',
      height: '100%',
      background: 'rgba(255, 255, 255, 0.2)',
      borderRadius: '16px',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(5px)',
      WebkitBackdropFilter: 'blur(5px)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },

    [theme.breakpoints.down('xl')]: {
      padding: 0,
      '.game-area': {
        width: '550px !important',
        height: '100% !important',
      },
    },

    [theme.breakpoints.down('lg')]: {
      '.game-area-wrapper': {
        display: 'none !important',
      },
    },

    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
}));
