const { expect } = require('@playwright/test');
const { MainPage } = require('./main.page');
const baseUrl = require('../helpers/help.data').baseUrl;
const existingUser = require('../helpers/help.data').existingUser;



exports.SignInPage = class SignInPage{


    constructor(page) {
        this.page
        //page url
        this.signInUrl = `${baseUrl}/login`
        //locators
        this.loginInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginBtn = page.locator('[type="submit"]')
    }

    async userLogin () {
        await this.fillLoginInput()
        await this.fillPasswordInput()
        await this.clickLoginBtn()
    }


    async goTo() {
        await this.page.goto(signInUrl)
    }

    async fillLoginInput () {
        await this.loginInput.fill(existingUser.login)
    }

    async fillPasswordInput () {
        await this.passwordInput.fill(existingUser.password)
    }

    async clickLoginBtn () {
        await this.loginBtn.hover()
        await this.loginBtn.click()
    }
}
