import Draggable from 'react-draggable';
import { memo } from 'react';
import Image from 'next/image';
import { styled, Theme } from '@mui/material/styles';
import { Paper, Card, Box, CardContent, CardMedia } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';

import { DraggProps } from '@/contexts/DraggableContext';
import { images, GITHUB } from '@/constants';
import { H1, H6 } from '@/components/Typography';
import { MuiNextLink } from '@/components/Link';

import TopBar from './TopBar';

// type ProjectDetailsProps = {};

type Container = {
  top: number;
  theme: Theme;
};

const Container = styled(Paper)(({ top, theme }: Container) => ({
  position: 'absolute',
  zIndex: 100,
  top: top || 0,
  left: 0,
  width: '600px',
  height: '25vh',
  maxHeight: '50vh',
  borderRadius: '20px',

  [theme.breakpoints.down('md')]: {
    width: '500px',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },

  span: { lineHeight: '1.8' },

  '& .MuiCard': {
    display: 'flex',
    alignItems: 'center',
    padding: '30px 15px',
  },
  '& .CardMediaWrapper': {
    width: '100%',
    overflow: 'hidden',
    margin: '0 auto',
  },
  '& .CardMediaWrapper .CardMedia': {
    width: '100%',
    height: 180,
    transition: '0.5s all ease-in-out',
    ':hover': {
      transform: 'scale(1.2)',
      cursor: 'pointer',
    },
  },
  '& .CardMediaWrapper .CardMedia .image': {
    // borderRadius: '20px',
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  '& .MuiCardContent-root': {
    width: '100%',
    maxWidth: '450px',
    flex: '1 0 auto',
    padding: '12px',
    ':last-child': {
      paddingBottom: 12,
    },
  },
}));

type ProjectDetailsProps = {
  draggable: DraggProps;
};

const ProjectDetails = ({
  draggable: {
    top,
    project: {
      fullName,
      description,
      url,
      homepage,
      owner: { userName },
    },
    projectName,
  },
}: ProjectDetailsProps) => (
  <Draggable handle=".drag-projects-details">
    {/* @ts-ignore */}
    <Container top={top}>
      <TopBar projectName={projectName} />
      <Card className="MuiCard">
        <Box className="CardMediaWrapper">
          <CardMedia className="CardMedia" onClick={() => url && window.open(url)}>
            <div className="image">
              <Image
                alt={projectName}
                src={images[projectName] || images.noimage}
                layout="fill"
                objectFit="contain" // or objectFit="cover"
              />
            </div>
          </CardMedia>
        </Box>
        <Box sx={{ display: 'flex', width: '100%' }}>
          <CardContent>
            <H1 margin={0}>{projectName}</H1>
            <H6 margin={0}>{description}</H6>
            <H6 margin="0 0 20px 0">
              created by{' '}
              <MuiNextLink
                // @ts-ignore
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: (theme) => theme.palette.text.secondary,
                  textDecoration: 'none',
                }}
              >
                @{userName}
              </MuiNextLink>
            </H6>
            {url && (
              <MuiNextLink
                // @ts-ignore
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  color: (theme) => theme.palette.text.secondary,
                  textDecoration: 'none',
                }}
              >
                <GitHubIcon
                  sx={{
                    width: '0.7em !important',
                    height: '0.7em !important',
                    color: 'white !important',
                    marginRight: 1,
                  }}
                />
                {fullName}
              </MuiNextLink>
            )}
            {homepage && (
              <MuiNextLink
                // @ts-ignore
                href={homepage}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  color: (theme) => theme.palette.text.secondary,
                  textDecoration: 'none',
                  marginTop: 1,
                }}
              >
                <OpenInNewIcon
                  sx={{
                    width: '0.7em !important',
                    height: '0.7em !important',
                    color: 'white !important',
                    marginRight: 1,
                  }}
                />
                {fullName}
              </MuiNextLink>
            )}
          </CardContent>
        </Box>
      </Card>
    </Container>
  </Draggable>
);

export default memo(ProjectDetails);
