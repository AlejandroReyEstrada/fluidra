import { expect, type Locator, type Page } from '@playwright/test';

export class GooglePage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly genericInput: Locator;
  readonly refuseButton: Locator;
  readonly searchResult: Locator;



  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.getByLabel('Buscar', { exact: true });
    this.genericInput = page.locator('textarea').locator('visible=true');
    this.refuseButton = page.getByText('Rechazar todo', { exact: true });
  }

  async goto() {
    await this.page.goto('https://www.google.com/');
  }

  async readMoreIn(mainSite: string) {
    await this.page.getByText(mainSite, { exact: true }).locator('visible=true').click();
  }

  async refuseAll() {
    await this.refuseButton.click();
  }

  async search(textToSearch: string) {
    await this.genericInput.fill(textToSearch);
    await expect(this.genericInput).toHaveValue(textToSearch)
    await this.genericInput.press('Enter');
  }
}