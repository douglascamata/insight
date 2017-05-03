import { InsightPage } from './app.po';

describe('insight App', () => {
  let page: InsightPage;

  beforeEach(() => {
    page = new InsightPage();
  });

  it('should display message saying the name of the app', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Insight - RSS Reader');
  });
});
