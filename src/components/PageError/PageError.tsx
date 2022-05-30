import React, { memo } from 'react';
import { Box } from '@mui/material';
import { ChildrenProps } from '@/types';

const boxStyle = {
  minHeight: '50vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const PageError = ({ children }: ChildrenProps) => (
  <Box sx={boxStyle}>{children}</Box>
);

export default memo(PageError);
