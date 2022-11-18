import React, { FunctionComponent, memo, MouseEvent, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Button } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';

interface CompProps {
  className?: string;
  [key: string]: any;
}

interface LanguageSelectorProps {
  className?: string;
  compProps?: CompProps;
  icon?: any;
  mini?: boolean;
}

const LanguageSelector: FunctionComponent<LanguageSelectorProps> = ({
  className,
  icon = <LanguageIcon />,
  mini,
  compProps,
}) => {
  const { t } = useTranslation('locales');
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const open = Boolean(anchorEl);
  const { ...props } = compProps || {};
  const { locale, locales, asPath } = useRouter();

  const handleClick = (event: MouseEvent) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // if there's no language configuration, we don't render the component
  if (!locale) return <></>;

  return (
    <div className={className}>
      <Button
        id="language-selector"
        aria-controls={open ? 'language-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        // alt="selector"
        {...props}
      >
        {icon} {t(mini ? `mini-${locale}` : locale || 'es')}
      </Button>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'language-selector',
        }}
      >
        {locales?.map((lang) => (
          <Link href={asPath} key={lang} locale={lang} passHref>
            <MenuItem key={lang} selected={locale === lang}>
              {t(lang)}
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </div>
  );
};

export default memo(LanguageSelector);
