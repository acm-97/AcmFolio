import { memo } from 'react';
import { styled } from '@mui/material/styles';

import { TypographyProps } from '@/components/Typography/typography.types';
import { Span } from '@/components';

type NotFoundProps = {
  cKey: string;
  option?: string;
  optionsRequired?: boolean;
};

const StyledSpan = styled((props: TypographyProps) => (
  <Span
    sx={{
      // @ts-ignore
      color: (theme) => theme.palette.warning.main,
    }}
    {...props}
  />
))``;

const NotFound = ({ cKey, option, optionsRequired }: NotFoundProps) => (
  <Span
    sx={{
      margin: '10px 0 10px 15px',
    }}
  >
    <Span sx={{ color: (theme) => theme.palette.error.dark }}>
      {cKey && optionsRequired ? 'REQUIRED_OPTIONS' : 'ERROR'} :{' '}
    </Span>
    {cKey && optionsRequired ? (
      <>
        <StyledSpan> {cKey} </StyledSpan> [option]
        <br />
        <br /> Type "<StyledSpan>help</StyledSpan>" to see all available
        commands and their "options"
      </>
    ) : !option ? (
      <>
        command (<StyledSpan> {cKey} </StyledSpan>) not found. Type "
        <StyledSpan>help</StyledSpan>" to see all available commands
      </>
    ) : (
      <>
        option (<StyledSpan> --{option} </StyledSpan>) for command (
        <StyledSpan> {cKey} </StyledSpan>) not found. Type "
        <StyledSpan>help</StyledSpan>" to see all available commands and their
        "options"
      </>
    )}
    <br />
  </Span>
);
export default memo(NotFound);
