import React, { memo, useEffect } from 'react';
import { Box, Drawer, ListItemText, MenuItem, MenuList } from '@mui/material';
import { useRouter } from 'next/router';
import { mainMenu } from '@/settings';
import { NextLink, AppLogo } from '@/components';
import { useTranslation } from 'next-i18next';

type SideBarProps = {
  open: boolean;
  onClose: () => void;
};

const SideBar = ({ onClose, open }: SideBarProps) => {
  const { t } = useTranslation('common');
  const { asPath } = useRouter();
  useEffect(() => {
    onClose();
  }, [asPath, onClose]);

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: (theme) =>
            // @ts-ignore
            theme.palette.sidebar || theme.palette.background.paper,
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      <Box p={2} pb={1}>
        <AppLogo
          href="/"
          src="/vercel.svg"
          width={92.5}
          height={40}
          layout="intrinsic"
          alt="Cascaron Nextjs"
        />
      </Box>
      <Box>
        <MenuList>
          {mainMenu.map((item) => (
            <NextLink key={item.title} href={item.href}>
              <MenuItem>
                <ListItemText>{t(item.title)}</ListItemText>
              </MenuItem>
            </NextLink>
          ))}
        </MenuList>
      </Box>
    </Drawer>
  );
};

export default memo(SideBar);
