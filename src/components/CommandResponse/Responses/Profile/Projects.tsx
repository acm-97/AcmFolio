import { memo } from 'react';
import { Grid } from '@mui/material';

import { useDraggablePreviews } from '@/hooks';
import { Span, MuiNextLink } from '@/components';

const Projects = () => {
  const { projects, handlePreviews } = useDraggablePreviews();

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
            href="#"
            onClick={() =>
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
