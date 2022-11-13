import { memo, useMemo } from 'react';

import { useCommands, useLocale } from '@/hooks';

import { NotFound } from './Responses';

type CommandResponse = {
  commandKey: string;
};

const CommandResponse = ({ commandKey }: CommandResponse) => {
  const commandKeyFormated = useMemo(
    () => commandKey.trim().replace(' ', '').split('--'),
    [commandKey]
  );

  const cKey = commandKeyFormated[0];
  const option = commandKeyFormated[1];

  const { handleLocale, handleTheme } = useCommands(cKey, option);

  switch (cKey) {
    case '':
      return <></>;
    case 'language':
      return handleLocale();
    case 'theme':
      return handleTheme();
    case 'help':
      return <>'help'</>;
    default:
      return <NotFound cKey={cKey} />;
  }
};

export default memo(CommandResponse);
