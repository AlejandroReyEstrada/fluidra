import { createBdd } from 'playwright-bdd';
import { GooglePage } from '../PO/google';
import { WikiPage } from '../PO/wiki';
const { Given, When, Then } = createBdd();

let google: GooglePage;
let wiki: WikiPage;

Given('A unlogged user search {string} in Google', async ({ page }, searchTerm) => {
  google = new GooglePage(page);
  wiki = new WikiPage(page);

  await google.goto();
  await google.refuseAll();
  await google.search(searchTerm);
});

When('The user select {string} to read more', async ({ }, mainSite) => {
  await google.readMoreIn(mainSite);
});

Then('The user checks the year when the first automated process was done', async ({ browserName }) => {
  await wiki.checkTextInTheMainContent('In Ptolemaic Egypt, about 270 BC, Ctesibius described a float regulator for a water clock');
  await wiki.takeScreenShoot(browserName);
});
