import { NextComponentType } from 'next';
import { appWithTranslation } from 'next-i18next';
import { DefaultSeo } from 'next-seo';
import React, { FC } from 'react';

import { TopProgressBar } from '@/components';
import { MainProvider } from '@/contexts';
import { DEFAULT_SEO } from '@/settings';
import { ChildrenProps } from '@/types';

import type { AppProps } from 'next/app';

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
