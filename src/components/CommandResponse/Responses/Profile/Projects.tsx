import { memo } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Theme } from '@mui/material/styles';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';

import { useDraggablePreviews } from '@/hooks';
import { Paragraph, Span, MuiNextLink } from '@/components';

const Projects = () => {
  const { isLoading, projects, handlePreviews } = useDraggablePreviews();

  const isDownSm = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm')
  );

  if (isLoading)
    return (
      <Box sx={{ width: '100%', padding: '20px' }}>
        <LinearProgress sx={{ height: '10px' }} />
      </Box>
    );

  return (
    <>
      <Paragraph>
        <Span
          sx={{
            // @ts-ignore
            color: (theme) => theme.palette.text[200],
          }}
        >
          Note :
        </Span>{' '}
        You can access the preview of a project by using the "preview" command
        or by clicking on one of the project names
      </Paragraph>
      <Grid
        container
        spacing={2}
        rowSpacing={2}
        justifyContent="flex-start"
        paddingTop="10px"
        paddingBottom="20px"
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
    </>
  );
};

export default memo(Projects);
