import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Icon from '.';

describe('Icon', () => {
  it('renders icon', () => {
    const { getByTestId } = render(
      <Icon
        caption={'Icon One'}
        connectionID={1}
        imgSrc={'../../stories/assets/youtube.svg'}
      />
    );
    const container = getByTestId('gateway-icon');
    expect(container).toBeInTheDocument();
  });
  it('renders the correct base styling', () => {
    const { getByTestId } = render(
      <Icon
        caption={'Icon Two'}
        connectionID={2}
        imgSrc={'../../stories/assets/discord.svg'}
      />
    );
    const container = getByTestId('gateway-icon');
    expect(container).toHaveStyle(`
      cursor: move;
    `);
  });
});
