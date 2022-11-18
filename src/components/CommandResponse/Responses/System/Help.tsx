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
      '& .MuiTableContainer-root': {
        /* width */
        '&::-webkit-scrollbar': {
          width: '8px',
          height: '10px',
        },

        /* Track */
        '&::-webkit-scrollbar-track': {
          boxShadow: (theme) => `inset 0 0 4px ${theme.palette.secondary.main}`,
          borderColor: (theme) => theme.palette.secondary.main,
          borderRadius: '15px',
        },
        /* Handle */
        '&::-webkit-scrollbar-thumb': {
          background: '#B9BBC6',
          borderRadius: '15px',
        },
      },
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
