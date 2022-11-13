import { memo } from 'react';
import { i18n } from 'next-i18next';
import { styled } from '@mui/material/styles';

import { Span } from '@/components';

import CommandInput from './CommandInput';

const Container = styled('div')(() => ({
  display: 'flex',
  flex: '1 1 auto',
  flexWrap: 'wrap',
  alignItems: 'center',
  flexGrow: 2,
}));

type ComandLineTypes = {
  inputCommandRef: any;
  command?: string;
  addCommandLines: (x: any) => void;
  cleanTerminal: (x: boolean) => void;
};

const ComandLine = (props: ComandLineTypes) => (
  <Container>
    <Span sx={{ color: (theme) => theme.palette.text[300] }}>
      ${' '}
      <Span sx={{ color: (theme) => theme.palette.error.main, marginLeft: 1 }}>
        root@acm-97
        <Span
          sx={{
            color: (theme) => theme.palette.text[200],
            marginRight: 1.5,
          }}
        >
          /portfolio-v2/{i18n?.language}/ :
        </Span>
        <CommandInput {...props} />
      </Span>
    </Span>
  </Container>
);

export default memo(ComandLine);
