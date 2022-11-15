import { useRef, useState, useId } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Box } from '@mui/material';

import { AppNextPage } from '@/types/common-types';
import { COMMON_LOCALE } from '@/settings';
import CommandResponse from '@/components/CommandResponse';
import {
  CommandLine,
  PageLayout,
  Paragraph,
  Span,
  TerminalLayout,
} from '@/components';

import type { NextPage } from 'next';

/*
 * manage the current locale (language)
 * and "locales".json availables for page translation
 */
export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, [...COMMON_LOCALE])),
  },
});

// type CommandLines = {
//   key?: string;
//   value?: string;
// };

const Terminal: NextPage = () => {
  let [commandLines, setCommandLines] = useState<string[]>([]);
  let [cls, setCls] = useState<boolean>(false);
  const inputCommandRef = useRef<any>();
  const commandLineId = useId();

  /*
   * inputCommandFocus function
   * focus input from command line
   * when a click pccurs in the container of the terminal
   */
  const inputCommandFocus = () => {
    inputCommandRef.current.focus();
  };

  return (
    <TerminalLayout inputCommandFocus={inputCommandFocus}>
      {!cls && (
        <>
          <Paragraph sx={{ margin: '15px 0 5px 0 !important' }}>
            #############################################################
          </Paragraph>
          <Paragraph sx={{ margin: '15px 0 5px 0 !important' }}>
            # Hi again, I know, it's not the typical portfolio you'd expect.
          </Paragraph>
          <Paragraph sx={{ margin: '0 0 5px 0 !important' }}>
            # But look, it's refreshing and can be fun too.
          </Paragraph>
          <Paragraph sx={{ margin: '0 0 15px 0 !important' }}>
            # Type "
            <Span sx={{ color: (theme) => theme.palette.text.secondary }}>
              help
            </Span>
            " to see the available commands you can interact with.
          </Paragraph>
          <Paragraph sx={{ margin: '15px 0 5px 0 !important' }}>
            #############################################################
          </Paragraph>
        </>
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
                command={item}
              />
              <CommandResponse commandKey={item || ''} />
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
