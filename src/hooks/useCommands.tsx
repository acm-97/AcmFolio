import { useCallback, useMemo } from 'react';
import { useRouter } from 'next/router';

import { COMMAND_LINES } from 'pages/terminal';
import { storage } from '@/utils';
import { THEMES } from '@/settings';
import { useSettings } from '@/contexts/SettingsProvider';
import { COMMANDS_MATCHES } from '@/components/Terminal/CommandResponse';
import { NotFound, Projects } from '@/components';

import useSystemCommands from './useSystemCommands';
import useProfileCommands from './useProfileCommands';
import useLocale from './useLocale';
import useDraggablePreviews, { newDraggableProps } from './useDraggablePreviews';


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

  const { projects, handlePreviews } = useDraggablePreviews();

  const { profileCommands } = useProfileCommands();
  const { systemCommands } = useSystemCommands();

  const requiredSystemCommands = useMemo(
    () => systemCommands[cKey] && systemCommands[cKey].options && !option,
    [cKey, option, systemCommands],
  );

  const requiredProfileCommands = useMemo(
    () => profileCommands[cKey] && profileCommands[cKey].options && !option,
    [cKey, option, profileCommands],
  );

  const requiredProjectsOptionValue = useMemo(
    () =>
      profileCommands[cKey] &&
      profileCommands[cKey].options &&
      option.includes('preview') &&
      !option.includes('='),
    [cKey, option, profileCommands],
  );

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
    if (!locales?.includes(option)) return <NotFound cKey={cKey} option={option} />;

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
    [saveSettings, settings],
  );

  /*
   * handleThemeMessage function
   * return a response message
   * for the command line
   * when command == "theme"
   */
  const handleThemeMessage = useCallback(() => {
    const themes = [THEMES.DARK.toLowerCase(), THEMES.LIGHT.toLowerCase()];

    if (!themes.includes(option)) return <NotFound cKey={cKey} option={option} />;

    return <></>;
  }, [cKey, option]);

  /*
   * exit function
   * send the user back to initial page
   */
  const exit = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    push('/');
    storage.remove(COMMAND_LINES);
    storage.remove(COMMANDS_MATCHES);
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
   * handleProjects function
   * return a list of projects
   */
  const handleProjects = () => {
    if (option === 'ls') return <Projects />;
    const _option = option.split('=');
    // @ts-ignore
    if (_option[0] === 'preview' && (Number.isNaN(_option[1]) || !_option[1])) {
      return <NotFound cKey={cKey} option={_option[0]} />;
    }

    return <></>;
  };

  const handleProjectsPreview = useCallback(
    (_command: string) => {
      const { cKey: _cKey, option: _option } = handleCommand(_command);
      if (_cKey === 'projects' && _option.includes('=')) {
        const newOption = _option.split('=');

        // @ts-ignore
        if (newOption[0] === 'preview' && !Number.isNaN(newOption[1])) {
          const selectedProject = projects[Number(newOption[1]) - 1];
          handlePreviews({
            projectName: selectedProject.name,
            project: selectedProject,
          });
        }
      }
    },
    [handlePreviews, projects],
  );

  const handleTab = (_command: string) => {
    const { cKey: _cKey, option: _option } = handleCommand(_command);
    const pc = Object.values(profileCommands);
    const sc = Object.values(systemCommands);
    let allCommands = pc.concat(sc);

    if (_cKey && !_option) {
      const commandsMatching = allCommands.filter((item) => item.key.startsWith(_cKey));

      if (commandsMatching.length > 0) {
        const matches = commandsMatching.map((item) => item.key);
        return matches;
      }

      return [];
    }

    if (_cKey && _option) {
      const commandMatching = allCommands.find((item) => item.key === _cKey);
      const matches = commandMatching?.options?.filter((item) => item.startsWith(_option));
      return matches || [];
    }

    return [];
  };

  return {
    cKey,
    option,
    handleLocale,
    handleLocaleMessage,
    handleTheme,
    handleThemeMessage,
    exit,
    setFullScreen,
    handleProjects,
    handleProjectsPreview,
    handleTab,
    requiredSystemCommands,
    requiredProfileCommands,
    requiredProjectsOptionValue,
    handleCommand
  };
};

export default useCommands;
