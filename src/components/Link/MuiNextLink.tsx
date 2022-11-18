import React, { memo } from 'react';
import NextLink from 'next/link';
import { LinkProps } from 'next/dist/client/link';
import { Link, LinkProps as MuiLinkProps } from '@mui/material';

const NextMuiLink = ({
  href,
  linkProps,
  ...props
}: MuiLinkProps & { linkProps?: LinkProps; href: string }) => (
  <NextLink href={href} passHref {...linkProps}>
    <Link {...props} />
  </NextLink>
);

export default memo(NextMuiLink);
