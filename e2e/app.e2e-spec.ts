import { NgViewerPage } from './app.po';

describe('ng-viewer App', () => {
  let page: NgViewerPage;

  beforeEach(() => {
    page = new NgViewerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
