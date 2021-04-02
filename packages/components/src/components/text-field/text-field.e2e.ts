import { newE2EPage } from '@stencil/core/testing';

describe('dc-text-field', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<dc-text-field></dc-text-field>');
    const element = await page.find('dc-text-field');
    expect(element).toHaveClass('hydrated');
  });
});
