import { memo } from 'react';
import { Box } from '@mui/material';

import MuiTable, { ColumnProps } from '@/components/MuiTable';

type HelpProps = {
  rows: any[];
  columns: ColumnProps[];
};

const Help = ({ rows, columns }: HelpProps) => (
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
    <MuiTable columns={columns} rows={rows} />
  </Box>
);

export default memo(Help);
