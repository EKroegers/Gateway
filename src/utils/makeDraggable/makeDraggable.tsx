import { Props } from './makeDraggable.types';

export default function makeDraggable(
  element: Props['element'],
  id: Props['id']
): React.ReactNode {
  // Handles mouse offset on element
  var offsetX: number;
  var offsetY: number;

  function mouseUp() {
    window.removeEventListener('mousemove', elementMove, true);
  }

  function mouseDown(event: MouseEvent) {
    var element = document.getElementById(id);
    offsetY = event.clientY - Number(element?.offsetTop);
    offsetX = event.clientX - Number(element?.offsetLeft);
    window.addEventListener('mousemove', elementMove, true);
  }

  function elementMove(event: MouseEvent) {
    var draggable = document.getElementById(id);
    if (draggable) {
      draggable.style.position = 'absolute';
      draggable.style.top = event.clientY + offsetY + 'px';
      draggable.style.left = event.clientX + offsetX + 'px';
    }
  }

  document
    .getElementById(id)
    ?.removeEventListener('mousedown', mouseDown, false);
  window.removeEventListener('mouseup', mouseUp, false);

  document.getElementById(id)?.addEventListener('mousedown', mouseDown, false);
  window.addEventListener('mouseup', mouseUp, false);

  return element;
}
