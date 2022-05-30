import React, { ReactNode, useContext, useState } from 'react';
import { ThemeSettingType } from '@/types';
import { initialSettings, SettingsContext } from '@/contexts/SettingsContext';

type SettingsProviderProps = {
  children: ReactNode;
};

const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [settings, setSettings] = useState(initialSettings);

  const saveSettings = (newSettings: ThemeSettingType) =>
    setSettings(newSettings);

  return (
    <SettingsContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        settings,
        saveSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
export const useSettings = () => useContext(SettingsContext);

export default SettingsProvider;
