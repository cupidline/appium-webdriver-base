const loginPage = require("../../pages/android/login-page")

describe('My Appium Script', () => {
    it('login in saucedemo app', async () => {
        let email = "bob@example.com";
        let password = "10203040";

        await loginPage.loginMethod(email,password)

    })
})


