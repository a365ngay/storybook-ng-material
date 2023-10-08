import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { InputComponent } from 'src/app/input/input.component';

export default {
  title: 'Angular Material/Input',
  component: InputComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [InputComponent],
    }),
  ],
  argTypes: {
  },
} as Meta;

const Template: Story<InputComponent> = (args: InputComponent) => ({
  props: args,
});

export const Text = Template.bind({});
Text.args = {
  type: 'text',
  value: "Test value",
  placeholder: 'View Text',
  style: {
    color: 'red',
    backgroundColor: '#fff',
    fontSize: '12px',
    fontWeight: '100',
    height: '30px',
    width: '100px',
    borderColor: 'red',
    borderRadius: '3px',
    borderWidth: '1px'
  }
};
