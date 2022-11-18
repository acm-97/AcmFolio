import { memo } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

import { GITHUB, INSTAGRAM, LINKEDIN } from '@/constants';
import { MuiNextLink, Paragraph, Span } from '@/components';

// type ContactsProps = {};

const Contacts = () => (
  <div style={{ padding: '8px 0 20px 0' }}>
    <Paragraph>
      <Span
        sx={{
          // @ts-ignore
          color: (theme) => theme.palette.text[200],
        }}
      >
        Note :
      </Span>{' '}
      You can access the socials by clicking on any of them.
    </Paragraph>
    <MuiNextLink
      // @ts-ignore
      href={GITHUB}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        // @ts-ignore
        color: (theme) => theme.palette.text.secondary,
        alignItems: 'center',
        display: 'flex',
        textDecoration: 'none',
      }}
    >
      <GitHubIcon
        sx={{
          width: '0.7em !important',
          height: '0.7em !important',
          // @ts-ignore
          color: (theme) => `${theme.palette.text[200]} !important`,
          marginRight: 1,
        }}
      />{' '}
      GitHub
    </MuiNextLink>
    <MuiNextLink
      // @ts-ignore
      href={LINKEDIN}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        // @ts-ignore
        color: (theme) => theme.palette.text.secondary,
        alignItems: 'center',
        display: 'flex',
        textDecoration: 'none',
      }}
    >
      <LinkedInIcon
        sx={{
          width: '0.7em !important',
          height: '0.7em !important',
          // @ts-ignore
          color: (theme) => `${theme.palette.text[200]} !important`,
          marginRight: 1,
        }}
      />{' '}
      LinkedIn
    </MuiNextLink>
    <MuiNextLink
      // @ts-ignore
      href={INSTAGRAM}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        // @ts-ignore
        color: (theme) => theme.palette.text.secondary,
        alignItems: 'center',
        display: 'flex',
        textDecoration: 'none',
      }}
    >
      <InstagramIcon
        sx={{
          width: '0.7em !important',
          height: '0.7em !important',
          // @ts-ignore
          color: (theme) => `${theme.palette.text[200]} !important`,
          marginRight: 1,
        }}
      />{' '}
      Instagram
    </MuiNextLink>
  </div>
);

export default memo(Contacts);
