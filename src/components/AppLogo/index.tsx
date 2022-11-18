import React, { memo } from 'react';
import Image from 'next/image';
import { ImageProps } from 'next/dist/client/image';

import { NextLink } from '@/components/index';

type AppLogoProps = ImageProps & {
  href: string;
};

const AppLogo = ({ href, ...props }: AppLogoProps) => (
  <NextLink href={href}>
    <Image {...props} />
  </NextLink>
);

export default memo(AppLogo);
