import { memo } from 'react';
import { i18n } from 'next-i18next';
import { styled } from '@mui/material/styles';

import { Span } from '@/components';

import CommandInput from './CommandInput';

const Container = styled('div')(() => ({
  display: 'flex',
  flex: '1 1 auto',
  alignItems: 'center',
}));

type ComandLineTypes = {
  inputCommandRef: any;
  command?: string;
  addCommandLines: (x: any) => void;
};

const ComandLine = (props: ComandLineTypes) => (
  <Container>
    <Span sx={{ color: (theme) => theme.palette.text[300], marginRight: 1 }}>
      $
    </Span>
    <Span sx={{ color: (theme) => theme.palette.text[100] }}>~/acm-97</Span>
    <Span sx={{ color: (theme) => theme.palette.primary, marginRight: 1.5 }}>
      /portfolio-v2/{i18n?.language}/ :
    </Span>
    <CommandInput {...props} />
  </Container>
);

export default memo(ComandLine);
