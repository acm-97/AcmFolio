// @ts-nocheck
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { url } from 'inspector';

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
      backgroundImage: ' url(./game-area-background.png)',

      '.snake-body-part': {
        border: '1px solid grey !important',
        borderRadius: 30,
        width: '2.5% !important',
        height: '3% !important',
      },
      '.obstacle': {
        background: 'transparent !important',
        borderBottom: '12px solid orange !important',
        borderLeft: '8px solid transparent !important',
        borderRight: '8px solid transparent !important',
      },

      '.food-wrapper, .food-wrapper .food': {
        animation: 'pulsate 1.5s infinite alternate',
        border: '1px solid red',
        padding: '2px',
        borderRadius: ' 10px',
        boxShadow: ` 0 0 .2rem #fff,
          0 0 .2rem #fff,
          0 0 2rem ${theme.palette.text[100]},
          0 0 0.8rem ${theme.palette.text[100]},
          0 0 2.8rem ${theme.palette.text[100]},
          inset 0 0 1.3rem ${theme.palette.text[100]}; `,
      },
    },

    '.game-area-overlay': {
      position: 'absolute',
      zIndex: 50,
      width: '100%',
      height: '100%',
      background: '#010a01',
      borderRadius: '8px',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      // fontFamily: "'Sacramento', sans- serif",

      'h1, h3': {
        animation: 'flicker 1.5s infinite alternate !important',
        color: '#fff',
      },

      '@keyframes flicker': {
        '0%, 18%, 22%, 25%, 53%, 57%, 100%': {
          textShadow: `
          0 0 5px #fff,
           0 0 10px #fff,
            0 0 15px ${theme.palette.text.primary}, 
            0 0 20px ${theme.palette.text.primary}, 
            0 0 25px ${theme.palette.text.primary}, 
            0 0 30px ${theme.palette.text.primary}, 
            0 0 35px ${theme.palette.text.primary};
            `,
        },
        '20%, 24%, 55%': {
          textShadow: 'none',
        },
      },

      '.play-button': {
        animation: 'pulsate 1.5s infinite alternate',
        color: '#fff',
        boxShadow: ` 0 0 .2rem #fff,
          0 0 .2rem #fff,
          0 0 2rem ${theme.palette.text.secondary},
          0 0 0.8rem ${theme.palette.text.secondary},
          0 0 2.8rem ${theme.palette.text.secondary},
          inset 0 0 1.3rem ${theme.palette.text.secondary}; `,
        '@keyframes pulsate': {
          '0%': {
            textShadow: `
              0 0 2px #fff,
              0 0 4px #fff,
              0 0 6px #fff,
              0 0 10px ${theme.palette.text.secondary},
              0 0 45px ${theme.palette.text.secondary},
              0 0 55px ${theme.palette.text.secondary},
              0 0 70px ${theme.palette.text.secondary},
              0 0 80px ${theme.palette.text.secondary}`,
          },
        },
      },
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
