import React, { memo, useState } from 'react';
import { styled, Theme } from '@mui/material/styles';

const Input = styled('input')(
  ({ theme, width }: { theme: Theme; width: string }) => ({
    flex: '1 1 auto',
    background: 'transparent',
    border: 'none',
    color: theme.palette.text[400],
    caretColor: theme.palette.text[100],
    caretShape: 'block',
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

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(e.target.value);
  };

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (command.trim() === 'cls') {
        addCommandLines([]);
        cleanTerminal(true);
        setCommand('');
      } else {
        addCommandLines((prev: any[]) => [
          ...prev,
          { key: command, value: '' },
        ]);
        setCommand('');
      }
    }
  };

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
