import { BoxProps } from '@mui/material/Box/Box';
import { ElementType } from 'react';

export type TypographyOptionsProps = {
  fontSize?: string;
  fontWeight?: string;
  component: string;
  lineHeight?: number;
  marginBottom?: string | number;
};

export type TypographyStyleProps = BoxProps & {
  ellipsis?: boolean;
  textTransform?:
    | 'capitalize'
    | 'inherit'
    | 'initial'
    | 'lowercase'
    | 'uppercase'
    | 'none';
  defaultvalues: TypographyOptionsProps;
};

export type TypographyCreator = TypographyOptionsProps & {
  component: ElementType<any> | undefined;
};

export type TypographyProps = BoxProps & {
  ellipsis?: boolean;
  gutterBottom?: boolean;
  secondary?: boolean;
  block?: boolean;
  textTransform?:
    | 'capitalize'
    | 'inherit'
    | 'initial'
    | 'lowercase'
    | 'uppercase'
    | 'none';
};
