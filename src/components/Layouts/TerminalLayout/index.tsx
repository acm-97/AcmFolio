import { memo, useEffect } from 'react';
import { styled, Theme } from '@mui/material/styles';
import { Paper, PaperProps } from '@mui/material';

import { ChildrenProps } from '@/types';

import TopBar from './TopBar';

const Wrapper = styled('div')(({ theme }: { theme: Theme }) => ({
  width: '100%',
  height: '100',
  display: 'flex',
  flex: '1 1 auto',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',

  '& .MuiPaper-root, .TopBar': {
    [theme.breakpoints.down('xl')]: {
      width: '60%',
    },

    [theme.breakpoints.down('lg')]: {
      width: '70%',
    },

    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
  },
}));

const Container = styled(Paper)<PaperProps>(({ theme }: { theme: Theme }) => ({
  width: '50%',
  height: '65vh',
  borderRadius: '0 0 20px 20px',
  padding: '10px 15px',

  [theme.breakpoints.down('md')]: {
    width: '90%',
    height: 'calc(100vh - 350px)',
  },

  [theme.breakpoints.down('md')]: {
    width: '90%',
    height: 'calc(100vh - 200px)',
  },
}));

type TerminalLayaoutTypes = ChildrenProps & {
  inputCommandFocus?: () => void;
};

const TerminalLayaout = ({
  children,
  inputCommandFocus,
}: TerminalLayaoutTypes) => {
  useEffect(
    () => inputCommandFocus && inputCommandFocus(),
    [inputCommandFocus]
  );

  return (
    <Wrapper>
      <TopBar />
      <Container onClick={inputCommandFocus}>{children}</Container>
    </Wrapper>
  );
};

export default memo(TerminalLayaout);
