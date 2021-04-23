import React from 'react';
import { Button } from '.';

export default {
  title: 'Component/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const SubmitButton = Template.bind({});
SubmitButton.args = {
  theme: 'submit',
  children: '다음',
};

export const QuestionMarkButton = Template.bind({});
QuestionMarkButton.args = {
  type: 'button',
  theme: 'question-mark',
  children: '?',
};

export const CardCompanyButton = Template.bind({});
CardCompanyButton.args = {
  theme: 'card-company',
  backgroundColor: '#e24141',
};

export const BackwardButton = Template.bind({});
BackwardButton.args = {
  size: 'large',
  children: (
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
      <path d="M8.30426 1L1.36476 8.78658L9.15134 15.7261" stroke="#525252" strokeWidth="1.5" />
    </svg>
  ),
};