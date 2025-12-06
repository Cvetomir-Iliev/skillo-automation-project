import { test as base, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage.js';
import LoginPage from '../../pages/LoginPage.js';
import RegistrationPage from '../../pages/RegistrationPage.js';
import { NewPostPage } from '../../pages/NewPostPage.js';
import ProfilePage from '../../pages/ProfilePage.js';

export const test = base.extend({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  registrationPage: async ({ page }, use) => {
    await use(new RegistrationPage(page));
  },
  newPostPage: async ({ page }, use) => {
    await use(new NewPostPage(page));
  },
  profilePage: async ({ page }, use) => {
    await use(new ProfilePage(page));
  },
});

export { expect };
