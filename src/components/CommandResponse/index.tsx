import { memo } from 'react';

import { useCommands } from '@/hooks';
import { systemCommands } from '@/constants';

import { NotFound } from './Responses';

type CommandResponse = {
  commandKey: string;
};

const CommandResponse = ({ commandKey }: CommandResponse) => {
  const { cKey, option, handleLocaleMessage, handleThemeMessage } =
    useCommands(commandKey);

  /*
  todo: return a hint response for required options
  */
  if (systemCommands[cKey] && systemCommands[cKey].options)
    return <>pending {'->'} hint for required options</>;

  switch (cKey) {
    case '':
      return <></>;
    case 'language':
      return handleLocaleMessage();
    case 'theme':
      return handleThemeMessage();
    case 'fullscreen':
      return <></>;
    case 'exit':
      return <></>;
    case 'help':
      return <>'help'</>;
    default:
      return <NotFound cKey={cKey} />;
  }
};

export default memo(CommandResponse);
