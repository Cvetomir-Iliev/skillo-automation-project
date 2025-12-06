
import { test } from './fixtures/auth.js';

test.describe('Logout', () => {
  test('Positive: logged-in user can logout successfully', async ({ loggedInPage, homePage }) => {
    await homePage.logout();
    await homePage.assertLoggedOut();
  });

  test('Negative: cannot access home after logout', async ({ loggedInPage, homePage }) => {
    await homePage.logout();
    await homePage.assertLoggedOut();

    // Try to go "home" again
    await homePage.homeNav.click();

    // Should still see login page
    await homePage.assertLoggedOut();
  });
});
