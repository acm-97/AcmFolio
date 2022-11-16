import { memo } from 'react';
import { styled } from '@mui/material/styles';

import { TypographyProps } from '@/components/Typography/typography.types';
import { Span } from '@/components';

type NotFound = {
  cKey: string;
  option?: string;
};

const StyledSpan = styled((props: TypographyProps) => (
  <Span sx={{ color: (theme) => theme.palette.text.secondary }} {...props} />
))``;

const NotFound = ({ cKey, option }: NotFound) => (
  <Span
    sx={{
      margin: '10px 0 10px 15px',
    }}
  >
    <Span sx={{ color: (theme) => theme.palette.error.dark }}>ERROR : </Span>
    {!option ? (
      <>
        command (<StyledSpan> {cKey} </StyledSpan>) not found. Type "
        <StyledSpan>help</StyledSpan>" to see all available commands
      </>
    ) : (
      <>
        option (<StyledSpan> --{option} </StyledSpan>) for command (
        <StyledSpan> {cKey} </StyledSpan>) not found. Type "
        <StyledSpan>help</StyledSpan>" to see all available commands and their
        "--options"
      </>
    )}
  </Span>
);
export default memo(NotFound);
