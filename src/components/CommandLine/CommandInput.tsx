import React, { memo, useEffect, useState } from 'react';
import { styled, Theme } from '@mui/material/styles';

import { useCommands } from '@/hooks';
import { Span } from '@/components';

const Input = styled('input')(
  ({ theme, width }: { theme: Theme; width: string }) => ({
    flex: '1 1 auto',
    background: 'transparent',
    border: 'none',
    caretColor: theme.palette.error.main,
    // @ts-ignore
    color: theme.palette.text[400],
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
  const [commandsHistory, setCommandsHistory] = useState([]);
  const [lastCommand, setLastCommand] = useState(0);

  const { exit, handleLocale, handleTheme, handleProjectsPreview } =
    useCommands('');

  useEffect(() => {
    const commandsStorage = localStorage.getItem('commandLinesHistory');
    if (commandsStorage) {
      const parsedCommandsStorage = JSON.parse(commandsStorage);
      setCommandsHistory(parsedCommandsStorage);
      setLastCommand(parsedCommandsStorage.length - 1);
    }
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(e.target.value);
  };

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      setCommand(commandsHistory[lastCommand]);
      setLastCommand((prev) => (prev > 0 ? prev - 1 : prev));
    }

    if (e.key === 'ArrowDown') {
      setLastCommand((prev) => {
        const pos = prev + 1;
        if (prev < commandsHistory.length - 1) {
          setCommand(commandsHistory[pos]);

          return pos;
        }
        if (pos > commandsHistory.length - 1) {
          setCommand('');

          return prev;
        }

        return prev;
      });
    }

    if (e.key === 'Enter') {
      if (command.trim() === 'exit') {
        addCommandLines([]);
        setCommand('');
        exit();
      } else if (command.trim() === 'cls') {
        addCommandLines([]);
        cleanTerminal(true);
        setCommand('');
      } else {
        addCommandLines((prev: any[]) => [...prev, command || ' ']);
        setCommand('');

        //* execute command systems
        handleLocale(command);
        handleTheme(command);
        handleProjectsPreview(command);
      }
    }
  };

  if (commandValue || command === undefined)
    return (
      <Span
        sx={{
          // @ts-ignore
          color: (theme) => theme.palette.text[400],
        }}
      >
        {commandValue}
      </Span>
    );

  return (
    // @ts-ignore
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
