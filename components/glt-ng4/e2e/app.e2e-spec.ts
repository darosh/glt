import { GltAppPage } from './app.po';

describe('glt-app App', () => {
  let page: GltAppPage;

  beforeEach(() => {
    page = new GltAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
