import React, { memo } from 'react';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { IconButton } from '@mui/material';
import { useSettings } from '@/contexts/SettingsProvider';
import { THEMES } from '@/settings';

const ThemeSelector = () => {
  const { settings, saveSettings } = useSettings();

  if (settings.theme === THEMES.DARK) {
    return (
      <IconButton
        onClick={() => saveSettings({ ...settings, theme: THEMES.LIGHT })}
      >
        <LightModeOutlinedIcon />
      </IconButton>
    );
  }

  return (
    <IconButton
      onClick={() => saveSettings({ ...settings, theme: THEMES.DARK })}
    >
      <DarkModeOutlinedIcon />
    </IconButton>
  );
};

export default memo(ThemeSelector);
