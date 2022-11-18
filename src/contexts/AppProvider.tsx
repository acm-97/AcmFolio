import { Toaster } from 'react-hot-toast';
import React, { useMemo } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';

import {
  defaultTheme,
  themesOptions,
  theming,
  toasterOptions,
} from '@/settings';
import { useSettings } from '@/contexts/SettingsProvider';
import { QueryContextProps, QueryProvider } from '@/contexts';

export const AppProvider = ({
  children,
  dehydratedState,
}: QueryContextProps) => {
  const { settings } = useSettings(); // App theme

  const theme = useMemo(
    () =>
      theming(
        {
          theme: settings.theme,
          responsiveFontSizes: settings.responsiveFontSizes,
        },
        defaultTheme,
        themesOptions
      ),
    [settings]
  );

  return (
    <QueryProvider dehydratedState={dehydratedState}>
      <ThemeProvider theme={theme}>
        {children}
        <CssBaseline />
        <Toaster toastOptions={toasterOptions} />
      </ThemeProvider>
    </QueryProvider>
  );
};
