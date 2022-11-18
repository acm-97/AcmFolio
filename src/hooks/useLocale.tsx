/* eslint-disable @typescript-eslint/no-floating-promises */
import { useRouter } from 'next/router';

const useLocale = () => {
  const router = useRouter();
  const {
    locale: currentLocale,
    locales,
    pathname: route,
    query,
    asPath,
  } = router;

  const changeLocale = (locale: string) => {
    router.push(
      {
        route,
        query,
      },
      asPath,
      { locale }
    );
  };

  return { currentLocale, changeLocale, locales };
};

export default useLocale;
