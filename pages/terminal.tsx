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
import CommandResponse from '@/components/CommandResponse';

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, [...COMMON_LOCALE])),
  },
});

const Header = styled('div')(({ theme }: { theme: Theme }) => ({
  '& p': {
    color: theme.palette.text[200],
    opacity: 0.7,
  },
}));

type CommandLines = {
  key?: string;
  value?: string;
};

const Terminal: NextPage = () => {
  let [commandLines, setCommandLines] = useState<CommandLines[]>([]);
  let [cls, setCls] = useState<boolean>(false);
  const inputCommandRef = useRef<any>();
  const commandLineId = useId();

  const inputCommandFocus = () => {
    inputCommandRef.current.focus();
  };

  return (
    <TerminalLayout inputCommandFocus={inputCommandFocus}>
      {!cls && (
        <Header>
          <Paragraph sx={{ margin: '15px 0 5px 0 !important' }}>
            Hi again, I know, it's not the typical portfolio you'd expect.
          </Paragraph>
          <Paragraph sx={{ margin: '0 0 5px 0 !important' }}>
            But look, it's refreshing and can be fun too.
          </Paragraph>
          <Paragraph sx={{ margin: '0 0 15px 0 !important' }}>
            Type{' '}
            <Span sx={{ color: (theme) => theme.palette.text[400] }}>
              "help"
            </Span>{' '}
            to see the available commands you can interact with.
          </Paragraph>
        </Header>
      )}
      {commandLines.length === 0 ? (
        <CommandLine
          cleanTerminal={setCls}
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
                cleanTerminal={setCls}
                addCommandLines={setCommandLines}
                inputCommandRef={inputCommandRef}
                command={item.key}
              />
              <CommandResponse commandKey={item.key || ''} />
            </>
          ))}
          <CommandLine
            cleanTerminal={setCls}
            addCommandLines={setCommandLines}
            inputCommandRef={inputCommandRef}
          />
        </Box>
      )}
    </TerminalLayout>
  );
};
(Terminal as AppNextPage).Layout = PageLayout;

export default Terminal;
