import { TestAppTestPage } from './app.po';

describe('test-app-test App', function() {
  let page: TestAppTestPage;

  beforeEach(() => {
    page = new TestAppTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
