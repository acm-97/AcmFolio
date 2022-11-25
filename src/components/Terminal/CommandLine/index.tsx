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
  cursor: 'text',
}));

type ComandLineTypes = {
  inputCommandRef: any;
  inputCommandFocus: () => void;
  command?: string;
  addCommandLines: (x: any) => void;
  cleanTerminal: (x: boolean) => void;
};

const ComandLine = ({ inputCommandFocus, ...props }: ComandLineTypes) => (
  <Container onClick={inputCommandFocus}>
    <Span
      sx={{
        // @ts-ignore
        color: (theme) => theme.palette.text[300],
      }}
    >
      ${' '}
      <Span sx={{ color: (theme) => theme.palette.error.main, marginLeft: 1 }}>
        root@acm-97
        <Span
          sx={{
            // @ts-ignore
            color: (theme) => theme.palette.text[200],
            marginRight: 1.5,
          }}
        >
          /AcmFolio/{i18n?.language}/ :
        </Span>
        <CommandInput inputCommandFocus={inputCommandFocus} {...props} />
      </Span>
    </Span>
  </Container>
);

export default memo(ComandLine);
