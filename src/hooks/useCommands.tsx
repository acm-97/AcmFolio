import { useCallback } from 'react';
import { useRouter } from 'next/router';

import { THEMES } from '@/settings';
import { useSettings } from '@/contexts/SettingsProvider';
import { NotFound, Skills } from '@/components/CommandResponse/Responses';

import useLocale from './useLocale';

/*
 * handleCommand
 * return an object
 * with the key and option for a command
 * ex: {cKey: "theme", option: "dark"}
 */
const handleCommand = (command: string) => {
  const commandKeyFormated = command.trim().split('--');
  const cKey = commandKeyFormated?.[0]?.trim();
  const option = commandKeyFormated?.[1]?.trim();

  return { cKey, option };
};

/*
 * useCommands hook
 * return an object of functions and values
 * for commandos management
 */
const useCommands = (command?: string) => {
  const { locales, changeLocale } = useLocale();
  const { settings, saveSettings } = useSettings();
  const { cKey, option } = handleCommand(command || '');
  const { push } = useRouter();

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
   * exit function
   * send the user back to initial page
   */
  const exit = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    push('/');
  };

  /*
   * setFullScreen function
   * put the browser windows on full screen mode
   */
  const setFullScreen = async () => {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      await elem.requestFullscreen();
      // } else if (elem.webkitRequestFullscreen) {
      // /* Safari */
      // await elem.webkitRequestFullscreen();
      // } else if (elem.msRequestFullscreen) {
      // /* IE11 */
      // await elem.msRequestFullscreen();
    }
  };

  /*
   * handleSkills function
   * return a list of skills
   */
  const handleSkills = () => {
    console.log(option, '====');
  return option === 'ls' ? <Skills /> : <></>
  };

  /*
   * handleProjects function
   * return a list of projects
   */
  const handleProjects = () => (option === 'ls' ? <div /> : <></>);

  return {
    cKey,
    option,
    handleLocale,
    handleLocaleMessage,
    handleTheme,
    handleThemeMessage,
    exit,
    setFullScreen,
    handleSkills,
    handleProjects,
  };
};

export default useCommands;
