import { InsightPage } from './app.po';

describe('insight App', () => {
  let page: InsightPage;

  beforeEach(() => {
    page = new InsightPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
