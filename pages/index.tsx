import { useRef, useState, useId } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { styled, Theme } from '@mui/material/styles';
import { Box } from '@mui/material';

import { AppNextPage } from '@/types/common-types';
import { COMMON_LOCALE } from '@/settings';
import {
  CommandLine,
  PageLayout,
  Paragraph,
  Span,
  TerminalLayout,
} from '@/components';

import type { NextPage } from 'next';

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, [...COMMON_LOCALE])),
  },
});

const Header = styled('div')(({ theme }: { theme: Theme }) => ({
  '& p': {
    color: theme.palette.text[200],
  },
}));

type CommandLines = {
  command?: string;
  value?: string;
};

const Home: NextPage = () => {
  let [commandLines, setCommandLines] = useState<CommandLines[]>([]);
  const inputCommandRef = useRef<any>();
  const commandLineId = useId();

  const inputCommandFocus = () => {
    inputCommandRef.current.focus();
  };

  return (
    <TerminalLayout inputCommandFocus={inputCommandFocus}>
      <Header>
        <Paragraph sx={{ margin: '10px 0 5px 0 !important' }}>
          Hello there &#128578;.
        </Paragraph>
        <Paragraph sx={{ margin: '0 0 5px 0 !important' }}>
          Welcome to ACMFolio  v1.0 by <Span sx={{color: (theme) => theme.palette.text[400]}}>@acm-97</Span> !
        </Paragraph>
        <Paragraph sx={{ margin: '0 0 5px 0 !important' }}>
          I'm a <Span sx={{color: (theme) => theme.palette.text[400]}}>Frontend Web Developer</Span> and this web is a Portfolio.
        </Paragraph>
        <Paragraph sx={{ margin: '0 0 15px 0 !important' }}>
          Type "help" to see available commands.
        </Paragraph>
      </Header>
      {commandLines.length === 0 ? (
        <CommandLine
          addCommandLines={setCommandLines}
          inputCommandRef={inputCommandRef}
        />
      ) : (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {commandLines.map((item) => (
            <>
              {' '}
              <CommandLine
                key={commandLineId}
                addCommandLines={setCommandLines}
                inputCommandRef={inputCommandRef}
                command={item.command}
              />
            </>
          ))}
          <CommandLine
            addCommandLines={setCommandLines}
            inputCommandRef={inputCommandRef}
          />
        </Box>
      )}
    </TerminalLayout>
  );
};
(Home as AppNextPage).Layout = PageLayout;

export default Home;
