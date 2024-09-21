import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Frame from '.';

describe('Frame', () => {
  it('renders children', () => {
    const children = 'Test Children';
    const { getByText } = render(
      <Frame children={children} isDraggable connectionID={1} />,
    );
    const childrenElement = getByText(children);
    expect(childrenElement).toBeInTheDocument();
  });
  it('renders the correct base styling', () => {
    const children = 'Test Children';
    const { getByTestId } = render(
      <Frame children={children} isDraggable connectionID={2} />,
    );
    const container = getByTestId('frame');
    expect(container).toHaveStyle(`
      cursor: move;
    `);
  });
});
