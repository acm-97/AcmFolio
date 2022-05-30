import React, { memo } from 'react';
import { NextLink } from '@/components/index';
import Image from 'next/image';
import { ImageProps } from 'next/dist/client/image';

type AppLogoProps = ImageProps & {
  href: string;
};

const AppLogo = ({ href, ...props }: AppLogoProps) => (
  <NextLink href="/">
    <Image {...props} />
  </NextLink>
);

export default memo(AppLogo);
