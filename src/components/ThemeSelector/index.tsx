import React, { memo } from 'react';
import { IconButton } from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

import { THEMES } from '@/settings';
import { useSettings } from '@/contexts/SettingsProvider';

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
