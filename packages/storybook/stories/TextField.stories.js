import { TextField } from './TextField';

export default {
  title: 'Components/TextField',
};

const Template = args => TextField(args);

export const Standard = Template.bind({});
Standard.args = {
  label: "Who's your daddy?",
  value: 'daddy@cool.wtf',
};
