import React, { FC } from 'react';
import '../src/styles/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { NextComponentType } from 'next';
import { DefaultSeo } from 'next-seo';
import { TopProgressBar } from '@/components';
import { MainProvider } from '@/contexts';
import { ChildrenProps } from '@/types';
import { DEFAULT_SEO } from '@/settings';

type CustomAppProps = AppProps & {
  Component: NextComponentType & { Layout?: FC };
};

const DefaultLayout = ({ children }: ChildrenProps) => <>{children}</>;

function MyApp({ Component, pageProps }: CustomAppProps) {
  const Layout = Component?.Layout || DefaultLayout;
  return (
    <>
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
