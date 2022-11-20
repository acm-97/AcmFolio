import { memo } from 'react';
import Image from 'next/image';
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

const About = () => (
  <>
    <Wrapper>
      <Box className="image">
        <Image src="/logos/logo-about.png" layout="fill" objectFit="contain" />
      </Box>
      <Box className="personal-info">
        <StyledSpan keyName="Name:">Alejandro Cabrera Mena</StyledSpan>
        <StyledSpan keyName="Age:">25</StyledSpan>
        <StyledSpan keyName="Birth Place:">Cuba</StyledSpan>
        <StyledSpan keyName="Current Location:">Cuba</StyledSpan>
        <StyledSpan keyName="B.S:">Informatics Engeneering.</StyledSpan>
        <StyledSpan keyName="Current Profesion:">
          Front-End Web Developer.
        </StyledSpan>
      </Box>
    </Wrapper>
    <StyledSpan sx={{ marginTop: '20px' }}>
      I am a Software Engineer with 3 years of experience.
    </StyledSpan>
    <StyledSpan>
      I offer advanced knowledge of frontend web technologies, mainly ReactJS or
      NextJS.
    </StyledSpan>
    <StyledSpan>
      In addition, I can offer some experience in development with the MERN
      stack .
    </StyledSpan>
    <StyledSpan sx={{ marginBottom: '20px' }}>
      I am a web programming enthusiast, eager to learn new technologies and{' '}
      skills, always looking for new and interesting projects where improve my
      skills.
    </StyledSpan>
  </>
);

export default memo(About);
