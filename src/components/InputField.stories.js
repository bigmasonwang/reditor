// src/components/InputField.stories.js
import InputField from './InputField';

export default {
  title: 'Example/InputField',
  component: InputField,
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    type: { control: 'text' },
    name: { control: 'text' },
    placeholder: { control: 'text' },
    required: { control: 'boolean' },
  },
};

export const Text = {
  args: {
    id: 'example-text-input',
    type: 'text',
    name: 'example-text',
    placeholder: 'Enter text',
    required: false,
  },
};

export const Number = {
  args: {
    id: 'example-number-input',
    type: 'number',
    name: 'example-number',
    placeholder: 'Enter a number',
    required: false,
  },
};
