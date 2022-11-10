import React, { ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const LayoutRoot = styled('main')(() => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 65,
}));

export type MainLayoutRootProps = {
  children?: ReactNode;
};

export const MainLayoutRoot = (props: MainLayoutRootProps) => {
  const { children } = props;

  return (
    <>
      <LayoutRoot>
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          {children}
        </Box>
      </LayoutRoot>
    </>
  );
};

export const MainLayout = ({ children, ...props }: MainLayoutRootProps) => (
  <MainLayoutRoot {...props}>{children}</MainLayoutRoot>
);

export default MainLayout;
