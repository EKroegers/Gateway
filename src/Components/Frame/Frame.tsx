import makeDraggable from '../../utils/makeDraggable';

import { Props } from './Frame.types';
import './Frame.css';

const Frame = ({ children, isDraggable = false, connectionID }: Props) => {
  const frameComponentBase = (
    <div
      data-testid="frame"
      id={`Gateway-Frame-Container ID_${connectionID ?? '0'}`}
    >
      <button
        onClick={() => {
          document
            .getElementById(`Gateway-Frame-Container ID_${connectionID ?? '0'}`)
            ?.classList.toggle('Minimized');
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
