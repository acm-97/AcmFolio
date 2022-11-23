import { useRef, useState, memo, Fragment, useEffect } from 'react';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { Box } from '@mui/material';

import { scrollToBottom } from '@/utils';
import { AppNextPage } from '@/types/common-types';
import { COMMON_LOCALE } from '@/settings';
import { useLocalStorageState } from '@/hooks';
import { DraggableProvider } from '@/contexts';
import { StyledSpan } from '@/components/CommandResponse/Responses/Profile/About';
import CommandResponse from '@/components/CommandResponse';
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
  let [commandLines, setCommandLines] = useState<string[]>([]);
  let [isCLS, setCls] = useState<boolean>(false);
  const inputCommandRef = useRef<any>();
  const { locale } = useRouter();
  const [storedCommandLines] = useLocalStorageState<string[]>(COMMAND_LINES, []);

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
    setCommandLines(storedCommandLines);
  }, [locale, storedCommandLines]);

  return (
    <DraggableProvider>
      <TerminalLayout>
        {!isCLS && (
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <StyledSpan sx={{ marginTop: '15px !important' }}>{t('line1')}</StyledSpan>
            <StyledSpan>{t('line2')}</StyledSpan>
            <StyledSpan>
              {t('line3.part1')} "
              <Span
                sx={{
                  // @ts-ignore
                  color: (theme) => theme.palette.text[400],
                }}
              >
                help
              </Span>
              " {t('line3.part2')}
            </StyledSpan>
            <StyledSpan sx={{ marginBottom: '15px !important' }}>
              <Span
                sx={{
                  // @ts-ignore
                  color: (theme) => theme.palette.text[400],
                }}
              >
                {t('line4.part1')}
              </Span>
              {t('line4.part2')}
            </StyledSpan>
          </Box>
        )}
        {commandLines.length === 0 ? (
          <CommandLine
            cleanTerminal={setCls}
            addCommandLines={setCommandLines}
            inputCommandRef={inputCommandRef}
            inputCommandFocus={inputCommandFocus}
          />
        ) : (
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {commandLines.map((item, i) => (
              <Fragment key={i}>
                <CommandLine
                  cleanTerminal={setCls}
                  addCommandLines={setCommandLines}
                  inputCommandRef={inputCommandRef}
                  command={item}
                />
                <CommandResponse command={item || ''} />
              </Fragment>
            ))}
            <CommandLine
              cleanTerminal={setCls}
              addCommandLines={setCommandLines}
              inputCommandRef={inputCommandRef}
              inputCommandFocus={inputCommandFocus}
            />
          </Box>
        )}
      </TerminalLayout>
    </DraggableProvider>
  );
};
(Terminal as AppNextPage).Layout = PageLayout;

export default memo(Terminal);
