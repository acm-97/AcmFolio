import { memo, useState, useCallback } from 'react';
import { useTranslation } from 'next-i18next';
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
  border: '0.2rem solid #fff',
};

const GameAreaOvelay = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const { t } = useTranslation('home');

  const startGame = () => {
    setIsRunning(true);
  };

  const stopGame = useCallback((value: number) => {
    setIsGameOver(true);
    setTimeout(() => {
      setScore(value);
      setBestScore((prev) => prev + value);
      setIsRunning(false);
      setIsGameOver(false);
    }, 4000);
  }, []);

  return (
    <Box className="game-area-wrapper" position="relative">
      {isGameOver && (
        <Box className="game-area-overlay">
          <H1 className="gameover-blood" marginTop={0} fontSize="3rem !important">
            GAME OVER
          </H1>
        </Box>
      )}
      {!isRunning && (
        <Box className="game-area-overlay">
          <H1 marginTop={0} fontSize="2rem !important">
            {t('snake.header')}
          </H1>
          <Box sx={{ display: 'flex', marginBottom: 8, marginTop: 2 }}>
            <H3>
              {t('snake.bestScore')}: {bestScore}
            </H3>
            <H3 marginLeft={8}>{t('snake.score')} {score}</H3>
          </Box>
          <IconButton className="play-button" sx={ButtonStyles} onClick={startGame}>
            <PlayArrowRounded fontSize="large" />
            {t('snake.play')}
          </IconButton>
        </Box>
      )}
      <GameArea state={{ isRunning, generateObstacles: true }} onGameOver={stopGame} />
    </Box>
  );
};

export default memo(GameAreaOvelay);
