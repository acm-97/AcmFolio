import React from 'react';
import get from 'lodash/get';
import classNames from 'classnames';
import { Box, styled, Theme } from '@mui/material';

import {
  TypographyCreator,
  TypographyOptionsProps,
  TypographyProps,
  TypographyStyleProps,
} from './typography.types';

const getValueFromTheme = (
  theme: Theme,
  typography: string,
  field: string,
  defaultValue: any
) => {
  const value = get(typography, `typography.${typography}.${field}`);

  return value || defaultValue;
};

const styleTypography = (
  theme: Theme,
  // @ts-ignore
  component: ElementType<any> | undefined,
  { fontSize, fontWeight, lineHeight }: TypographyOptionsProps
) => ({
  fontSize: getValueFromTheme(theme, component, 'fontSize', fontSize),
  fontWeight: getValueFromTheme(theme, component, 'fontWeight', fontWeight),
  lineHeight: getValueFromTheme(theme, component, 'lineHeight', lineHeight),
});

const StyledBox = styled(Box)<TypographyStyleProps>(
  ({ textTransform, ellipsis, defaultvalues, theme }) => ({
    textTransform: textTransform || 'none',
    whiteSpace: ellipsis ? 'nowrap' : 'normal',
    overflow: ellipsis ? 'hidden' : '',
    textOverflow: ellipsis ? 'ellipsis' : '',
    ...styleTypography(theme, defaultvalues.component, defaultvalues),
  })
);

const createTypographyComp: (
  config: TypographyCreator
) => (props: TypographyProps) => JSX.Element =
  ({ component, fontSize, fontWeight, lineHeight, marginBottom = 0 }) =>
  // eslint-disable-next-line react/prop-types,react/display-name
  (props: TypographyProps) => {
    const {
      children,
      className,
      ellipsis,
      secondary,
      gutterBottom,
      block,
      ...rest
    } = props;

    return (
      <StyledBox
        ellipsis={ellipsis}
        className={classNames({
          [className || '']: true,
        })}
        component={component}
        mb={marginBottom}
        mt={gutterBottom ? 0 : undefined}
        defaultvalues={{
          component,
          fontSize,
          fontWeight,
          lineHeight,
        }}
        color={secondary ? 'secondary.500' : undefined}
        display={block ? 'block' : undefined}
        {...rest}
      >
        {children}
      </StyledBox>
    );
  };
export const H1 = createTypographyComp({
  component: 'h1',
  fontSize: '28px',
  fontWeight: '600',
  lineHeight: 1.5,
});

export const H2 = createTypographyComp({
  component: 'h2',
  fontSize: '24px',
  fontWeight: '600',
  lineHeight: 1.5,
});

export const H3 = createTypographyComp({
  component: 'h3',
  fontSize: '18px',
  fontWeight: '600',
  lineHeight: 1.5,
});

export const H4 = createTypographyComp({
  component: 'h4',
  fontSize: '16px',
  fontWeight: '500',
  lineHeight: 1.5,
});

export const H5 = createTypographyComp({
  component: 'h5',
  fontSize: '14px',
  fontWeight: '500',
  lineHeight: 1.5,
});

export const H6 = createTypographyComp({
  component: 'h6',
  fontSize: '13px',
  fontWeight: '500',
  lineHeight: 1.5,
});

export const Paragraph = createTypographyComp({
  component: 'p',
  fontSize: '14px',
  marginBottom: '12px',
});

export const Small = createTypographyComp({
  component: 'small',
  fontSize: '12px',
  fontWeight: '500',
  lineHeight: 1.5,
});

export const Span = createTypographyComp({
  component: 'span',
  lineHeight: 1.5,
});

export const Tiny = createTypographyComp({
  component: 'small',
  fontSize: '11px',
  lineHeight: 1.5,
});
