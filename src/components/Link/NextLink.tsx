import React, { memo } from 'react';
import Link from 'next/link';
import { LinkProps } from 'next/dist/client/link';

import { ChildrenProps } from '@/types';

type aTag = {
  className?: string;
  target?: string;
  rel?: string;
};

const NextLink = ({
  href,
  children,
  className,
  target,
  rel,
  ...props
}: LinkProps & ChildrenProps & aTag) => (
  <Link href={href} passHref {...props}>
    <a target={target} rel={rel} className={className}>
      {children}
    </a>
  </Link>
);

export default memo(NextLink);
