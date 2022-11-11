import React, { memo, useState } from 'react';
import { styled, Theme } from '@mui/material/styles';

const Input = styled('input')(({ theme }: { theme: Theme }) => ({
  flex: 1,
  background: 'transparent',
  border: 'none',
  color: theme.palette.text[400],
  caretColor: theme.palette.text[100],
  ':focus': {
    outline: 'none',
  },
}));

type CommandInputTypes = {
  inputCommandRef: any;
  command?: string;
  addCommandLines: (x: any) => void;
};

const CommandInput = ({
  inputCommandRef,
  command: commandValue,
  addCommandLines,
}: CommandInputTypes) => {
  const [command, setCommand] = useState(commandValue || '');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(e.target.value);
  };

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addCommandLines((prev: any[]) => [...prev, { command, value: '' }]);
      setCommand('');
    }
  };

  return (
    <Input
      ref={inputCommandRef}
      id="command-input"
      type="text"
      spellCheck="false"
      autoComplete="off"
      value={command}
      onChange={onChange}
      onKeyUp={onEnter}
    />
  );
};

export default memo(CommandInput);
