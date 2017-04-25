import { QWikiPage } from './app.po';

describe('q-wiki App', () => {
  let page: QWikiPage;

  beforeEach(() => {
    page = new QWikiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
