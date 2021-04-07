const { configureToMatchImageSnapshot } = require('jest-image-snapshot');

jest.setTimeout(10000);

expect.extend({
  toMatchImageSnapshot: configureToMatchImageSnapshot({
    failureThreshold: '0.00',
    failureThresholdType: 'percent',
  }),
});
