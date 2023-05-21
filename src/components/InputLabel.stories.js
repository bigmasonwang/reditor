// src/components/InputLabel.stories.js
import InputLabel from './InputLabel';

export default {
  title: 'Example/InputLabel',
  component: InputLabel,
  tags: ['autodocs'],
  argTypes: {
    htmlFor: { control: 'text' },
  },
};

export const Default = {
  args: {
    htmlFor: 'example-input',
    children: 'Example Label',
  },
};
