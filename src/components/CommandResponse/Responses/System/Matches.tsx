import { memo } from 'react';
import { Box } from '@mui/material';

import { Span } from '@/components/Typography';

type MatchesProps = {
  match: any[];
};

const Matches = ({ match }: MatchesProps) => (
  <Box paddingY='20px' sx={{display: 'flex', alignItems: 'center'}}>
    {match.map((item) => (
      <Span marginX={1.5} key={item}>{item}</Span>
    ))}
  </Box>
);

export default memo(Matches);
