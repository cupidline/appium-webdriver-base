const { byValueKey } = require('appium-flutter-finder');
const assert = require('assert');

describe('My Appium Script', () => {
    it('open flutter app', async () => {
        const counterTextFinder = byValueKey('counter');
        const buttonFinder = byValueKey('incrementButton');
        //const driver = await wdio.remote();
        
        assert.strictEqual(await driver.getElementText(counterTextFinder), '0');

        await driver.elementClick(buttonFinder);
        await driver.touchAction({
            action: 'tap',
            element: { elementId: buttonFinder }
        });

        assert.strictEqual(await driver.getElementText(counterTextFinder), '2');

    })
})

