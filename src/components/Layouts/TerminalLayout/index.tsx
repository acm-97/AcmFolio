import Draggable from 'react-draggable';
import { memo } from 'react';
import { styled, Theme } from '@mui/material/styles';
import { Paper, PaperProps } from '@mui/material';

import { ChildrenProps } from '@/types';
import { useDraggable } from '@/contexts/DraggableContext';
import ProjectDetails from '@/components/CommandResponse/Responses/Profile/ProjectDetails';

import TopBar from './TopBar';

const Wrapper = styled('div')(() => ({
  width: '100% !important',
  display: 'flex',
  justifyContent: 'center',
  height: '100vh',

  '.react-draggable': {
    margin: 'auto'
  }
}));

const Container = styled('div')(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',

  '& .MuiPaper-root, .TopBar': {
    width: '70%',

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
