import { useTranslation } from 'next-i18next';
import { styled, Theme } from '@mui/material/styles';

import { Span } from '@/components';

const useSystemCommands = () => {
  const { t } = useTranslation('terminal');

  const systemCommands: {
    [x: string]: { key: string; options: null | string[]; description: string };
  } = {
    help: {
      key: 'help',
      options: null,
      description: t('help.system.helpDescription'),
    },
    cls: {
      key: 'cls',
      options: null,
      description: t('help.system.clsDescription'),
    },
    language: {
      key: 'language',
      options: ['en', 'es'],
      description: t('help.system.languageDescription'),
    },
    theme: {
      key: 'theme',
      options: ['light', 'dark'],
      description: t('help.system.themeDescription'),
    },
    fullscreen: {
      key: 'fullscreen',
      options: null,
      description: t('help.system.fullscreenDescription'),
    },
    exit: {
      key: 'exit',
      options: null,
      description: t('help.system.exitDescription'),
    },
  };

  const headerCellProps = {
    sx: {
      padding: '6px 16px',
      color: (theme: Theme) => theme.palette.info.main,
      backgroundColor: (theme: Theme) => theme.palette.background.default,
    },
  };

  const cellProps = {
    sx: {
      padding: '6px 16px',
      verticalAlign: 'top',
    },
  };

  const OptionsWrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  }));

  const systemColumns = [
    {
      headerName: t('help.system.commands'),
      accessor: ({ key }: any) => (
        <Span sx={{ color: (theme) => theme.palette.text.secondary }} key={key}>
          {key}
        </Span>
      ),
      headerCellProps: { ...headerCellProps },
      cellProps: { ...cellProps },
      width: 90,
    },
    {
      headerName: t('help.options'),
      accessor: ({ options }: any) => {
        if (!options) return '';

        return (
          <OptionsWrapper>
            {options.map((item: string) => (
              <Span
                sx={{
                  // @ts-ignore
                  color: (theme) => theme.palette.text[200],
                  margin: '3px 0',
                }}
                key={item}
              >
                <> --{item}</>
              </Span>
            ))}
          </OptionsWrapper>
        );
      },
      headerCellProps: { ...headerCellProps },
      cellProps: { ...cellProps },
      width: 90,
    },
    {
      headerName: t('help.description'),
      accessor: 'description',
      headerCellProps: { ...headerCellProps },
      cellProps: { ...cellProps },
      width: 200,
    },
  ];

  return { systemColumns, systemCommands };
};

export default useSystemCommands;
