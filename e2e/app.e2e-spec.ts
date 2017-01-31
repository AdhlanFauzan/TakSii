import { TakSiiPage } from './app.po';

describe('tak-sii App', function() {
  let page: TakSiiPage;

  beforeEach(() => {
    page = new TakSiiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
