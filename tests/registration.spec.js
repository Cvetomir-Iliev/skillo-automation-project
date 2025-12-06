import { test, expect } from './fixtures/base.js';
import users from '../test-data/users.js';

const DEFAULT_BIRTH_DATE = '95/01/01'; // 

function uniqueUser() {
  const suffix = Date.now().toString().slice(-5); // 5 digits

  return {
    username: `user${suffix}`,
    email: `u${suffix}@${users.newUserTemplate.emailDomain}`,
    birthDate: DEFAULT_BIRTH_DATE,
    password: users.newUserTemplate.password, 
  };
}

test.describe('Registration', () => {
  test('Positive: should register a new user with valid data', async ({ registrationPage, homePage }) => {
    const user = uniqueUser();

    await registrationPage.goto();
    await registrationPage.fillForm({
      username: user.username,
      email: user.email,
      birthDate: user.birthDate,
      password: user.password,
      confirmPassword: user.password,
    });

    await expect(registrationPage.signInButton).toBeEnabled();
    await registrationPage.signInButton.click();

    await homePage.assertLoggedIn();
  });

  for (const c of users.invalidRegistrationUsers) {
    test(`Negative: registration should fail when ${c.description}`, async ({ registrationPage }) => {
      await registrationPage.goto();
      await registrationPage.fillForm({
        username: c.username,
        email: c.email,
        birthDate: DEFAULT_BIRTH_DATE,
        password: c.password,
        confirmPassword: c.confirmPassword,
      });

      await expect(registrationPage.signInButton).toBeDisabled();
    });
  }
});