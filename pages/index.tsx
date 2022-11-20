import Typewriter from 'typewriter-effect';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { styled, Theme } from '@mui/material/styles';
import { Box, Paper } from '@mui/material';

import { COMMON_LOCALE } from '@/settings';
import {
  EN_FRONTEND_DEVELOPER,
  ES_FRONTEND_DEVELOPER,
  GITHUB,
} from '@/constants';
import { LanguageSelector, ThemeSelector } from '@/components';
import Image from 'next/image';

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

  '.image': {
    position: 'relative',
    width: '100%',
    height: '20vh',
    marginBottom: 50,
  },

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
}));
const Home = () => {
  const router = useRouter();

  return (
    <Wrapper>
      <Box className="image">
        <Image
          src="/logos/logo-home.png"
          alt="logo-home"
          layout="fill"
          objectFit="contain"
        />
      </Box>
      <Paper className="terminal">
        <div className="options">
          <LanguageSelector mini />
          <ThemeSelector />
        </div>
        <Paper className="text">
          <Typewriter
            options={{ cursor: '▮', delay: 25 }}
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  `<span class="dollar">$ </span> Hello there <br/> 
                           <span class="dollar">$ </span> Welcome to AcmFolio v1.0 by`
                )

                .typeString(
                  '<span id="user-name" class="user-name"> @acm-97 </span> <br/> '
                )
                .callFunction(() => {
                  document
                    ?.getElementById('user-name')
                    ?.addEventListener('click', () => {
                      window?.open(GITHUB);
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
                          ? ES_FRONTEND_DEVELOPER
                          : EN_FRONTEND_DEVELOPER
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
