import Icon from '.';

export default {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    caption: {
      description: 'The text that describes the icon',
      control: { type: 'text' },
    },
    connectionID: {
      description: 'The numeric ID assigned to the Icon',
      control: { type: 'number', min: 0 },
    },
    imgSrc: {
      description: 'The file path to the icon image',
      control: { type: 'text' },
    },
  },
};
export const IconOne = {
  args: {
    caption: 'Icon One',
    connectionID: 0,
    imgSrc: '../../stories/assets/youtube.svg',
  },
};
export const IconTwo = {
  args: {
    caption: 'Icon Two',
    connectionID: 0,
    imgSrc: '../../stories/assets/discord.svg',
  },
};
