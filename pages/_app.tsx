import React, { FC } from 'react';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import { appWithTranslation } from 'next-i18next';
import { NextComponentType } from 'next';

import { ChildrenProps } from '@/types';
import { DEFAULT_SEO } from '@/settings';
import { MainProvider } from '@/contexts';
import { TopProgressBar } from '@/components';

import type { AppProps } from 'next/app';

import '../src/styles/globals.css';

type CustomAppProps = AppProps & {
  Component: NextComponentType & { Layout?: FC };
};

const DefaultLayout = ({ children }: ChildrenProps) => <>{children}</>;

function MyApp({ Component, pageProps }: CustomAppProps) {
  const Layout = Component?.Layout || DefaultLayout;

  return (
    <>
      <Head>
        <title>AcmFolio</title>
        <meta name="description" content="Alejandros's Personal Portafolio" />
        <link
          rel="icon"
          href="/logos/logo-home.png
        "
        />
      </Head>
      <DefaultSeo {...DEFAULT_SEO} />
      <TopProgressBar />
      <MainProvider dehydratedState={pageProps.dehydratedState}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MainProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
