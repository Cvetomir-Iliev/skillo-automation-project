import BasePage from './BasePage.js';

export default class LoginPage extends BasePage {
  constructor(page) {
    super(page);

    this.usernameInput = page.locator('#defaultLoginFormUsername');
    this.passwordInput = page.locator('#defaultLoginFormPassword');
    this.signInButton = page.locator('#sign-in-button');

    // Use the real app text:
    this.errorMessage = page.getByText('Wrong username or password', { exact: false });
  }

  async goto() {
    await super.goto('/');
    await this.loginNav.click();
  }

  async login(username, password, { submit = true } = {}) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);

    if (submit) {
      await this.signInButton.click();
    }
  }

  async getErrorText() {
    const locator = this.errorMessage.first();
    await locator.waitFor({ state: 'visible', timeout: 5000 });
    return locator.textContent();
  }
}