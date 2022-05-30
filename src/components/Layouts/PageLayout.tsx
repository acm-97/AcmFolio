import React from 'react';
import PageWidthContainer from '@/components/Layouts/PageWidthContainer';
import { Box } from '@mui/material';
import { MainLayoutRootProps, MainLayout } from '@/components/Layouts';

const PageLayout = ({ children }: MainLayoutRootProps) => (
  <MainLayout>
    <PageWidthContainer>
      <Box mb={8}>{children}</Box>
    </PageWidthContainer>
  </MainLayout>
);

export default PageLayout;
