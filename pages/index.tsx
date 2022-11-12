import Typewriter from 'typewriter-effect';
import { useRouter } from 'next/router';
import { styled, Theme } from '@mui/material/styles';
import { Paper } from '@mui/material';

const Wrapper = styled('div')(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  width: '100%',
  padding: '20px',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '100vh',
  maxHeight: '100vh',
  '.text': {
    color: theme.palette.text[200],
    width: '30%',
    padding: 30,
    minHeight: '50vh',

    '.blink_me': {
      color: theme.palette.text[400],
      animation: 'blinker 1s linear infinite',
      cursor: 'pointer',
      fontWeight: 800,
    },

    '@keyframes blinker': {
      '50%': { opacity: 0 },
    },

    [theme.breakpoints.down('xl')]: {
      width: '45%',
    },
    [theme.breakpoints.down('lg')]: {
      width: '55%',
    },
    [theme.breakpoints.down('md')]: {
      width: '85%',
      fontSize: '1.5em',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: 15,
      fontSize: '1em',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.8em',
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
    '.userName': {
      color: theme.palette.text[400],
    },
    '.dollar': {
      color: theme.palette.text[100],
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
      </div>
      <Paper className="text">
        <Typewriter
          options={{ cursor: '▮' }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                `<span class="dollar">$ </span> Hello there <br/> 
              <span class="dollar">$ </span> Welcome to ACMFolio v1.0 by <span class="userName"> @acm-97 </span><br/> 
              <span class="dollar">$ </span>  I'm a <span class="userName"> Frontend Web Developer </span> and this web is my Portfolio. <br/> 
              <span class="dollar">$ </span>  Do you want to continue and find out more about me? <br/>
              `
              )
              .pauseFor(2000)
              .typeString(
                `
              <span class="dollar">$ </span>  Still here? Greate!! Let's start then. 
              `
              )
              .callFunction(async () => {
                await router.push('/terminal');
              })
              .start();
          }}
        />
      </Paper>
    </Wrapper>
  );
};

export default Home;
