import React, { ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
// import { useToggle } from '@/hooks';
// import { Navbar, SideBar } from '@/components';

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
  // const { isOpen, onOpen, onClose } = useToggle(false);

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
      {/* <Navbar onOpenSidebar={onOpen} /> */}
      {/* <SideBar open={isOpen} onClose={onClose} /> */}
    </>
  );
};

export const MainLayout = ({ children, ...props }: MainLayoutRootProps) => (
  <MainLayoutRoot {...props}>{children}</MainLayoutRoot>
);

export default MainLayout;
