class BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // Common navigation and UI elements
    this.loginNav = page.locator('#nav-link-login');
    this.profileNav = page.locator('#nav-link-profile');
    this.homeNav = page.locator('#nav-link-home');
    this.logoutIcon = page.locator('.fas.fa-sign-out-alt.fa-lg');
    this.searchBar = page.locator('#search-bar');
  }

  async goto(path = '/') {
    await this.page.goto(path);
  }

  async waitForUrl(pattern) {
    await this.page.waitForURL(pattern);
  }

  async assertUserAreaVisible() {
    await this.searchBar.waitFor({ state: 'visible' });
    await this.profileNav.waitFor({ state: 'visible' });
    await this.homeNav.waitFor({ state: 'visible' });
  }

  async logout() {
    await this.logoutIcon.click();
  }
}

// ✅ Support BOTH import styles:
//   import BasePage from './BasePage.js';
//   import { BasePage } from './BasePage.js';
export default BasePage;
export { BasePage };