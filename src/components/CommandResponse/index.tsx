import { memo } from 'react';

import { useCommands } from '@/hooks';

import { NotFound } from './Responses';

type CommandResponse = {
  commandKey: string;
};

const CommandResponse = ({ commandKey }: CommandResponse) => {
  const { cKey, handleLocaleMessage, handleThemeMessage } =
    useCommands(commandKey);

  switch (cKey) {
    case '':
      return <></>;
    case 'language':
      return handleLocaleMessage();
    case 'theme':
      return handleThemeMessage();
    case 'help':
      return <>'help'</>;
    default:
      return <NotFound cKey={cKey} />;
  }
};

export default memo(CommandResponse);
