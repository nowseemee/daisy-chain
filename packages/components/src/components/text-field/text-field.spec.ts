import { newSpecPage } from '@stencil/core/testing';
import { TextField } from './text-field';

describe('dc-text-field', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [TextField],
      html: '<dc-text-field></dc-text-field>',
    });
    expect(root).toMatchInlineSnapshot(`
      <dc-text-field>
        <mock:shadow-root>
          <label class="dc-text-field">
            <dc-icon-action-play></dc-icon-action-play>
            <input id="fname" name="fname" type="text">
          </label>
        </mock:shadow-root>
      </dc-text-field>
    `);
  });
});
