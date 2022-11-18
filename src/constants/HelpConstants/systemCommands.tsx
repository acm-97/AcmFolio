import { styled, Theme } from '@mui/material/styles';

import { Span } from '@/components';

export const systemCommands: {
  [x: string]: { key: string; options: null | string[]; description: string };
} = {
  help: {
    key: 'help',
    options: null,
    description: 'Provides the list of commands available for the terminal.',
  },
  cls: {
    key: 'cls',
    options: null,
    description: 'Clean the terminal',
  },
  language: {
    key: 'language',
    options: ['en', 'es'],
    description:
      'Switch to the language of your choice, English( en ) or Spanish( es ).',
  },
  theme: {
    key: 'theme',
    options: ['light', 'dark'],
    description: 'Switch to the theme of your choice ( light or dark ) .',
  },
  fullscreen: {
    key: 'fullscreen',
    options: null,
    description: 'Switch to full screen modo ( F11 ).',
  },
  exit: {
    key: 'exit',
    options: null,
    description: 'Leave current view',
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

export const columns = [
  {
    headerName: 'System Commands',
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
    headerName: 'Options',
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
    headerName: 'Description',
    accessor: 'description',
    headerCellProps: { ...headerCellProps },
    cellProps: { ...cellProps },
    width: 200,
  },
];
