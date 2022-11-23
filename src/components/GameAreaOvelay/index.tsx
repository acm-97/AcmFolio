import { memo, useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { PlayArrowRounded } from '@mui/icons-material';
import GameArea from '@acm-97/react-snake-game';

import { H1, H3 } from '@/components';

// type ComponentProps = {};

const ButtonStyles = {
  borderRadius: 10,
  fontSize: '2rem',
  // boxShadow: '0 4px 30px rgba(255, 255, 255, 0.3)',
  paddingRight: '16px',
  animation: 'pulsate 1.5s infinite alternate',
  border: '0.2rem solid #fff'
};

const GameAreaOvelay = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [score, setScore] = useState(0);

  const startGame = () => {
    setIsRunning(true);
  };

  const stopGame = (value: number) => {
    setIsRunning(false);
    setScore(value);
  };

  return (
    <Box className="game-area-wrapper" position="relative">
      {!isRunning && (
        <Box className="game-area-overlay">
          <H1 marginTop={0} fontSize="2rem !important">
            Snake Game
          </H1>
          <H3 marginBottom={8}>SCORE: {score}</H3>
          <IconButton className="play-button" sx={ButtonStyles} onClick={startGame}>
            <PlayArrowRounded  fontSize="large" />
            Play
          </IconButton>
        </Box>
      )}
      <GameArea state={{ isRunning, generateObstacles: true }} onGameOver={stopGame} />
    </Box>
  );
};

export default memo(GameAreaOvelay);
