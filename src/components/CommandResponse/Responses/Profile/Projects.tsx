import { memo, useEffect, useState } from 'react';
import { styled, Theme } from '@mui/material/styles';
import { Grid } from '@mui/material';

import { Span, MuiNextLink } from '@/components';
import ProjectDetails from './ProjectDetails';

const Container = styled('div')((theme: { theme: Theme }) => ({
  // width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  margin: '20px 0',
}));

type ProjectsProps = {
  id: string;
  name: string;
  url: string;
  description: string;
  owner: {
    id: string;
    avatar_url: string;
  };
};

const Projects = () => {
  const [projects, setProjects] = useState<ProjectsProps[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const fetchProjects = () => {
      fetch('https://api.github.com/users/acm-97/repos', { signal })
        .then((res) => res.json())
        .then((repos) => {
          const result = repos.map((item: any) => ({
            id: item.id,
            name: item.name,
            url: item.html_url,
            description: item.description,
            owner: {
              id: item.owner.id,
              avatar_url: item.owner.avatar_url,
            },
          }));

          setProjects(result);
        })
        .catch((err) => {
          if (err.name === 'AbortError') console.log('previus fetch canceled');
          else console.log(err);
        });
    };
    fetchProjects();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <Grid
      container
      spacing={2}
      rowSpacing={2}
      justifyContent="flex-start"
      padding={20}
    >
      <ProjectDetails />
      {projects.map((item, i) => (
        <Grid key={item.name} item>
          <MuiNextLink
            key={item.name}
            sx={{ width: 'auto', textDecoration: 'none' }}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Span
              sx={{
                // @ts-ignore
                color: (theme) => theme.palette.text[200],
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
