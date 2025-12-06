// pages/NewPostPage.js
import { expect } from '@playwright/test';

export class NewPostPage {
  constructor(page) {
    this.page = page;

    this.newPostNavLink = page.locator('#nav-link-new-post');
    this.captionInput = page.locator('input[formcontrolname="caption"]');
    this.imageInput = page.locator('input[formcontrolname="coverUrl"].file');
    this.createPostButton = page.locator('#create-post');
  }

  async goto() {
    await this.newPostNavLink.click();
    await this.page.waitForURL('**/posts/create');
    await expect(this.captionInput).toBeVisible();
  }

  async createPost({ caption = '', imageRelativePath } = {}) {
    await this.captionInput.fill(caption ?? '');

    if (imageRelativePath) {
      await this.imageInput.setInputFiles(imageRelativePath);
    }

    await this.createPostButton.click();
  }

  async expectError(keyword) {
    const lower = keyword.toLowerCase();

    // 🔹 Special case: "image" error → check the toast, not the label
    if (lower === 'image') {
      const toast = this.page.getByRole('alertdialog', {
        name: /please upload an image!/i,
      });
      await expect(toast).toBeVisible();
      return;
    }

    // Default: fall back to generic text search (works for "caption")
    const locator = this.page.getByText(new RegExp(keyword, 'i'));
    await expect(locator).toBeVisible();
  }
}
