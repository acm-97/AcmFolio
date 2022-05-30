import React from 'react';
import { Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import {
  AppLogo,
  NavbarMenu,
  LanguageSelector,
  ThemeSelector,
} from '@/components';
import NavbarRoot from './NavbarRoot';

type NavbarProps = {
  onOpenSidebar: () => void;
};

const LanguageButton = () => (
  <LanguageSelector
    mini
    compProps={{ underline: 'none', className: 'flex items-center' }}
    icon={
      <LanguageOutlinedIcon fontSize="small" sx={{ mt: '-1px', mr: '2px' }} />
    }
  />
);

const Navbar = (props: NavbarProps) => {
  const { onOpenSidebar, ...other } = props;

  return (
    <NavbarRoot {...other}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
        }}
      >
        <Box sx={{ display: 'flex', width: '100%', alignItems: 'center' }}>
          <IconButton
            onClick={onOpenSidebar}
            sx={{
              display: {
                xs: 'inline-flex',
                md: 'none',
              },
              marginRight: 1,
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'flex', width: 92.5 } }} mr={4}>
            <AppLogo
              href="/"
              src="/vercel.svg"
              width={92.5}
              height={40}
              alt="Cascaron Nextjs"
            />
          </Box>
          <NavbarMenu />
        </Box>
        <LanguageButton />
        <ThemeSelector />
      </Box>
    </NavbarRoot>
  );
};

export default Navbar;
