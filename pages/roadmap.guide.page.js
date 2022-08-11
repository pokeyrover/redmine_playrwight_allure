const { expect } = require('@playwright/test');
const baseUrl = require('../helpers/help.data').baseUrl;
const { GuidePage } = require('./guide.page');


exports.RoadmapGuidePage = class RoadmapGuidePage extends GuidePage {

    constructor(page) {
        super(page);
        //locators
        this.roadmapPageTitle = page.locator('.wiki h1');
        this.roadmapNaviTitle = page.locator('.toc [href="#Roadmap"]');
    }

    async isRoadmapGuidePage () {
        await this.isRoadmapGuideUrl();
        await this.isRoadmapNaviTitle();
        await this.isRoadmapNaviTitle();
    }

    async isRoadmapGuideUrl () {
        await expect(this.page).toHaveURL(/RedmineRoadmap/);
    }

    async isRoadmapPageTitle () {
        await expect(this.roadmapPageTitle).toHaveText(/Roadmap/);
    }

    async isRoadmapNaviTitle () {
        await expect(this.roadmapNaviTitle).toHaveText(/Roadmap/);
    }
}