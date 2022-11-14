import React, { memo, useState } from 'react';
import { styled, Theme } from '@mui/material/styles';

import { useCommands } from '@/hooks';
import { Span } from '@/components';
import { scrollToBottom } from '@/utils';

const Input = styled('input')(
  ({ theme, width }: { theme: Theme; width: string }) => ({
    flex: '1 1 auto',
    background: 'transparent',
    border: 'none',
    caretColor: theme.palette.error.main,
    color: theme.palette.warning.main,
    paddingLeft: 0,
    ':focus': {
      outline: 'none',
    },
    width,
  })
);

type CommandInputTypes = {
  inputCommandRef: any;
  command?: string;
  addCommandLines: (x: any) => void;
  cleanTerminal: (x: boolean) => void;
};

const CommandInput = ({
  inputCommandRef,
  command: commandValue,
  addCommandLines,
  cleanTerminal,
}: CommandInputTypes) => {
  const [command, setCommand] = useState(commandValue || '');

  const { handleLocale, handleTheme, handleFullScreen } = useCommands('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(e.target.value);
  };

  const onEnter = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (command.trim() === 'cls') {
        addCommandLines([]);
        cleanTerminal(true);
        setCommand('');
      } else {
        addCommandLines((prev: any[]) => [...prev, command]);
        setCommand('');

        //* execute command systems
        handleLocale(command);
        handleTheme(command);
        await handleFullScreen(command);
      }
      scrollToBottom()
      // scrollToTop()
    }
  };

  if (commandValue)
    return (
      <Span sx={{ color: (theme) => theme.palette.warning.main }}>
        {commandValue}
      </Span>
    );

  return (
    <Input
      ref={inputCommandRef}
      id="command-input"
      type="text"
      spellCheck="false"
      autoComplete="off"
      width={`${command.length + 1}ch`}
      value={command}
      onChange={onChange}
      onKeyUp={onEnter}
    />
  );
};

export default memo(CommandInput);
