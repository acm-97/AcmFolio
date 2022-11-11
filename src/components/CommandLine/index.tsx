import { memo } from 'react';
import { styled } from '@mui/material/styles';

import CommandInput from './CommandInput';
import { Span } from '../Typography';

const Container = styled('div')(() => ({
  display: 'flex',
  flex: '1 1 auto',
  alignItems: 'center',
}));

type ComandLineTypes = {
  inputCommandRef: any;
};

const ComandLine = (props: ComandLineTypes) => (
  <Container>
    <Span sx={{ color: (theme) => theme.palette.text[100] }}>~/acm-97</Span>
    <Span sx={{ color: (theme) => theme.palette.primary, marginRight: 1.5 }}>
      /portfolio-v2/ :
    </Span>
    <CommandInput {...props} />
  </Container>
);

export default memo(ComandLine);
