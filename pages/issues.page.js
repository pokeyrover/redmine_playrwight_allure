const { expect } = require('@playwright/test');
const baseUrl = require('../helpers/help.data').baseUrl;


exports.IssuesPage = class IssuesPage {

    /**
     * @param {import('@playwright/test').Page} page
     */
     constructor(page) {
        this.page = page;
        //page url
        this.url = `${baseUrl}/projects/redmine/issues`

        //locators
        this.filterDropdown = page.locator('#add_filter_select');
        this.filterTrackerOpt = "tracker_id";
        this.filterClosedOpt = "closed_on";

        this.statusFilterDropdown = page.locator('#operators_status_id');
        this.statusFilterClosedOpt = "c";

        this.trackerFilterDropdown = page.locator('#values_tracker_id_1');
        this.trackerFilterPatchOpt = { label: "Patch" };

        this.applyBtn = page.locator('.buttons .icon-checked');
    
        this.issueSubjects = page.locator('.autoscroll .subject [href]');
    }

    async applyBtnClick () {
        await this.applyBtn.hover();
        await this.applyBtn.click();
    }

    async selectTrackerFilterOpt () {
        const dropdown = this.filterDropdown;
        await dropdown.selectOption(this.filterTrackerOpt);
    }

    async selectClosedFilterOpt () {
        const dropdown = this.filterDropdown;
        await dropdown.selectOption(this.filterClosedOpt);
    }

    async selectClosedOptInStatusFilter () {
        const dropdown = this.statusFilterDropdown;
        await dropdown.selectOption(this.statusFilterClosedOpt);
    }

    async selectPatchOptInTrackerFilter () {
        const dropdown = this.trackerFilterDropdown;
        await dropdown.selectOption(this.trackerFilterPatchOpt);
    }

    async filterSelectClick () {
        await this.filterSelect.hover();
        await this.filterSelect.click();
    }

    async firstIssueTitleClick () {
        const firstIssue = await this.getIssueFromIssueList();
        await firstIssue.hover();
        await firstIssue.click();
    }

    async getIssueFromIssueList (num=0) {
        return this.issueSubjects.nth(num)
    }
}