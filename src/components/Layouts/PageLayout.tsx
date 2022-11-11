import { MainLayout, MainLayoutRootProps } from '@/components/Layouts';
import PageWidthContainer from '@/components/Layouts/PageWidthContainer';
import { Box } from '@mui/material';
import Head from 'next/head';

const PageLayout = ({ children }: MainLayoutRootProps) => (
  <MainLayout>
    <PageWidthContainer>
      <Head>
        <title>ACM</title>
        <meta name="description" content="Personal Portafolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>{children}</Box>
    </PageWidthContainer>
  </MainLayout>
);

export default PageLayout;
