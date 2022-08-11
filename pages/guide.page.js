const { expect } = require('@playwright/test');
const baseUrl = require('../helpers/help.data').baseUrl;


exports.GuidePage = class GuidePage {

    /**
     * @param {import('@playwright/test').Page} page 
     */
    constructor(page) {
        this.page = page;
        //locators
        this.userGuideNaviLink = page.locator('.toc:nth-child(3) [href="#User-guide"]');
        this.roadmapGuideLink = page.locator('//*[contains(@href,"RedmineRoadmap")]');
    }

    async clickUserNavigationLink () {
        await this.userGuideNaviLink.click();
    }

    async clickRoadmapGuidelink () {
        await this.roadmapGuideLink.click();
    }
}