import { selectors } from '../selectors/selectors';
import { capturePerformance, getAverage, saveFirstMeaningfulPaintResults } from '../lib/utils'
import { urls, numberOfCount } from '../constants/constants';

export default class HomePage {

    public async inventoryPage(page) {
        var firstMeaningfulPaintResults = [], count = 0;
        do {
            page.goto(urls.inventoryPageUrl);
            const startTime = new Date().getTime();
            await page.waitForFunction((selectors) => {
                const inventoryItem = document.querySelector(selectors.inventory.listItem);
                const priceItem = document.querySelector(selectors.inventory.price);

                return inventoryItem !== null || priceItem !== null

            }, {}, selectors)

            firstMeaningfulPaintResults[count++] = await capturePerformance(page, startTime);
        } while (count < numberOfCount)

        const aveargeFirstMeaningfulPaint = await getAverage(firstMeaningfulPaintResults);
        saveFirstMeaningfulPaintResults("Inventory-Page", aveargeFirstMeaningfulPaint);
        return aveargeFirstMeaningfulPaint;
    }
}