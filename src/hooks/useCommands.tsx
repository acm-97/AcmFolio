import { useCallback } from 'react';

import { THEMES } from '@/settings';
import { useSettings } from '@/contexts/SettingsProvider';
import { NotFound } from '@/components/CommandResponse/Responses';

import useLocale from './useLocale';

const useCommands = (cKey: string, option: string) => {
  const { locales, changeLocale } = useLocale();
  const { settings, saveSettings } = useSettings();

  const handleLocale = () => {
    if (locales?.includes(option)) {
      changeLocale(option);

      return <></>;
    }

    return <NotFound cKey={cKey} option={option} />;
  };

  const handleTheme = useCallback(() => {
    if (THEMES[option.toUpperCase()] && settings.theme !== option) {
      saveSettings({ ...settings, theme: THEMES[option.toUpperCase()] });

      return <></>;
    }
    if (THEMES[option.toUpperCase()] && settings.theme === option) {
      // saveSettings({ ...settings, theme: THEMES[option.toUpperCase()] });

      return <></>;
    }

    return <NotFound cKey={cKey} option={option} />;
  }, [cKey, option, saveSettings, settings]);

  return { handleLocale, handleTheme };
};

export default useCommands;
