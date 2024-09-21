import { useState } from 'react';

import makeDraggable from '../../utils/makeDraggable';

import { Props } from './Frame.types';
import './Frame.css';

const Frame = ({ children, isDraggable }: Props) => {
  const [minimized, setMinimized] = useState(false);
  const frameComponentBase = (
    <div
      data-testid="frame"
      id={`Gateway-Frame-Container ${minimized ? 'Minimized' : ''}`}
    >
      <button
        onClick={() => {
          setMinimized(true);
        }}
        id="Gateway-Frame-Close-Button"
      />
      <div id="Gateway-Frame">{children}</div>
    </div>
  );
  if (isDraggable) {
    return makeDraggable(frameComponentBase, 'Gateway-Frame-Container');
  } else {
    return frameComponentBase;
  }
};

export default Frame;
