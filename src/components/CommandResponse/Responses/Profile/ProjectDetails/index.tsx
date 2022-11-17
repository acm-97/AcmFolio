import TopBar from '@/components/Layouts/TerminalLayout/TopBar';
import { Paper } from '@mui/material';
import { memo, useState } from 'react';
import Draggable from 'react-draggable';

// type ProjectDetailsProps = {};

const ProjectDetails = () => {
  return (
    <Draggable>
      <Paper style={{ position: 'absolute', zIndex: 100, top: 0, left: 0, width: '600px' }}>
        <TopBar />
        <div>ProjectDetails Loaded</div>
      </Paper>
    </Draggable>
  );
};

export default memo(ProjectDetails);
