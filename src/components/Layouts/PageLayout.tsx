import Head from 'next/head';
import { Box } from '@mui/material';

import PageWidthContainer from '@/components/Layouts/PageWidthContainer';
import { MainLayout, MainLayoutRootProps } from '@/components/Layouts';

const PageLayout = ({ children }: MainLayoutRootProps) => (
  <MainLayout>
    <PageWidthContainer>
      <Head>
        <title>ACMFolio</title>
        <meta name="description" content="Personal Portafolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>{children}</Box>
    </PageWidthContainer>
  </MainLayout>
);

export default PageLayout;
