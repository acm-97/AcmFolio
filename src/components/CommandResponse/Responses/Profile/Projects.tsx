import { memo, useEffect } from 'react';

// type ProjectsProps = {};

const fetchProjects = (signal: any) => {
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  fetch('https://api.github.com/users/acm-97/repos', { signal })
    .then((res) => res.json())
    .then((repos) => {
      console.log('🚀 ~ file: Projects.tsx ~ line 8 ~ fetch ~ res', repos);
    })
    .catch((err) => {
      if (err.name === 'AbortError') console.log('previus fetch canceled');
      else console.log(err);
    });
};

const Projects = () => {
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    fetchProjects(signal);

    return () => {
      controller.abort();
    };
  }, []);

  return <div>Projects Loaded</div>;
};

export default memo(Projects);
