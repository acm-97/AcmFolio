import { useTranslation } from 'next-i18next';
import { Theme } from '@mui/material/styles';

import { Span } from '@/components';

const useSkills = () => {
  const { t } = useTranslation('terminal');

  const rows = [
    {
      type: t('skills.one'),
      values: 'HTML5, CSS3, Less, Sass, JavaScript, TypeScript, Python',
    },
    {
      type: t('skills.two'),
      values: 'ReactJS, Formik, React Query, React Hook Form, Leaflet',
    },
    {
      type: t('skills.three'),
      values:
        'Bootstrap, NextJS, Angular, Angular Material, Ant Design, Material UI',
    },
    {
      type: t('skills.four'),
      values: 'PostgreSQL, MySQL, MongoDB',
    },
    {
      type: t('skills.five'),
      values: 'npm, yarn',
    },
    {
      type: t('skills.six'),
      values: 'Teamwork, Initiative, Creativity, Dedication, Organization',
    },
    {
      type: t('skills.seven'),
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

  const columns = [
    {
      headerName: t('skills.skillsTypes'),
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
      headerName: t('skills.Skills'),
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
    },
  ];

  return { rows, columns };
};
export default useSkills;
