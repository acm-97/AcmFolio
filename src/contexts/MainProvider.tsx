import React, { memo } from 'react';
import { AppProvider } from '@/contexts/AppProvider';
import { QueryContextProps } from '@/contexts/QueryProvider';
import SettingsProvider from '@/contexts/SettingsProvider';

const MainProvider = ({ children, dehydratedState }: QueryContextProps) => (
  <SettingsProvider>
    <AppProvider dehydratedState={dehydratedState}>{children}</AppProvider>
  </SettingsProvider>
);

export default memo(MainProvider);
