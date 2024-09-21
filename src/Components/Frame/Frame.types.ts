import React from 'react';

export interface Props {
  // JSX components to be passed to the interior of the draggable Frame
  children: React.ReactNode;
  // Boolean determining if the frame should be draggable
  isDraggable: boolean;
}
