describe('My Appium Script', () => {
    it('Open apidemo xpath', async () => {
        // '~App' means find by accessibility ID in appium inspector
        const contentOption = await $('//android.widget.TextView[@content-desc="Content"]');
        await expect(contentOption).toBeExisting();

        // click that element
        await contentOption.click();

        //assert if click is done

        const assetsBar = await $('//android.widget.TextView[@content-desc="Assets"]');
        await expect(assetsBar).toBeExisting();
    })
})

