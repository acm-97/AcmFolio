import { memo } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Theme } from '@mui/material/styles';
import { Grid } from '@mui/material';

import { useDraggablePreviews } from '@/hooks';
import { Span, MuiNextLink } from '@/components';

const Projects = () => {
  const { projects, handlePreviews } = useDraggablePreviews();

  const isDownSm = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm')
  );

  return (
    <Grid
      container
      spacing={2}
      rowSpacing={2}
      justifyContent="flex-start"
      padding="20px"
    >
      {projects.map((item, i) => (
        <Grid key={item.name} item>
          <MuiNextLink
            key={item.name}
            sx={{
              width: 'auto',
              textDecoration: 'none',
              // @ts-ignore
              color: (theme) => theme.palette.text.secondary,
            }}
            href={!isDownSm ? '#' : item.url}
            target={isDownSm ? '_blank' : '_self'}
            rel={isDownSm ? 'noopener noreferrer' : ''}
            onClick={() =>
              !isDownSm &&
              handlePreviews({
                projectName: item.name,
                project: item,
              })
            }
          >
            <Span
              sx={{
                // @ts-ignore
                color: (theme) => theme.palette.text.primary,
              }}
            >
              ( {i + 1} ){' '}
            </Span>
            {item.name}
          </MuiNextLink>
        </Grid>
      ))}
    </Grid>
  );
};

export default memo(Projects);
