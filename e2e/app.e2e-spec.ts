import { VesilePage } from './app.po';

describe('vesile App', () => {
  let page: VesilePage;

  beforeEach(() => {
    page = new VesilePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
