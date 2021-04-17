import { urls, user } from '../constants/constants';
import { selectors } from '../selectors/selectors';

export default class Login {
    public async login(page) {
        await page.waitForSelector(selectors.Login.loginButton);

        await page.type(selectors.Login.username, user.username);
        await page.type(selectors.Login.password, user.password);

        await page.click(selectors.Login.loginButton);
        return page;
    }
}