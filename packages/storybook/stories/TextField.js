import { html } from 'lit-html';

export const TextField = ({ value = 'daddy@cool.io', label = "Who's your daddy?" }) => {
  return html` <dc-text-field label=${label} value=${value}></dc-text-field> `;
};
