const counterPage = require("../../pages/flutter/counter-page")
const assert = require('assert');

describe('My Appium Script', () => {
    it('open flutter app', async () => {
        
        assert.strictEqual(await driver.getElementText(counterPage.counterTextFinder), '0');

        await driver.elementClick(counterPage.buttonFinder);
        await driver.touchAction({
            action: 'tap',
            element: { elementId: counterPage.buttonFinder }
        });

        assert.strictEqual(await driver.getElementText(counterPage.counterTextFinder), '2');

    })
})

