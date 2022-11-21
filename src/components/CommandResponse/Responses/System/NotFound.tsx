import { memo } from 'react';
import { styled } from '@mui/material/styles';

import { TypographyProps } from '@/components/Typography/typography.types';
import { Span } from '@/components';
import { useTranslation } from 'next-i18next';

type NotFoundProps = {
  cKey: string;
  option?: string;
  optionsRequired?: boolean;
};

const StyledSpan = styled((props: TypographyProps) => (
  <Span
    sx={{
      // @ts-ignore
      color: (theme) => theme.palette.text[400],
    }}
    {...props}
  />
))``;

const NotFound = ({ cKey, option, optionsRequired }: NotFoundProps) => {
  const { t } = useTranslation('terminal');

  return (
    <Span
      sx={{
        margin: '10px 0 10px 15px',
      }}
    >
      <Span sx={{ color: (theme) => theme.palette.error.dark }}>
        {cKey && optionsRequired ? 'REQUIRED_OPTIONS' : 'ERROR'} :{' '}
      </Span>
      {cKey && optionsRequired ? (
        <>
          <StyledSpan> {cKey} </StyledSpan> --[option]
          <br />
          <br /> {t('notFound.part1')} "<StyledSpan>help</StyledSpan>"{' '}
          {t('notFound.part2')}
        </>
      ) : !option ? (
        <>
          {t('notFound.part3')} (<StyledSpan> {cKey} </StyledSpan>){' '}
          {t('notFound.part4')} "<StyledSpan>help</StyledSpan>"{' '}
          {t('notFound.part5')}
        </>
      ) : (
        <>
          {t('notFound.part6')} (<StyledSpan> --{option} </StyledSpan>){' '}
          {t('notFound.part7')} (<StyledSpan> {cKey} </StyledSpan>){' '}
          {t('notFound.part4')} "<StyledSpan>help</StyledSpan>"{' '}
          {t('notFound.part2')}
        </>
      )}
      <br />
    </Span>
  );
};
export default memo(NotFound);
