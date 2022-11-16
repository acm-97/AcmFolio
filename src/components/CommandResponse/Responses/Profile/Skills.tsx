import { memo } from 'react';
import { Box } from '@mui/material';

import { skillsColumns, rows } from '@/constants';
import MuiTable from '@/components/MuiTable';

// type SkillsProps = {};

const Skills = () => (
  <Box
    sx={{
      margin: '20px 0',
      '&  .MuiTableRow-root ': {
        '&:nth-of-type(even)': {
          backgroundColor: (theme) => theme.palette.action.hover,
        },
      },
      '&  .MuiTableHead-root ': {
        display: 'none',
      },
    }}
  >
    <MuiTable columns={skillsColumns} rows={Object.values(rows)} />
  </Box>
);

export default memo(Skills);
