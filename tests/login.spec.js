import { test, expect } from './fixtures/base.js';
import users from '../test-data/users.js';

test.describe('Login', () => {
  test('Positive: should login with valid credentials', async ({ loginPage, homePage }) => {
    const { username, password } = users.validUser;

    await loginPage.goto();
    await loginPage.login(username, password);

    await homePage.assertLoggedIn();
  });

  test('Negative: should show error with wrong password', async ({ loginPage }) => {
    const { username } = users.validUser;

    await loginPage.goto();
    await loginPage.login(username, 'WrongPassword!');

    const errorText = (await loginPage.getErrorText()) ?? '';
    await expect(errorText.toLowerCase()).toContain('wrong username or password');
  });

  test('Negative: should show error with non-existing user', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login(`no_such_user_${Date.now()}`, 'SomePassword123!');

    const errorText = (await loginPage.getErrorText()) ?? '';
    await expect(errorText.toLowerCase()).toContain('wrong username or password');
  });

  test('Negative: should keep button disabled when username is empty', async ({ loginPage }) => {
    const { password } = users.validUser;

    await loginPage.goto();
    await loginPage.login('', password, { submit: false });

    await expect(loginPage.signInButton).toBeDisabled();
  });

  test('Negative: should keep button disabled when password is empty', async ({ loginPage }) => {
    const { username } = users.validUser;

    await loginPage.goto();
    await loginPage.login(username, '', { submit: false });

    await expect(loginPage.signInButton).toBeDisabled();
  });
});