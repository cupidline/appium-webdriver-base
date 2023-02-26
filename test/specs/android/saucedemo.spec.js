describe('My Appium Script', () => {
    it('open saucedemo app', async () => {
        //catalog page
        const burgerIcon = await $('//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView');
        await burgerIcon.click();

        //login page
        const loginMenu = await $('//android.view.ViewGroup[@content-desc="menu item log in"]/android.widget.TextView');
        await loginMenu.click();

        const usernameField = await $('~Username input field');
        await usernameField.setValue("bob@example.com");

        const passwordField = await $('~Password input field');
        await passwordField.setValue("10203040");

        const loginButton = await $('~Login button');
        await loginButton.click();

        //catalog page
        const containerHeader = await $('~container header');
        await expect(containerHeader).toBeExisting();

    })
})

