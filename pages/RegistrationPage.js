import BasePage from './BasePage.js';

export default class RegistrationPage extends BasePage {
  constructor(page) {
    super(page);
    this.usernameInput = page.locator('input[name="username"]');
    this.emailInput = page.locator('input[type="email"]');
    this.birthDateInput = page.locator('input[placeholder="Birth date"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.confirmPasswordInput = page.locator('input[name="verify-password"]');
    this.publicInfoInput = page.locator('[name="pulic-info"]');
    this.signInButton = page.locator('#sign-in-button');
    this.errorMessage = page.locator('.alert-danger, .error-message');
  }

  async goto() {
    await super.goto('/users/register');
  }


  async fillForm({
    username,
    email,
    birthDate,
    password,
    confirmPassword,
    publicInfo,
  }) {
    if (username !== undefined) {
      await this.usernameInput.fill(username);
    }

    if (email !== undefined) {
      await this.emailInput.fill(email);
    }

    if (birthDate !== undefined) {
      let value = birthDate;

     
      const match = /^(\d{2})\/(\d{2})\/(\d{2})$/.exec(birthDate);
      if (match) {
        const [, yy, mm, dd] = match;
        const fullYear = `19${yy}`; 
        value = `${fullYear}-${mm}-${dd}`;
      }

      await this.birthDateInput.fill(value);
    }

    if (password !== undefined) {
      await this.passwordInput.fill(password);
    }

    if (confirmPassword !== undefined) {
      await this.confirmPasswordInput.fill(confirmPassword);
    }

  
    const text = publicInfo ?? 'QA public info';
    await this.publicInfoInput.fill(text);
  }

  async getErrorText() {
    return this.errorMessage.first().textContent();
  }
}