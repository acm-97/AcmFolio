import React from 'react';
import Box, { BoxProps } from '@mui/material/Box';

import { ChildrenProps } from '@/types';

const PageWidthContainer = ({
  children,
  ...props
}: ChildrenProps & BoxProps) => (
  <Box className="page-wrapper" {...props}>
    {children}
  </Box>
);

export default PageWidthContainer;
