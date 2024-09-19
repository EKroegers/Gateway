import { useState } from 'react';

import makeDraggable from '../../utils/makeDraggable';

import { Props } from './Frame.types';
import './Frame.css';

const Frame = ({ children }: Props) => {
  const [minimized, setMinimized] = useState(false);
  return makeDraggable(
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
    </div>,
    'Gateway-Frame-Container'
  );
};

export default Frame;
