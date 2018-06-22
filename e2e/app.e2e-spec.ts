import { Pictime.TestWsFrontPage } from './app.po';

describe('pictime.test-ws-front App', () => {
  let page: Pictime.TestWsFrontPage;

  beforeEach(() => {
    page = new Pictime.TestWsFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
