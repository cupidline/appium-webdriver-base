const loginPage = require("../../pages/android/login-page")

describe('saucedemo with action defined', () => {
    it('login in saucedemo app', async () => {
        let email = "bob@example.com";
        let password = "10203040";

        await loginPage.loginMethod(email,password)

    })
})


