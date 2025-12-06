
import { test as base, expect } from '@playwright/test';

import LoginPage from '../../pages/LoginPage.js';
import { HomePage } from '../../pages/HomePage.js';
import { NewPostPage } from '../../pages/NewPostPage.js';
import users from '../../test-data/users.js';

const test = base.extend({
  // Reuse the same page objects everywhere
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  newPostPage: async ({ page }, use) => {
    await use(new NewPostPage(page));
  },

  // 🔐 Logged-in fixture used by logout.spec.js and newPost.spec.js
  loggedInPage: async ({ page, loginPage, homePage }, use) => {
    const { username, password } = users.validUser;

    
    await loginPage.goto();                     // go to /users/login (or whatever your LoginPage does)
    await loginPage.login(username, password);  // fill username + password + submit

    await homePage.assertUserLoggedIn?.();
    
    await use(page);
  },
});

export { test, expect };
