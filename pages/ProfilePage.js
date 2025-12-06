import BasePage from './BasePage.js';

export default class ProfilePage extends BasePage {
  constructor(page) {
    super(page);
    this.noPostsText = page.getByText('No posts here', { exact: true });
    this.postImageThumb = page.locator('img[src="https://i.imgur.com/XIkPkVt.jpeg"]');
  }

  async gotoFromNav() {
    await this.profileNav.click();
  }

  async assertHasPosts() {
    await this.noPostsText.waitFor({ state: 'hidden' }).catch(async () => {
      await this.noPostsText.waitFor({ state: 'detached' });
    });
  }

  async assertPostThumbnailVisible() {
    await this.postImageThumb.first().waitFor({ state: 'visible' });
  }
}
