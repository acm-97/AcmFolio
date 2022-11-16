import { memo } from 'react';

import { ChildrenProps } from '@/types';
import { Span } from '@/components';

// type AboutProps = {};

export const StyledSpan = ({ children, sx }: ChildrenProps & { sx?: {} }) => (
  <Span
    sx={{
      // @ts-ignore
      color: (theme) => theme.palette.text[200],
      lineHeight: '35px',
      ...sx,
    }}
  >
    #
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
