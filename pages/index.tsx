import { useRef, useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { AppNextPage } from '@/types/common-types';
import { COMMON_LOCALE } from '@/settings';
import { CommandLine, PageLayout, TerminalLayout } from '@/components';

import type { NextPage } from 'next';

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, [...COMMON_LOCALE])),
  },
});

const Home: NextPage = () => {
  const [commandLines, setCommandLines] = useState([]);
  const inputCommandRef = useRef();

  const inputCommandFocus = () => {
    inputCommandRef.current.focus();
  };

  return (
    // const theme = useTheme();
    <TerminalLayout inputCommandFocus={inputCommandFocus}>
      <CommandLine addCommandLines={setCommandLines} inputCommandRef={inputCommandRef} />
    </TerminalLayout>
  );
};
(Home as AppNextPage).Layout = PageLayout;

export default Home;
