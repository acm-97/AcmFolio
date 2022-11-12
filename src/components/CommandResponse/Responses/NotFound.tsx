import { styled } from '@mui/material/styles';

import { TypographyProps } from '@/components/Typography/typography.types';
import { Span } from '@/components';

type NotFound = {
  command: string;
};

const StyledSpan = styled((props: TypographyProps) => (
  <Span sx={{ color: (theme) => theme.palette.text[400] }} {...props} />
))``;

const NotFound = ({ command }: NotFound) => (
  <Span
    sx={{
      color: (theme) => theme.palette.text[200],
      margin: '10px 0 10px 15px',
    }}
  >
    command
    <StyledSpan> ( {command} ) </StyledSpan>
    not found. Type
    <StyledSpan> help </StyledSpan>
    to see all available commands
  </Span>
);
export default NotFound;
