import { useMemo, useCallback } from 'react';

import { ProjectsProps, useDraggable } from '@/contexts/DraggableContext';

export type newDraggableProps = {
  projectName: string;
  project: ProjectsProps;
};

const useDraggablePreviews = () => {
  const { isLoading, projects, saveDraggable, draggables } = useDraggable();

  const lastDraggableTop = useMemo(
    () =>
      draggables.length > 0 ? draggables[draggables.length - 1].top + 40 : 0,

    [draggables]
  );

  const handlePreviews = useCallback(
    (newDraggable: newDraggableProps) => {
      const dragg = draggables.find(
        (item) => item.projectName === newDraggable.projectName
      );
      if (!dragg) {
        saveDraggable({
          ...newDraggable,
          top: lastDraggableTop,
          left: 0,
        });
      }
    },
    [draggables, lastDraggableTop, saveDraggable]
  );

  return { isLoading, projects, lastDraggableTop, handlePreviews };
};

export default useDraggablePreviews;
