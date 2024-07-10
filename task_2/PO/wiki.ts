import { expect, type Locator, type Page } from '@playwright/test';

export class WikiPage {
  readonly page: Page;
  readonly mainContent: Locator;


  constructor(page: Page) {
    this.page = page;
    this.mainContent = page.locator('[id="mw-content-text"]');

  }

  async goto() {
    await this.page.goto('https://www.google.com/');
  }

  async checkTextInTheMainContent(text: string) {
    await expect(this.mainContent).toContainText(text)
  }

  async takeScreenShoot(browserName: string) {
    await this.page.screenshot({ path: `./screenshoots/wiki-${browserName}.png` });
  }

}