const retrieve = (key: string): any => {
  try {
    // @ts-ignore
    return JSON.parse(window.localStorage.getItem(key));
  } catch (e) {
    return '';
  }
};

const set = (key: string, value: any) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    return;
  }
};

const remove = (key: string) => {
  try {
    window.localStorage.removeItem(key);
  } catch (e) {
    return;
  }
};

const removeAll = () => {
  try {
    window.localStorage.clear();
  } catch (e) {
    return;
  }
};

export default { retrieve, set, remove, removeAll };
