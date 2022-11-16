import { memo } from 'react';

import { useCommands } from '@/hooks';
import { systemCommands } from '@/constants';

import About from './Responses/About';
import { NotFound, Help } from './Responses';

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
  } = useCommands(commandKey);

  /*
  TODO: return a hint response for required options
  */
  if (systemCommands[cKey] && systemCommands[cKey].options)
    return <NotFound cKey={cKey} optionsRequired />;
  
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
      return <Help />;
    case 'about':
      return <About />;
    default:
      return <NotFound cKey={cKey} />;
  }
};

export default memo(CommandResponse);
