import { memo } from 'react';

import { useLocale } from '@/hooks';

import { NotFound } from './Responses';

type CommandResponse = {
  commandKey: string;
};

const CommandResponse = ({ commandKey }: CommandResponse) => {
  const commandKeyFormated = commandKey.trim().replace(' ', '').split('--');
  const { locales, changeLocale } = useLocale();

  const handleLocale = () => {
    if (locales?.includes(commandKeyFormated[1])) {
      changeLocale(commandKeyFormated[1]);

      return <></>;
    }

    return <NotFound command="" />;
  };

  switch (commandKeyFormated[0]) {
    case '':
      return <></>;
    case 'language':
      return handleLocale();
    case 'help':
      return <>'help'</>;
    default:
      return <NotFound command="" />;
  }
};

export default memo(CommandResponse);
