import Typewriter from 'typewriter-effect';
import { memo } from 'react';
import { useTranslation } from 'next-i18next';
import { Box } from '@mui/material';

// type ComponentProps = {};

const HeadNotes = () => {
  const { t } = useTranslation('terminal');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        '.Typewriter__wrapper': {
          // @ts-ignore
          ".dollar": { color: (theme) => theme.palette.text[300] },
          // @ts-ignore
          ".hint": { color: (theme) => theme.palette.text[400] },
        },
      }}
    >
      <Typewriter
        options={{ cursor: '▮', delay: 25 }}
        onInit={(typewriter) => {
          typewriter
            .typeString(
              `
            <br/>
            <span class="dollar">$ </span> ${t('line1')} <br/> <br/> 
            <span class="dollar">$ </span> ${t('line2')} <br/> <br/> 
            <span class="dollar">$ </span> ${t('line3.part1')} <span class="hint">"help"</span> ${t(
                'line3.part2',
              )} <br/> <br/> 
            <span class="dollar">$ </span><span class="hint">${t('line4.part1')}</span> ${t('line4.part2')} <br/> <br/> 
            <span class="dollar">$ </span>${t('line5')} 
            `,
            )
            .start();
        }}
      />
    </Box>
  );
};

export default memo(HeadNotes);
