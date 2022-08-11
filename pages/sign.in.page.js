const { expect } = require('@playwright/test');
const { MainPage } = require('./main.page');
const baseUrl = require('../helpers/help.data').baseUrl;
const existingUser = require('../helpers/help.data').existingUser;
const fakeUser = require('../helpers/help.data').fakeUser;



exports.SignInPage = class SignInPage{


    constructor(page) {
        this.page
        //page url
        this.signInUrl = `${baseUrl}/login`;
        //locators
        this.loginInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginBtn = page.locator('[type="submit"]');
        this.confirmMessage = page.locator('#flash_notice');
    }

    async userLogin () {
        await this.fillLoginInput();
        await this.fillPasswordInput();
        await this.clickLoginBtn();
    }

    async confirmMessageExist () {
        if (await this.confirmMessage.isVisible()) {
            const email = new RegExp(fakeUser.email, 'g')
            await expect(this.confirmMessage, 'Confirmation email in confirm message is wrong').toHaveText(email);
        }
        else {
            await page.screenshot({ path: '../screenshots/Confirm page is not displayed after registration on the login page', fullPage: true });
            await expect(this.confirmMessage, 'Confirm message is not displayed on the login page');
        }
    }

    async goTo() {
        await this.page.goto(signInUrl);
    }

    async fillLoginInput () {
        await this.loginInput.fill(existingUser.login);
    }

    async fillPasswordInput () {
        await this.passwordInput.fill(existingUser.password);
    }

    async clickLoginBtn () {
        await this.loginBtn.hover();
        await this.loginBtn.click();
    }
}
