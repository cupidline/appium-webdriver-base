const catalogPage = require("../../pages/android/catalog-page")
const loginPage = require("../../pages/android/login-page")

describe('My Appium Script', () => {
    it('login in saucedemo app', async () => {

        await catalogPage.burgerIcon.click();
        await catalogPage.loginMenu.click();
        await loginPage.usernameField.setValue("bob@example.com");
        await loginPage.passwordField.setValue("10203040");
        await loginPage.loginButton.click();
        await expect(catalogPage.containerHeader).toBeExisting();

    })
})


