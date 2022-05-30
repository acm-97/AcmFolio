import React, { memo, useMemo } from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { mainMenu } from '@/settings';
import { NavMenu } from '@/components';

const useTranslateMenu = () => {
  const { t } = useTranslation('common');
  return useMemo(
    () =>
      mainMenu.map((menuItem) => ({
        ...menuItem,
        title: t(menuItem.title),
      })),
    [t]
  );
};

const NavbarMenu = () => {
  const menuItems = useTranslateMenu();

  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
      <NavMenu menu={menuItems} />
    </Box>
  );
};

export default memo(NavbarMenu);
