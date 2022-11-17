import {
  createContext,
  ReactNode,
  useState,
  useContext,
  useEffect,
} from 'react';

export type DraggProps = {
  projectName: string;
  project: ProjectsProps;
  top: number;
  left: number;
};

export type ProjectsProps = {
  id: string;
  name: string;
  fullName: string;
  url: string;
  description: string;
  owner: {
    id: string;
    avatar_url: string;
  };
};

interface DraggableContextProps {
  draggables: DraggProps[];
  saveDraggable: (draggable: DraggProps) => void;
  closeDragable: (draggable: DraggProps[]) => void;
  projects: ProjectsProps[];
  isLoading: boolean;
}

export const initialDraggable: DraggProps[] = [];

export const DraggableContext = createContext<DraggableContextProps>({
  draggables: initialDraggable,
  // eslint-disable-next-line
  saveDraggable: (Draggable: DraggProps) => {},
  closeDragable: (Draggable: DraggProps[]) => {},
  projects: [],
  isLoading: false,
});

type DraggableProviderProps = {
  children: ReactNode;
};

const DraggableProvider = ({ children }: DraggableProviderProps) => {
  const [draggables, setDraggable] = useState<DraggProps[]>(initialDraggable);
  const [projects, setProjects] = useState<ProjectsProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const fetchProjects = () => {
      setLoading(true);
      fetch('https://api.github.com/users/acm-97/repos', { signal })
        .then((res) => res.json())
        .then((repos) => {
          const result = repos.map((item: any) => ({
            id: item.id,
            name: item.name,
            fullName: item.full_name,
            url: item.html_url,
            description: item.description,
            owner: {
              id: item.owner.id,
              avatar_url: item.owner.avatar_url,
            },
          }));

          setProjects(result);
          setLoading(false);
        })
        .catch((err) => {
          if (err.name === 'AbortError') {
            setLoading(true);
            console.log('previus fetch canceled');
          } else console.log(err);
        });
    };
    fetchProjects();

    return () => {
      controller.abort();
    };
  }, []);

  const saveDraggable = (newDraggable: DraggProps) =>
    setDraggable((prev) => [...prev, newDraggable]);

  const closeDragable = (newDraggables: DraggProps[]) =>
    setDraggable(newDraggables);

  return (
    <DraggableContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        draggables,
        saveDraggable,
        closeDragable,
        projects,
        isLoading: loading,
      }}
    >
      {children}
    </DraggableContext.Provider>
  );
};
export const useDraggable = () => useContext(DraggableContext);

export default DraggableProvider;
