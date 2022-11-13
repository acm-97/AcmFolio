import { memo, useMemo } from 'react';

import { useLocale } from '@/hooks';

import { NotFound } from './Responses';

type CommandResponse = {
  commandKey: string;
};

const CommandResponse = ({ commandKey }: CommandResponse) => {
  const commandKeyFormated = useMemo(
    () => commandKey.trim().replace(' ', '').split('--'),
    [commandKey]
  );
  const { locales, changeLocale } = useLocale();

  const cKey = commandKeyFormated[0];
  const option = commandKeyFormated[1];

  const handleLocale = () => {
    if (locales?.includes(option)) {
      changeLocale(option);

      return <></>;
    }

    return <NotFound cKey={cKey} option={option} />;
  };

  switch (cKey) {
    case '':
      return <></>;
    case 'language':
      return handleLocale();
    case 'help':
      return <>'help'</>;
    default:
      return <NotFound cKey={cKey} />;
  }
};

export default memo(CommandResponse);
