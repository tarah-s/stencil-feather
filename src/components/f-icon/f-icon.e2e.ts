import { newE2EPage } from '@stencil/core/testing';

describe('f-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<f-icon></f-icon>');

    const element = await page.find('f-icon');
    expect(element).toHaveClass('hydrated');
  });
});
