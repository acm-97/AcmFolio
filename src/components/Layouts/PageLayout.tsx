import Head from 'next/head';
import { Box } from '@mui/material';

import PageWidthContainer from '@/components/Layouts/PageWidthContainer';
import { MainLayout, MainLayoutRootProps } from '@/components/Layouts';

const PageLayout = ({ children }: MainLayoutRootProps) => (
  <MainLayout>
    <PageWidthContainer>
      <Head>
        <title>AcmFolio</title>
        <meta name="description" content="Alejandros's Personal Portafolio" />
        <link
          rel="icon"
          href="/logos/logo-home.png
        "
        />
      </Head>
      <Box>{children}</Box>
    </PageWidthContainer>
  </MainLayout>
);

export default PageLayout;
