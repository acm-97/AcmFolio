import { createContext } from 'react';
import { ThemeSettingType } from '@/types';
import { THEMES } from '@/settings';

interface SettingsContextProps {
  settings: ThemeSettingType;
  saveSettings: (settings: ThemeSettingType) => void;
}

export const initialSettings: ThemeSettingType = {
  theme: THEMES.LIGHT,
  responsiveFontSizes: true,
};

export const SettingsContext = createContext<SettingsContextProps>({
  settings: initialSettings,
  // eslint-disable-next-line
  saveSettings: (settings: ThemeSettingType) => {},
}); // component props type
