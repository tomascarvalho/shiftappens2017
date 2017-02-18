import { ShiftPage } from './app.po';

describe('shift App', function() {
  let page: ShiftPage;

  beforeEach(() => {
    page = new ShiftPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
