import { styled, Theme } from '@mui/material/styles';

import { Span } from '@/components';

export const profileCommands: {
  [x: string]: { key: string; options: null | string[]; description: string };
} = {
  about: {
    key: 'about',
    options: null,
    description: 'Provides a little description about me.',
  },
  contacts: {
    key: 'contacts',
    options: null,
    description: 'Provides a list of socials where you can contact me.',
  },
  skills: {
    key: 'skills',
    options: null,
    description:
      'Provide a list of skills that I have worked on over the years.',
  },
  projects: {
    key: 'projects',
    options: ['ls', 'preview'],
    description:
      'With ( ls ) you got a list of projects that I have been working on. With ( preview ) you can see a small info abaout a project, for this you have to provide a project number from de list ( --preview=1 )',
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
    headerName: 'Profile Commands',
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
