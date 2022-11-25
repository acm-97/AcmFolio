import Typewriter from 'typewriter-effect';
import { memo, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { Box, Paper } from '@mui/material';

import { COMMON_LOCALE } from '@/settings';
import { EN_FRONTEND_DEVELOPER, ES_FRONTEND_DEVELOPER, GITHUB } from '@/constants';
import { Wrapper } from '@/components/Terminal/HomeTerminalWrapper';
import GameAreaOvelay from '@/components/GameAreaOvelay';
import { LanguageSelector, ThemeSelector } from '@/components';

/*
 * manage the current locale (language)
 * and "locales".json availables for page translation
 */
export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, [...COMMON_LOCALE, 'home'])),
  },
});

const Home = () => {
  const router = useRouter();
  const { t } = useTranslation('home');

  useEffect(() => localStorage.clear());

  return (
    <Wrapper>
      <Box className="image">
        <Image src="/logos/logo-home.png" alt="logo-home" layout="fill" objectFit="contain" />
      </Box>
      <Box className="ContainerWrapper">
        <Paper className="terminal">
          <div className="options">
            <LanguageSelector mini />
            <ThemeSelector />
          </div>
          <Paper className="text">
            <Typewriter
              options={{ cursor: '▮', delay: 25 }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    `<span class="dollar">$ </span> ${t('textContainer.part1')} <br/> 
                           <span class="dollar">$ </span> ${t('textContainer.part2')}`,
                  )

                  .typeString('<span id="user-name" class="user-name"> @acm-97 </span> <br/> ')
                  .callFunction(() => {
                    document?.getElementById('user-name')?.addEventListener('click', () => {
                      window?.open(GITHUB);
                    });
                  })
                  .typeString(`<span class="dollar">$ </span>  ${t('textContainer.part3')} `)
                  .typeString(`<span id="frontend" class="frontend"> ${t('textContainer.part4')} </span> `)
                  .callFunction(() => {
                    document?.getElementById('frontend')?.addEventListener('click', () => {
                      window?.open(router.locale === 'es' ? ES_FRONTEND_DEVELOPER : EN_FRONTEND_DEVELOPER);
                    });
                  })
                  .typeString(` ${t('textContainer.part5')} <br/>  `)
                  .typeString(` <span class="dollar">$ </span>  ${t('textContainer.part6')}   `)
                  .typeString(` <span id="continue-blink">${t('textContainer.part7')}</span>  `)
                  .callFunction(() => {
                    document
                      ?.getElementById('continue-blink')
                      ?.addEventListener('click', async () => await router.push('/terminal'));
                  })
                  .typeString(` ${t('textContainer.part8')} `)

                  .start();
              }}
            />
          </Paper>
        </Paper>
        <GameAreaOvelay />
      </Box>
    </Wrapper>
  );
};

export default Home;
