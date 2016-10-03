import { EasyjetFlightsAppPage } from './app.po';

describe('easyjet-flights-app App', function() {
  let page: EasyjetFlightsAppPage;

  beforeEach(() => {
    page = new EasyjetFlightsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
