export const systemCommands: {
  [x: string]: { key: string; options: null | string[] };
} = {
  cls: {
    key: 'cls',
    options: null,
  },
  language: {
    key: 'setlanguage',
    options: ['en', 'es'],
  },
  theme: {
    key: 'settheme',
    options: ['light', 'dark'],
  },
  fullscreen: {
    key: 'fullscreen',
    options: null,
  },
  exit: {
    key: 'exit',
    options: null,
  },
};
