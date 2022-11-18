/* eslint-disable @typescript-eslint/no-floating-promises */
import { useRouter } from 'next/router';

const useLocale = () => {
  const router = useRouter();
  const { locale: currentLocale, locales, pathname, query, asPath } = router;

  const changeLocale = (locale: string) => {
    router.push(
      {
        pathname,
        query,
      },
      asPath,
      { locale }
    );
  };

  return { currentLocale, changeLocale, locales };
};

export default useLocale;
