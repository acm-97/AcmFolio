import { memo } from 'react';
import { styled, Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import GitHubIcon from '@mui/icons-material/GitHub';
import CloseIcon from '@mui/icons-material/Close';

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

  '& a': {
    color: theme.palette.secondary[300],
    display: 'flex',
    alignItems: 'center',
  },

  '& .MuiSvgIcon-root, .close, .minimize': {
    borderRadius: '15px',
    width: '0.9rem',
    minWidth: '0.9rem',
    minHeigth: '0.9rem',
    height: '0.9rem',
    color: 'black',
    margin: '0 3px',
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
  '& .minimize': { backgroundColor: theme.palette.success.main },

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

const TopBar = () => (
  <Wrapper className="TopBar">
    {/* <div className="close">x</div> */}
    <CloseIcon className="close" />
    <OpenInFullIcon className="expand" />
    <div className="minimize">-</div>
    <div className="title">
      <Box
        component="div"
        sx={{
          textOverflow: 'ellipsis',
          overflow: 'hidden',
        }}
      >
        <a
          href="https://github.com/acm-97/portfolio-v2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon
            sx={{
              width: '0.8em !important',
              height: '0.8em !important',
              color: 'white !important',
            }}
          />
          github.com/acm-97/portfolio-v2
        </a>
      </Box>
    </div>
  </Wrapper>
);

export default memo(TopBar);
