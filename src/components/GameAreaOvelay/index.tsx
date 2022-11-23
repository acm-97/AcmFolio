import { memo, useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { PlayArrowRounded } from '@mui/icons-material';
import GameArea from '@acm-97/react-snake-game';
import { H1, H2 } from '@/components';

// type ComponentProps = {};

const ButtonStyles = {
  border: '3px solid',
  borderRadius: 10,
  fontSize: '2rem',
  boxShadow: '0 4px 30px rgba(255, 255, 255, 0.3)',
  paddingRight: '16px'
}
const PlayStyles = {
  width: '1.5em',
  height: '1.5em',
  border: '5px solid',
  borderRadius: 20,
  marginRight: 1.5
}

const GameAreaOvelay = () => {
  const [canMove, setCanMove] = useState(false);

  const onPlay = () => {
    setCanMove(true)
  }

  return (
    <Box className="game-area-wrapper" position="relative">
      {!canMove && (
        <Box className="game-area-overlay">
          <H1>Want to play?</H1>
          <H2 marginBottom={6}>Score: { 0 }</H2>
          <Box>
            <IconButton sx={ButtonStyles} onClick={onPlay}>
              <PlayArrowRounded sx={PlayStyles} fontSize='large' />
                Play
              </IconButton>
            </Box>
        </Box>
      )}
      <GameArea canMove={false} onGameOver={ () => console.log('asdasdasdasdasd')} />
    </Box>
  );
};

export default memo(GameAreaOvelay);
