import { Box } from '@mui/material';

import PageWidthContainer from '@/components/Layouts/PageWidthContainer';
import { MainLayout, MainLayoutRootProps } from '@/components/Layouts';

const PageLayout = ({ children }: MainLayoutRootProps) => (
  <MainLayout>
    <PageWidthContainer>
      <Box>{children}</Box>
    </PageWidthContainer>
  </MainLayout>
);

export default PageLayout;
