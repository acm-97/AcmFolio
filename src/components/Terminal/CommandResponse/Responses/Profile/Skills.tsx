import { memo } from 'react';
import { Box } from '@mui/material';

import useSkills from '@/hooks/useSkills';
import MuiTable from '@/components/MuiTable';

// type SkillsProps = {};

const Skills = () => {
  const { columns, rows } = useSkills();

  return (
    <Box
      sx={{
        margin: '20px 0',
        '&  .MuiTableRow-root ': {
          '&:nth-of-type(odd)': {
            backgroundColor: (theme) => theme.palette.action.hover,
          },
        },
        '& .MuiTableHead-root ': {
          display: 'none',
        },
      }}
    >
      <MuiTable columns={columns} rows={Object.values(rows)} />
    </Box>
  );
};

export default memo(Skills);
