import '@daisy-chain/components/dist/daisy-chain-components/daisy-chain-components.css';

import { defineCustomElements, applyPolyfills } from '@daisy-chain/components/loader';

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
