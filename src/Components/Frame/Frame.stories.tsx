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
    isDraggable: {
      description: 'If the Frame is draggable or not',
      control: { type: 'boolean' },
    },
    connectionID: {
      description: 'The numeric ID assigned to the Frame',
      control: { type: 'number', min: 0 },
    },
  },
};
export const FrameOne = {
  args: {
    children: 'These are the Frame One children',
    isDraggable: true,
    connectionID: 0,
  },
};
export const FrameTwo = {
  args: {
    children: 'These are the Frame Two children',
    isDraggable: false,
    connectionID: 0,
  },
};
