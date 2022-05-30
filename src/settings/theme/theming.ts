import { createTheme, responsiveFontSizes } from '@mui/material';
import merge from 'lodash/merge';
import { ThemeSettingType, ThemesOptionsType } from '@/types';
import { THEMES } from '@/settings';

const baseOptions = {
  direction: 'ltr',
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1200,
      xl: 1536,
    },
  },
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
  content: {
    maxWidth: 1150,
  },
};

export const theming = (
  config: ThemeSettingType,
  theme: any = {},
  themesOptions: ThemesOptionsType = {}
) => {
  let themeOption = themesOptions[config.theme];

  if (!themeOption) {
    themeOption = themesOptions[THEMES.LIGHT] || {};
  }

  const merged = merge({}, baseOptions, theme, themeOption);

  let mergedTheme = createTheme(merged);

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(mergedTheme);
  }

  // theme shadows
  theme.shadows[1] = '0px 4px 23px rgba(0, 0, 0, 0.12)';
  theme.shadows[2] = '0px 0px 21px 1px rgba(0, 0, 0, 0.07)';
  theme.shadows[3] = '0px 10px 30px rgba(0, 0, 0, 0.1)';
  theme.shadows[4] = '0px 7px 30px 3px rgba(0, 0, 0, 0.05)';

  return theme;
};
