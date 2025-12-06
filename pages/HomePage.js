import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    super(page);

    this.loginNav = page.locator("#nav-link-login");
    this.profileNav = page.locator("#nav-link-profile");
    this.logoutIcon = page.locator(".fas.fa-sign-out-alt.fa-lg");

    // login form
    this.usernameInput = page.locator('input[formcontrolname="username"]');
    this.passwordInput = page.locator('input[formcontrolname="password"]');
    this.signInButton = page.locator('button[type="submit"]');
  }

  async goto() {
    await this.page.goto("/");
  }

  async login(username, password) {
    await this.loginNav.click();
    await this.usernameInput.waitFor({ state: "visible" });
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }

  async assertLoggedIn() {
    await expect(this.logoutIcon).toBeVisible();
  }

  async logout() {
    await this.logoutIcon.click();
    // ✅ after logout, we just rely on nav state
    await this.assertLoggedOut();
  }

  async assertLoggedOut() {
    await expect(this.loginNav).toBeVisible();
    await expect(this.profileNav).toBeHidden();
  }
}
