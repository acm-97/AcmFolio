import { ProjectsProps } from '@/contexts/DraggableContext';

export const images: { [x: string]: string } = {
  'JavaScript-Challenges': '/projects/javascript-challenges.png',

  'portfolio-v1': '/projects/portfolio-v1.png',

  AcmFolio: '/logos/logo-about.png',
  'thedopple': '/projects/thedopple.png',
  'sceiba': '/projects/sceiba.png',
  'react-snake-game': '/projects/react-snake-game.png',
  'noimage': '/noimage.png',
};

export const profesionalProjects: ProjectsProps[] = [
  {
    id: '1',
    name: 'thedopple',
    fullName: 'The Dopple',
    url: '',
    description:
      'Dress your little monsters in the coolest styles from hundreds of the best brands, delivered to your door.',
    homepage: 'http://www.thedopple.com/',
    owner: { userName: 'oceanside' },
  },
  {
    id: '2',
    name: 'sceiba',
    fullName: 'SCEIBA',
    url: 'https://github.com/tocororo',
    description: 'Portal de Publicaciones Científicas Cubanas',
    homepage: 'https://sceiba.cu/',
    owner: { userName: 'tocororo' },
  },
];
