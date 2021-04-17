import { launchBrowser } from '../lib/browser'
import Login from '../lib/login';
import { urls } from '../constants/constants';
import InventoryPage from '../page-object/Home.page';
import { generateHtmlReport } from '../lib/report'

describe('First Meaningful Paint', async () => {
  const loginPage = new Login();
  const invPage = new InventoryPage();

  let page = null;

  before(async () => {
    page = await launchBrowser()
    await loginPage.login(page);
    page.goto(urls.appBaseUrl)
  });

  it('Capture FMP Score for Inventory Page', async () => {
    const FMPValue = await invPage.inventoryPage(page);
    expect(FMPValue < 2000);
  });

  after(async () => {
    await page.close();
    await generateHtmlReport();
  });

})

