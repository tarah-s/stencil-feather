import { newSpecPage } from '@stencil/core/testing';
import { FIcon } from './f-icon';

describe('f-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FIcon],
      html: `<f-icon></f-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <f-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </f-icon>
    `);
  });
});
