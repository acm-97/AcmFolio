import { useCallback } from 'react';

import { THEMES } from '@/settings';
import { useSettings } from '@/contexts/SettingsProvider';
import { NotFound } from '@/components/CommandResponse/Responses';

import useLocale from './useLocale';

/*
 * handleCommand
 * return an object
 * with the key and option for a command
 * ex: {cKey: "theme", option: "dark"}
 */
const handleCommand = (command: string) => {
  const commandKeyFormated = command.trim().replace(' ', '').split('--');
  const cKey = commandKeyFormated[0];
  const option = commandKeyFormated[1];

  return { cKey, option };
};

/*
 * useCommands hook
 * return an object of functions and values
 * for commandos management
 */
const useCommands = (command: string) => {
  const { locales, changeLocale } = useLocale();
  const { settings, saveSettings } = useSettings();
  const { cKey, option } = handleCommand(command);

  /*
   * handleLocale function
   * change the currente language
   * for the site
   */
  const handleLocale = (_command: string) => {
    const { option: _option } = handleCommand(_command);
    if (locales?.includes(_option)) {
      changeLocale(_option);
    }
  };

  /*
   * handleLocaleMessage function
   * return a response message
   * for the command line
   * when command == "language"
   */
  const handleLocaleMessage = () => {
    if (!locales?.includes(option))
      return <NotFound cKey={cKey} option={option} />;

    return <></>;
  };

  /*
   * handleTheme function
   * change the currente theme mode
   * for the site
   */
  const handleTheme = useCallback(
    (_command: string) => {
      const { option: _option } = handleCommand(_command);
      const themes = [THEMES.DARK.toLowerCase(), THEMES.LIGHT.toLowerCase()];

      if (settings.theme !== _option && themes.includes(_option)) {
        saveSettings({ ...settings, theme: _option as THEMES });
      }
    },
    [saveSettings, settings]
  );

  /*
   * handleThemeMessage function
   * return a response message
   * for the command line
   * when command == "theme"
   */
  const handleThemeMessage = useCallback(() => {
    const themes = [THEMES.DARK.toLowerCase(), THEMES.LIGHT.toLowerCase()];

    if (!themes.includes(option))
      return <NotFound cKey={cKey} option={option} />;

    return <></>;
  }, [cKey, option]);

  /*
   * handleFullScreen function
   * put the browser windows on full screen mode
   */
  const handleFullScreen = async (_command: string) => {
    const { cKey: _cKey } = handleCommand(_command);

    if (_cKey === 'fullscreen') {
      const elem = document.documentElement;
      if (elem.requestFullscreen) {
        await elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        /* Safari */
        await elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        /* IE11 */
        await elem.msRequestFullscreen();
      }
    }
  };

  return {
    cKey,
    option,
    handleLocale,
    handleLocaleMessage,
    handleTheme,
    handleThemeMessage,
    handleFullScreen,
  };
};

export default useCommands;
