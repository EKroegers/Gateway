import { useState } from 'react';

import makeDraggable from '../../utils/makeDraggable';

import { Props } from './Frame.types';
import './Frame.css';

const Frame = ({ children, isDraggable = false, connectionID }: Props) => {
  const [minimized, setMinimized] = useState(false);
  const frameComponentBase = (
    <div
      data-testid="frame"
      id={`Gateway-Frame-Container ID_${connectionID ?? '0'}`}
      className={minimized ? 'Minimized' : ''}
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
  return isDraggable
    ? makeDraggable(frameComponentBase, 'Gateway-Frame-Container')
    : frameComponentBase;
};

export default Frame;
