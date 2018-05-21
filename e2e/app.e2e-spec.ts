import { PersonalTwoAngularPage } from './app.po';

describe('personal-two-angular App', () => {
  let page: PersonalTwoAngularPage;

  beforeEach(() => {
    page = new PersonalTwoAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
