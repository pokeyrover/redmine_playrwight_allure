const { test } = require('@playwright/test');
const { MainPage } = require('../pages/main.page');
const { SignInPage } = require('../pages/sign.in.page');
const { SignUpPage } = require('../pages/sign.up.page');
const { IssuesPage } = require('../pages/issues.page');
const { TicketPage } = require('../pages/ticket.page');
const { GuidePage } = require('../pages/guide.page');
const { RoadmapGuidePage } = require('../pages/roadmap.guide.page');
const { OwerviewPage } = require('../pages/owerview.page');
const { SearchPage } = require('../pages/search.page');


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

test("Go to a last closed patch ticket from the main page", async ({ page }) => {
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

test("Go to roadmap guide page from the main page", async ({ page }) => {
    const mainPage = new MainPage(page);
    const guidePage = new GuidePage(page);
    const roadmapGuidePage = new RoadmapGuidePage(page);

    await mainPage.goto();
    await mainPage.documentationNaviLinkClick();
    await mainPage.userGuideDocumentationLinkClick();

    await guidePage.clickUserNavigationLink();
    await guidePage.clickRoadmapGuidelink();

    await roadmapGuidePage.isRoadmapGuidePage();
})

test("Search random data from the overview page", async ({ page }) => {
    const owerviewPage = new OwerviewPage(page);
    const searchPage = new SearchPage(page);

    await owerviewPage.goto();
    await owerviewPage.searchRandomWord();

    await searchPage.allIssuesNewsChangesetsWikiMessagesPluginsBoxesAreChecked();
})
