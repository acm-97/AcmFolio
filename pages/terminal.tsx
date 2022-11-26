import { useRef, useState, memo, Fragment, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { Box } from '@mui/material';

import { scrollToBottom, storage } from '@/utils';
import { AppNextPage } from '@/types/common-types';
import { COMMON_LOCALE } from '@/settings';
import { useLocalStorageState } from '@/hooks';
import { DraggableProvider } from '@/contexts';
import TerminalHeadNotes from '@/components/Terminal/TerminalHeadNotes';
import { StyledSpan } from '@/components/Terminal/CommandResponse/Responses/Profile/About';
import CommandResponse from '@/components/Terminal/CommandResponse';
import { CommandLine, PageLayout, Span, TerminalLayout } from '@/components';

import type { NextPage } from 'next';

export const COMMAND_LINES = 'COMMAND_LINES';
export const COMMAND_LINES_HISTORY = 'COMMAND_LINES_HISTORY';

/*
 * manage the current locale (language)
 * and "locales".json availables for page translation
 */
export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, [...COMMON_LOCALE, 'terminal'])),
  },
});

const Terminal: NextPage = () => {
  const { t } = useTranslation('terminal');
  const [commandLines, setCommandLines] = useState<string[]>([]);
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const inputCommandRef = useRef<any>();
  const { locale } = useRouter();
  const [storedCommandLines] = useLocalStorageState<string[]>(COMMAND_LINES, []);
  const [storedIsStarted, storeIstarted] = useLocalStorageState<boolean>('isStarted', false);

  /*
   * inputCommandFocus function
   * focus input from command line
   * when a click pccurs in the container of the terminal
   */
  const inputCommandFocus = () => {
    inputCommandRef.current.focus();
  };

  useEffect(() => scrollToBottom(), [commandLines.length]);

  useEffect(() => {
    document.addEventListener('keyup', (event) => {
      setIsStarted(true);
      storeIstarted(true);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setCommandLines(storedCommandLines);
  }, [locale, storedCommandLines]);

  useEffect(() => {
    setIsStarted(storedIsStarted);
  }, [storedIsStarted]);


  return (
    <DraggableProvider>
      <TerminalLayout>
        {!isStarted && <TerminalHeadNotes />}
        {isStarted && commandLines.length === 0 ? (
          <CommandLine
            cleanTerminal={setIsStarted}
            addCommandLines={setCommandLines}
            inputCommandRef={inputCommandRef}
            inputCommandFocus={inputCommandFocus}
          />
        ) : (
          isStarted && (
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {commandLines.map((item, i) => (
                <Fragment key={i}>
                  <CommandLine
                    cleanTerminal={setIsStarted}
                    addCommandLines={setCommandLines}
                    inputCommandRef={inputCommandRef}
                    inputCommandFocus={inputCommandFocus}
                    command={item}
                  />
                  <CommandResponse command={item || ''} />
                </Fragment>
              ))}
              <CommandLine
                cleanTerminal={setIsStarted}
                addCommandLines={setCommandLines}
                inputCommandRef={inputCommandRef}
                inputCommandFocus={inputCommandFocus}
              />
            </Box>
          )
        )}
      </TerminalLayout>
    </DraggableProvider>
  );
};
(Terminal as AppNextPage).Layout = PageLayout;

export default memo(Terminal);
