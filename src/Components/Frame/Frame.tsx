import makeDraggable from '../../utils/makeDraggable';

import { Props } from './Frame.types';
import './Frame.css';

const Frame = ({ children, isDraggable = false, connectionID }: Props) => {
  const FRAME_ID = `Gateway-Frame-Container ID_${connectionID ?? '0'}`;

  const frameComponentBase = (
    <div data-testid="frame" id={FRAME_ID}>
      <button
        onClick={() => {
          document.getElementById(FRAME_ID)?.classList.toggle('Minimized');
        }}
        id="Gateway-Frame-Close-Button"
      />
      <div id="Gateway-Frame">{children}</div>
    </div>
  );
  return isDraggable
    ? makeDraggable(frameComponentBase, FRAME_ID)
    : frameComponentBase;
};

export default Frame;
