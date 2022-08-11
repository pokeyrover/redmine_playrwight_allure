const { expect } = require('@playwright/test');
const baseUrl = require('../helpers/help.data').baseUrl;
const fakeUser = require('../helpers/help.data').fakeUser;

exports.SignUpPage = class SignUpPage {

    constructor(page) {
        this.page = page;
        //page url
        this.signUpUrl = `${baseUrl}/account/register`;
        //locators
        this.loginInput = page.locator('#user_login');
        this.passwordInput = page.locator('#user_password');
        this.passConfirmInput = page.locator('#user_password_confirmation');
        this.firstNameInput = page.locator('#user_firstname');
        this.lastNameInput = page.locator('#user_lastname');
        this.emailInput = page.locator('#user_mail');
        this.submitBtn = page.locator('#content [type="submit"]');
    }

    async goto () {
        await this.page.goto(this.signUpUrl);
    }

    async clickSubmitBtn () {
        await this.submitBtn.hover()
        await this.submitBtn.click()
    }

    async fillRequiredFields () {
        await this.fillLoginInput();
        await this.fillPasswordInput();
        await this.fillPassConfirmInput();
        await this.fillFirstNameInput();
        await this.fillLastNameInput();
        await this.fillEmailInput();
    }

    async fillLoginInput () {
        await this.loginInput.fill(fakeUser.login);
    }

    async fillPasswordInput () {
        await this.passwordInput.fill(fakeUser.password);
    }

    async fillPassConfirmInput () {
        await this.passConfirmInput.fill(fakeUser.password);
    }

    async fillFirstNameInput () {
        await this.firstNameInput.fill(fakeUser.firstName);
    }

    async fillLastNameInput () {
        await this.lastNameInput.fill(fakeUser.lastName);
    }

    async fillEmailInput () {
        await this.emailInput.fill(fakeUser.email);
    }
}