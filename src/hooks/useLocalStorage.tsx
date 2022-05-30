import { useCallback, useEffect, useState } from 'react';

const useLocalStorage = (key: string, initialValue: any) => {
  const [data, setData] = useState(initialValue);
  useEffect(() => {
    const getData = window.localStorage.getItem(key);

    if (getData) {
      setData(JSON.parse(getData));
    }
  }, [key]);

  const storeData = useCallback(
    (updateValue: any) => {
      setData(updateValue);
      // console.log(updateValue);
      // console.log(JSON.stringify(updateValue));
      window.localStorage.setItem(key, JSON.stringify(updateValue));
    },
    [key]
  );

  return {
    data,
    storeData,
  };
};

export default useLocalStorage;
