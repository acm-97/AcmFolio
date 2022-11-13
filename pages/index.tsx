import Typewriter from 'typewriter-effect';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { styled, Theme } from '@mui/material/styles';
import { Paper } from '@mui/material';

import { COMMON_LOCALE } from '@/settings';
import { LanguageSelector, ThemeSelector } from '@/components';

/*
 * manage the current locale (language)
 * and "locales".json availables for page translation
 */
export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, [...COMMON_LOCALE])),
  },
});

const Wrapper = styled('div')(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  width: '100%',
  padding: '20px',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  minHeight: '100vh',
  maxHeight: '100vh',
  '.terminal': {
    display: 'flex',
    alignItems: 'flex-end',
    width: '30%',
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
      minHeight: '50vh',
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

  '.emojis': {
    marginBottom: '100px',
    display: 'flex',
    alignItems: 'center',
    fontSize: '8em',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '50px',
      fontSize: '3em',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.8em',
    },
  },
  '.emojis span': {
    fontSize: '1em !important',
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
  '.Typewriter__cursor ': {
    fontSize: '1.8em',
  },
}));
const Home = () => {
  const router = useRouter();

  return (
    <Wrapper>
      <div className="emojis">
        <Typewriter
          options={{ cursor: '', delay: 0, deleteSpeed: 0, loop: true }}
          onInit={(typewriter) => {
            typewriter
              .typeString(' <span>👈</span> ')
              .pauseFor(4000)
              .deleteAll()
              .typeString(' <span>👉</span> ')
              .pauseFor(4000)
              .deleteAll()
              .start();
          }}
        />
        <div>( ͡• ͜ʖ ͡• )</div>
        <Typewriter
          options={{ cursor: '', delay: 0, loop: true }}
          onInit={(typewriter) => {
            typewriter
              .typeString(' <span>👈</span> ')
              .pauseFor(4000)
              .deleteAll()
              .typeString(' <span>👉</span> ')
              .pauseFor(4000)
              .deleteAll()
              .start();
          }}
        />
      </div>
      <Paper className="terminal">
        <div className="options">
          <LanguageSelector mini />
          <ThemeSelector />
        </div>
        <Paper className="text">
          <Typewriter
            options={{ cursor: '▮' }}
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  `<span class="dollar">$ </span> Hello there <br/> 
                           <span class="dollar">$ </span> Welcome to ACMFolio v1.0 by`
                )

                .typeString(
                  '<span id="user-name" class="user-name"> @acm-97 </span> <br/> '
                )
                .callFunction(() => {
                  document
                    ?.getElementById('user-name')
                    ?.addEventListener('click', () => {
                      window?.open('https://github.com/acm-97');
                    });
                })
                .typeString(`<span class="dollar">$ </span>  I'm a `)
                .typeString(
                  `<span id="frontend" class="frontend"> Front-End Web Developer </span> `
                )
                .callFunction(() => {
                  document
                    ?.getElementById('frontend')
                    ?.addEventListener('click', () => {
                      window?.open(
                        router.locale === 'es'
                          ? 'https://es.wikipedia.org/wiki/Desarrollo_web_Front-end'
                          : 'https://en.wikipedia.org/wiki/Front-end_web_development'
                      );
                    });
                })
                .typeString(` and this web is my Portfolio. <br/>  `)
                .typeString(
                  ` <span class="dollar">$ </span>  Do you want to   `
                )
                .typeString(` <span id="continue-blink">continue</span>  `)
                .callFunction(() => {
                  document
                    ?.getElementById('continue-blink')
                    ?.addEventListener(
                      'click',
                      async () => await router.push('/terminal')
                    );
                })
                .typeString(` and find out more about me? `)

                .start();
            }}
          />
        </Paper>
      </Paper>
    </Wrapper>
  );
};

export default Home;
