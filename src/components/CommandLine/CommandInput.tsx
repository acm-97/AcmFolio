import React, { memo, useEffect, useMemo, useState, useCallback } from 'react';
import { styled, Theme } from '@mui/material/styles';

import { COMMAND_LINES, COMMAND_LINES_HISTORY } from 'pages/terminal';
import { useCommands, useLocalStorageState } from '@/hooks';
import { Span } from '@/components';

const Input = styled('input')(({ theme, width }: { theme: Theme; width: string }) => ({
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
}));

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
  const [lastCommand, setLastCommand] = useState(-1);
  const { exit, handleLocale, handleTheme, handleProjectsPreview } = useCommands('');

  const [storedCommandLines, storeCommandLines] = useLocalStorageState<string[]>(COMMAND_LINES, []);
  const [storedCommandsHistory, storeCommandLinesHistory] = useLocalStorageState<string[]>(COMMAND_LINES_HISTORY, []);

  useEffect(() => {
    if (storedCommandsHistory.length > 0) setLastCommand(storedCommandsHistory.length - 1);
  }, [storedCommandsHistory.length]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(e.target.value);
  };

  const onEnter = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'ArrowUp') {
        setLastCommand((prev) => {
          let pos = prev - 1;
          pos = pos >= 0 ? pos : prev;

          if (!command && storedCommandsHistory.length > 0) {
            setCommand(storedCommandsHistory[lastCommand]);
            return pos;
          }

          setCommand(storedCommandsHistory[pos]);
          return pos;
        });
      }

      if (e.key === 'ArrowDown') {
        setLastCommand((prev) => {
          const pos = prev + 1;

          if (pos <= storedCommandsHistory.length - 1) {
            setCommand(storedCommandsHistory[pos]);
            return pos;
          }

          setCommand('');
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
        storeCommandLines([...storedCommandLines, command]);
        command && storeCommandLinesHistory([...storedCommandsHistory, command]);
      }
    },
    [
      addCommandLines,
      cleanTerminal,
      command,
      storedCommandLines,
      storedCommandsHistory,
      exit,
      handleLocale,
      handleProjectsPreview,
      handleTheme,
      lastCommand,
      storeCommandLines,
      storeCommandLinesHistory,
    ],
  );

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
