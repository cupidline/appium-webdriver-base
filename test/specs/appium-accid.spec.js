describe('My Appium Script', () => {
    it('Open apidemo accessibility ID', async () => {
        // '~App' means find by accessibility ID in appium inspector
        const appOption = await $('~App');

        // click that element
        await appOption.click();

        //assert if click is done

        const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting();
    })
})

