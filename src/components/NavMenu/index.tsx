import React, { memo } from 'react';
import { useRouter } from 'next/router';
import { MuiNextLink } from '@/components';
import { IMenuItem } from '@/types';

type NavMenuProps = {
  menu: IMenuItem[];
  color?: string;
  activeColor?: string;
  activeSx?: object;
};

const NavMenu = ({
  menu,
  color = 'text.primary',
  activeSx,
  activeColor = 'primary',
}: NavMenuProps) => {
  const { asPath } = useRouter();

  return (
    <>
      {menu.map(({ title, href }, index) => {
        const partialMatch = href ? asPath.includes(href) : false;
        const sx = partialMatch
          ? { mx: 2, display: 'block', ...activeSx }
          : { mx: 2, display: 'block' };
        return (
          <MuiNextLink
            href={href}
            key={index}
            sx={sx}
            color={partialMatch ? activeColor || color : color}
            underline="none"
          >
            {title}
          </MuiNextLink>
        );
      })}
    </>
  );
};

export default memo(NavMenu);
