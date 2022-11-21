import { useTranslation } from 'next-i18next';
import { styled, Theme } from '@mui/material/styles';

import { Span } from '@/components';

const useProfileCommands = () => {
  const { t } = useTranslation('terminal');

  const profileCommands: {
    [x: string]: { key: string; options: null | string[]; description: string };
  } = {
    about: {
      key: 'about',
      options: null,
      description: t('help.profile.aboutDescription'),
    },
    contacts: {
      key: 'contacts',
      options: null,
      description: t('help.profile.contactsDescription'),
    },
    skills: {
      key: 'skills',
      options: null,
      description: t('help.profile.skillsDescription'),
    },
    projects: {
      key: 'projects',
      options: ['ls', 'preview'],
      description: t('help.profile.projectsDescription'),
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

  const profileColumns = [
    {
      headerName: t('help.profile.commands'),
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

  return { profileCommands, profileColumns };
};

export default useProfileCommands;
