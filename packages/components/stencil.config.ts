import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

const frameworkTargets = [
  reactOutputTarget({
    componentCorePackage: '@nowseemee/daisy-chain-components',
    proxiesFile: '../components-react/src/components.ts',
  }),
];


export const config: Config = {
  namespace: 'daisy-chain-components',
  globalScript: 'src/global/daisy-chain.ts',
  globalStyle: 'src/global/daisy-chain.css',
  outputTargets: [
    ...frameworkTargets,
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        { src: 'fonts', warn: true },
      ],
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers,
      copy: [
        { src: 'fonts', dest: 'build', warn: true },
      ]
    },
    { type: 'dist-hydrate-script' },
    {
      type: 'docs-json',
      file: './dist/daisy-chain-components.json',
    },
  ],
};


