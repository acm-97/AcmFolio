import { memo } from 'react';
import { Box } from '@mui/material';

import { systemCommands, columns } from '@/constants';
import MuiTable from '@/components/MuiTable';

const Help = () => (
  <Box
    sx={{
      margin: '20px 0',
      '&  .MuiTableRow-root ': {
        '&:nth-of-type(odd)': {
          backgroundColor: (theme) => theme.palette.action.hover,
        },
      },
    }}
  >
    <MuiTable columns={columns} rows={Object.values(systemCommands)} />
  </Box>
);

export default memo(Help);
