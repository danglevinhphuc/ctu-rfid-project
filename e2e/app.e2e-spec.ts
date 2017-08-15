import { RfidCtuAppPage } from './app.po';

describe('rfid-ctu-app App', () => {
  let page: RfidCtuAppPage;

  beforeEach(() => {
    page = new RfidCtuAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
