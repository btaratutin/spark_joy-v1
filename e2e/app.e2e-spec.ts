import { SparkjoyPage } from './app.po';

describe('sparkjoy App', () => {
  let page: SparkjoyPage;

  beforeEach(() => {
    page = new SparkjoyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
