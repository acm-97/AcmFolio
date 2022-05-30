import { THEMES } from '@/settings';

export type ThemeSettingType = {
  theme: THEMES;
  responsiveFontSizes: boolean;
};
export type ThemesOptionsType = {
  [THEMES.LIGHT]?: any;
  [THEMES.DARK]?: any;
};
