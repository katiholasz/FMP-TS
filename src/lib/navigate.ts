import { urls } from '../constants/constants';
import { selectors } from '../selectors/selectors';

export default class GoTo {
  public async navigate(page) {
    await page.waitForSelector(selectors.Login.loginButton);
    await page.waitForNavigation(urls.appBaseUrl);
    return page;
  }
}