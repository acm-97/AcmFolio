import { styled, Theme } from '@mui/material/styles';

import { Span } from '@/components';

export const systemCommands: {
  [x: string]: { key: string; options: null | string[]; description: string };
} = {
  help: {
    key: 'help',
    options: null,
    description: '',
  },
  cls: {
    key: 'cls',
    options: null,
    description: '',
  },
  language: {
    key: 'language',
    options: ['en', 'es'],
    description: '',
  },
  theme: {
    key: 'theme',
    options: ['light', 'dark'],
    description: '',
  },
  fullscreen: {
    key: 'fullscreen',
    options: null,
    description: '',
  },
  exit: {
    key: 'exit',
    options: null,
    description: '',
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
    width: 120,
  },
];
