import Frame from '.';

export default {
  title: 'Components/Frame',
  component: Frame,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'The child elements of the Frame',
      control: {
        type: 'text',
      },
    },
  },
};
export const FrameOne = {
  args: {
    children: 'These are the Frame One children',
  },
};
export const FrameTwo = {
  args: {
    children: 'These are the Frame Two children',
  },
};
