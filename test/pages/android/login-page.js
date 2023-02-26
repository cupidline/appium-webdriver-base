const catalogPage = require("./catalog-page")

class loginPage {

    get usernameField () { return $('~Username input field'); }
    get passwordField (){ return $('~Password input field'); }
    get loginButton (){ return $('~Login button'); }

    async loginMethod(email,password){
        await catalogPage.burgerIcon.click();
        await catalogPage.loginMenu.click();
        await this.usernameField.setValue(email);
        await this.passwordField.setValue(password);
        await this.loginButton.click();
        await expect(catalogPage.containerHeader).toBeExisting();
    }
}

module.exports = new loginPage();