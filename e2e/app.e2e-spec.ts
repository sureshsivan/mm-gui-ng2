import { MmGuiNg2Page } from './app.po';

describe('mm-gui-ng2 App', () => {
  let page: MmGuiNg2Page;

  beforeEach(() => {
    page = new MmGuiNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
