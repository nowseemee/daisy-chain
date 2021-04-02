import '@nowseemee/daisy-chain-design-tokens/dist/daisy-chain-design-tokens.css';

import { defineCustomElements, applyPolyfills } from '@nowseemee/daisy-chain-components/loader';

applyPolyfills().then(() => {
  defineCustomElements(window);
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
