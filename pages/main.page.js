const { expect } = require('@playwright/test');
const baseUrl = require('../helpers/help.data').baseUrl;
const existingUser = require('../helpers/help.data').existingUser;


exports.MainPage = class MainPage {
    
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        //page url
        this.url = baseUrl

        //locators
        this.loginLink = page.locator('.login');
        this.reigsterLink = page.locator('#account .register')
        this.myPageLink = page.locator('[href="/my/page"]');
        this.profileLink = page.locator('#loggedas .user');
    }

    async goto() {
        await this.page.goto(this.url);
    }

    async registerClick () {
        await this.reigsterLink.hover();
        await this.reigsterLink.click();
    }

    async signInClick() {
        await this.loginLink.hover();
        await this.loginLink.click();
    }

    async userIsLogged() {
        
        if (await this.myPageLink.isVisible() && await this.profileLink.isVisible()) {
            await expect(this.profileLink).toHaveText(existingUser.login);
        }
        else {
            await page.screenshot({ path: '../screenshots/"My page" or/and profile link(s) is not visible after user login.png', fullPage: true });
            await expect(this.myPageLink, '"My page" link is not displayed').toBeVisible();
            await expect(this.profileLink, "Profile link is not displayed").toBeVisible();
        }
    }
}