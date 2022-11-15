import { memo, useEffect } from 'react';
import { styled, Theme } from '@mui/material/styles';
import { Paper, PaperProps } from '@mui/material';

import { scrollToBottom } from '@/utils';
import { ChildrenProps } from '@/types';

import TopBar from './TopBar';

const Wrapper = styled('div')(() => ({
  width: '100% !important',
  display: 'flex',
  justifyContent: 'center',
}));

const Container = styled('div')(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '80% !important',

  '& .MuiPaper-root, .TopBar': {
    [theme.breakpoints.down('xl')]: {
      width: '70%',
    },

    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
  },
}));

const TerminalWrapper = styled(Paper)<PaperProps>(
  ({ theme }: { theme: Theme }) => ({
    borderRadius: '0 0 20px 20px',
    padding: '10px 15px',
    overflow: 'auto',
    width: '100%',
    height: '65vh',
    maxHeight: '65vh',

    [theme.breakpoints.down('md')]: {
      height: 'calc(100vh - 200px)',
      maxHeight: 'calc(100vh - 200px)',
    },

    /* width */
    '&::-webkit-scrollbar': {
      width: '8px',
      height: '10px',
    },

    /* Track */
    '&::-webkit-scrollbar-track': {
      boxShadow: `inset 0 0 4px ${theme.palette.secondary.main}`,
      borderColor: theme.palette.secondary.main,
      borderRadius: '15px',
    },
    /* Handle */
    '&::-webkit-scrollbar-thumb': {
      background: '#B9BBC6',
      borderRadius: '15px',
    },
  })
);

type TerminalLayaoutTypes = ChildrenProps;

const TerminalLayaout = ({ children }: TerminalLayaoutTypes) => (
  <Wrapper>
    <Container>
      <TopBar />
      <TerminalWrapper id="terminal-container">{children}</TerminalWrapper>
    </Container>
  </Wrapper>
);

export default memo(TerminalLayaout);
