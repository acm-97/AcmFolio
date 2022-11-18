import { memo, useCallback } from 'react';
import { styled, Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { useDraggable } from '@/contexts/DraggableContext';

const Wrapper = styled('div')(({ theme }: { theme: Theme }) => ({
  width: '100%',
  height: '3.5vh',
  display: 'flex',
  flex: '1 1 auto',
  flexGrow: 2,
  alignItems: 'center',
  borderRadius: '20px 20px 0 0',
  background: '#232323',
  padding: '0 18px',

  ':hover': { cursor: 'grab' },

  '& .MuiSvgIcon-root, .close': {
    borderRadius: '15px',
    width: '0.9rem',
    minWidth: '0.9rem',
    minHeigth: '0.9rem',
    height: '0.9rem',
    color: 'black',
    ':hover': { cursor: 'pointer' },
  },
  '& .close': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 700,
    backgroundColor: theme.palette.error.main,
  },

  '& .title': {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    // @ts-ignore
    color: theme.palette.text[300],
  },

  [theme.breakpoints.down('md')]: {
    height: '4.5vh',
  },
}));

type TopBar = {
  projectName: string;
};

const TopBar = ({ projectName }: TopBar) => {
  const { draggables, closeDragable } = useDraggable();

  const handleClose = useCallback(() => {
    const filter = draggables.filter(
      (item) => item.projectName !== projectName
    );
    closeDragable(filter);
  }, [draggables, closeDragable, projectName]);

  return (
    <Wrapper className="drag-projects-details">
      <IconButton onClick={handleClose}>
        <CloseIcon className="close" />
      </IconButton>
      <div className="title">
        <Box
          component="div"
          sx={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
          }}
        >
          {projectName}
        </Box>
      </div>
    </Wrapper>
  );
};

export default memo(TopBar);
