import { memo, useMemo } from 'react';

import { useCommands, useLocalStorageState, useProfileCommands, useSystemCommands } from '@/hooks';

import Contacts from './Responses/Profile/Contacts';
import { NotFound, Help, About, Skills, Matches } from './Responses';

type CommandResponse = {
  command: string;
};

export type CommandMatchesProps = {
  [x: string]: string[];
};

export const COMMANDS_MATCHES = 'COMMANDS_MATCHES';

const CommandResponse = ({ command }: CommandResponse) => {
  const { profileCommands, profileColumns } = useProfileCommands();
  const { systemColumns, systemCommands } = useSystemCommands();
  const [storedCommandMatches] = useLocalStorageState<CommandMatchesProps>(COMMANDS_MATCHES, {});
  const {
    cKey,
    option,
    handleLocaleMessage,
    handleThemeMessage,
    setFullScreen,
    handleProjects,
    requiredSystemCommands,
    requiredProfileCommands,
    requiredProjectsOptionValue,
  } = useCommands(command);

  if (storedCommandMatches[command]) {
    return <Matches match={storedCommandMatches[command]} />;
  }

  if (requiredSystemCommands || requiredProfileCommands) return <NotFound cKey={cKey} optionsRequired />;

  if (requiredProjectsOptionValue) return <NotFound cKey={cKey} option={option} />;

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
          <Help columns={profileColumns} rows={Object.values(profileCommands)} />
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
