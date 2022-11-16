import { memo } from 'react';
import { Box } from '@mui/material';

import { systemCommands, systemColumns } from '@/constants';
import MuiTable from '@/components/MuiTable';

const Help = () => (
  <Box
    sx={{
      margin: '20px 0',
      '&  .MuiTableRow-root ': {
        '&:nth-of-type(even)': {
          backgroundColor: (theme) => theme.palette.action.hover,
        },
      },
    }}
  >
    <MuiTable columns={systemColumns} rows={Object.values(systemCommands)} />
  </Box>
);

export default memo(Help);
