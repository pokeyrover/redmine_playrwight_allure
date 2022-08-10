const { test } = require('@playwright/test')
const { MainPage } = require('../pages/main.page')
const { SignInPage } = require('../pages/sign.in.page')

test("Sign in previously created account", async ({ page }) => {
    const mainPage = new MainPage(page);
    const signInPage = new SignInPage(page);

    await mainPage.goto();
    await mainPage.signInClick();

    await signInPage.userLogin();

    await mainPage.userIsLogged()
})