const { test } = require('@playwright/test')
const { MainPage } = require('../pages/main.page')
const { SignInPage } = require('../pages/sign.in.page')
const { SignUpPage } = require('../pages/sign.up.page')
const { IssuesPage } = require('../pages/issues.page')
const { TicketPage } = require('../pages/ticket.page')


test("Sign in previously created account", async ({ page }) => {
    const mainPage = new MainPage(page);
    const signInPage = new SignInPage(page);

    await mainPage.goto();
    await mainPage.signInClick();

    await signInPage.userLogin();

    await mainPage.userIsLogged();
})

test("Sign up by filling in the required fields with random valid data", async ({ page }) => {
    const mainPage = new MainPage(page);
    const signUpPage = new SignUpPage(page);
    const signInPage = new SignInPage(page);

    await mainPage.goto();
    await mainPage.registerClick();

    await signUpPage.fillRequiredFields();
    await signUpPage.clickSubmitBtn();

    await signInPage.confirmMessageExist();
})

test.only("Go to a last closed patch ticket from the main page", async ({ page }) => {
    const mainPage = new MainPage(page);
    const issuesPage = new IssuesPage(page);
    const ticketPage = new TicketPage(page);

    await mainPage.goto();
    await mainPage.issuesTabClick();
    
    await issuesPage.selectTrackerFilterOpt();
    await issuesPage.selectClosedOptInStatusFilter();
    await issuesPage.selectPatchOptInTrackerFilter();
    await issuesPage.applyBtnClick();
    await issuesPage.firstIssueTitleClick();

    await ticketPage.isCorrectTicket();
})