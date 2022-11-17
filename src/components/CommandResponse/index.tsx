import { memo } from 'react';

import { useCommands } from '@/hooks';
import {
  systemCommands,
  systemColumns,
  profileCommands,
  profileColumns,
} from '@/constants';

import { NotFound, Help, About, Skills } from './Responses';
import Contacts from './Responses/Profile/Contacts';

type CommandResponse = {
  commandKey: string;
};

const CommandResponse = ({ commandKey }: CommandResponse) => {
  const {
    cKey,
    option,
    handleLocaleMessage,
    handleThemeMessage,
    setFullScreen,
    handleProjects,
  } = useCommands(commandKey);

  if (
    (systemCommands[cKey] && systemCommands[cKey].options && !option) ||
    (profileCommands[cKey] && profileCommands[cKey].options && !option)
  )
    return <NotFound cKey={cKey} optionsRequired />;

  if (
    (systemCommands[cKey] &&
      systemCommands[cKey].options &&
      !systemCommands[cKey].options?.includes(option) &&
      !option.includes('=')) ||
    (profileCommands[cKey] &&
      profileCommands[cKey].options &&
      !profileCommands[cKey].options?.includes(option) &&
      !option.includes('='))
  )
    return <NotFound cKey={cKey} option={option} />;

  switch (cKey) {
    case '':
      return <></>;
    case 'language':
      return handleLocaleMessage();
    case 'theme':
      return handleThemeMessage();
    case 'fullscreen':
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      setFullScreen();

      return <></>;
    case 'exit':
      return <></>;
    case 'help':
      return (
        <>
          <Help
            columns={profileColumns}
            rows={Object.values(profileCommands)}
          />
          <Help columns={systemColumns} rows={Object.values(systemCommands)} />
        </>
      );
    case 'about':
      return <About />;
    case 'skills':
      return <Skills />;
    case 'projects':
      return handleProjects();
    case 'contacts':
      return <Contacts />;
    default:
      return <NotFound cKey={cKey} />;
  }
};

export default memo(CommandResponse);
