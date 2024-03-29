import Draggable from 'react-draggable';
import { memo } from 'react';
import { styled, Theme } from '@mui/material/styles';
import { Paper, PaperProps } from '@mui/material';

import { ChildrenProps } from '@/types';
import { useDraggable } from '@/contexts/DraggableContext';
import { ProjectDetails } from '@/components';

import TopBar from './TopBar';

const Wrapper = styled('div')(() => ({
  width: '100% !important',
  display: 'flex',
  justifyContent: 'center',
  height: '100vh',
  
  '.react-draggable': {
    margin: 'auto',
  },
}));

const Container = styled('div')(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',

  '& .MuiPaper-root, .TopBar': {
    width: '55%',

    [theme.breakpoints.down('xl')]: {
      width: '70%',
    },

    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
  },
}));

const TerminalWrapper = styled(Paper)<PaperProps>(({ theme }: { theme: Theme }) => ({
  fontSize: '1.2rem',
  borderRadius: '0 0 20px 20px',
  padding: '10px 15px',
  overflow: 'auto',
  width: '100%',
  height: '65vh',
  maxHeight: '65vh',

  'p, span' : {
    fontSize: '1.2rem',
  fontWeight: 500
  },

  'td, th' : {
    fontSize: '1.1rem',
  fontWeight: 500
  },

  [theme.breakpoints.down('md')]: {
    height: 'calc(100vh - 200px)',
    maxHeight: 'calc(100vh - 200px)',
    fontSize: '1rem',
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
}));

type TerminalLayaoutTypes = ChildrenProps;

const TerminalLayaout = ({ children }: TerminalLayaoutTypes) => {
  const { draggables } = useDraggable();

  return (
    <Wrapper>
      {draggables.map((item) => (
        <ProjectDetails key={item.projectName} draggable={item} />
      ))}
      <Draggable handle=".drag-terminal">
        <Container>
          <TopBar />
          <TerminalWrapper id="terminal-container">{children}</TerminalWrapper>
        </Container>
      </Draggable>
    </Wrapper>
  );
};

export default memo(TerminalLayaout);
