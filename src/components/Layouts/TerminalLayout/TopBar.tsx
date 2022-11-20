import { memo } from 'react';
import { styled, Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseIcon from '@mui/icons-material/Close';

import { useCommands } from '@/hooks';

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
  '& .close, .minimize': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 700,
  },
  '& .close': { backgroundColor: theme.palette.error.main },
  '& .expand': { backgroundColor: theme.palette.warning.main },

  '& .title': {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',

    [theme.breakpoints.down('sm')]: {
      flex: 0,
      marginLeft: 20,
      width: '70%',
      whiteSpace: 'nowrap',
    },
    [theme.breakpoints.down('xs')]: {
      width: '60%',
    },
  },

  [theme.breakpoints.down('md')]: {
    height: '4.5vh',
  },
}));

const TopBar = () => {
  const { setFullScreen, exit } = useCommands();

  return (
    <Wrapper className="TopBar drag-terminal">
      {/* <div className="close">x</div> */}
      <IconButton onClick={exit}>
        <CloseIcon className="close" />
      </IconButton>
      <IconButton onClick={setFullScreen}>
        <OpenInFullIcon className="expand" />
      </IconButton>
      <div className="title">
        <Box
          component="div"
          sx={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            // @ts-ignore
            color: (theme) => theme.palette.secondary[300],
          }}
        >
          root@acm-97/AcmFolio: ~
        </Box>
      </div>
    </Wrapper>
  );
};

export default memo(TopBar);
