import { memo } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { styled, Theme } from '@mui/material/styles';
import { Box } from '@mui/material';

import { ChildrenProps } from '@/types';
import { Span } from '@/components';
// type AboutProps = {};

const Wrapper = styled('div')(({ theme }: { theme: Theme }) => ({
  marginTop: '25px',
  display: 'flex',
  flex: '1 1 auto',
  '.image': {
    position: 'relative',
    width: '100%',
    height: '30vh',
  },
  '.personal-info': {
    paddingLeft: '20px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
      paddingTop: '20px',
    },
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

export const StyledSpan = ({
  children,
  sx,
  keyName,
}: ChildrenProps & { sx?: any; keyName?: string }) => (
  <Span
    sx={{
      // @ts-ignore
      color: (theme) => theme.palette.text[200],
      lineHeight: '35px',
      ...sx,
    }}
  >
    {keyName || '#'}
    <Span
      sx={{ marginTop: '20px', color: (theme) => theme.palette.primary.main }}
    >
      {' '}
      {children}
    </Span>
  </Span>
);

const About = () => {
  const { t } = useTranslation('terminal');

  return (
    <>
      <Wrapper>
        <Box className="image">
          <Image
            src="/logos/logo-about.png"
            layout="fill"
            objectFit="contain"
          />
        </Box>
        <Box className="personal-info">
          <StyledSpan keyName="Name:">{t('about.name')}</StyledSpan>
          <StyledSpan keyName="Age:">{t('about.age')}</StyledSpan>
          <StyledSpan keyName="Birth Place:">
            {t('about.birthPlace')}
          </StyledSpan>
          <StyledSpan keyName="Current Location:">
            {t('about.currentLocation')}
          </StyledSpan>
          <StyledSpan keyName="B.S:">{t('about.bs')}</StyledSpan>
          <StyledSpan keyName="Current Profesion:">
            {t('about.currentProfesion')}
          </StyledSpan>
        </Box>
      </Wrapper>
      <StyledSpan sx={{ marginTop: '20px' }}>{t('about.line1')}</StyledSpan>
      <StyledSpan>{t('about.line2')}</StyledSpan>
      <StyledSpan>{t('about.line3')}</StyledSpan>
      <StyledSpan sx={{ marginBottom: '20px' }}>{t('about.line4')}</StyledSpan>
    </>
  );
};

export default memo(About);
