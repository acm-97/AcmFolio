import { Theme } from '@mui/material/styles';

import { Span } from '@/components';

export const rows = [
  {
    type: 'Programming languages',
    values: 'HTML5, CSS3, Less, Sass, JavaScript, TypeScript, Python',
  },
  {
    type: 'JavaScript Libraries',
    values: 'ReactJS, Formik, React Query, React Hook Form, Leaflet',
  },
  {
    type: 'Frameworks',
    values:
      'Bootstrap, NextJS, Angular, Angular Material, Ant Design, Material UI',
  },
  {
    type: 'Databases',
    values: 'PostgreSQL, MySQL, MongoDB',
  },
  {
    type: 'Package Manager',
    values: 'npm, yarn',
  },
  {
    type: 'Personal',
    values: 'Teamwork, Initiative, Creativity, Dedication, Organization',
  },
  {
    type: 'Languages',
    values: 'Spanish (native), English (B1)',
  },
];

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

export const columns = [
  {
    headerName: 'Skills Types',
    accessor: ({ type }: any) => (
      <Span sx={{ color: (theme) => theme.palette.text.secondary }}>
        {type}
      </Span>
    ),
    headerCellProps: { ...headerCellProps },
    cellProps: { ...cellProps },
    width: 90,
  },
  {
    headerName: 'Skills',
    accessor: ({ values }: any) => (
      <Span
        sx={{
          // @ts-ignore
          color: (theme) => theme.palette.text[200],
          margin: '3px 0',
        }}
      >
        <> {values}</>
      </Span>
    ),
    headerCellProps: { ...headerCellProps },
    cellProps: { ...cellProps },
    width: 90,
  }
];
