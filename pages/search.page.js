const { expect } = require('@playwright/test');
const baseUrl = require('../helpers/help.data').baseUrl;
const { MainPage } = require('./main.page');
const { OwerviewPage } = require('./owerview.page');

exports.SearchPage = class SearchPage extends MainPage {

    constructor(page) {
        super(page);
        //locators
        this.allCheckbox = page.locator('#all_words');
        this.issuesCheckbox = page.locator('#issues');
        this.newsCheckbox = page.locator('#news');
        this.changesetsCheckbox = page.locator('#changesets');
        this.wikiPagesCheckbox = page.locator('#wiki_pages');
        this.messagesCheckbox = page.locator('#messages');
        this.redminePluginsCheckboxes = page.locator('#redmine_plugins');
    }

    async allIssuesNewsChangesetsWikiMessagesPluginsBoxesAreChecked () {
        await this.checkboxIsChecked(this.allCheckbox);
        await this.checkboxIsChecked(this.issuesCheckbox);
        await this.checkboxIsChecked(this.newsCheckbox);
        await this.checkboxIsChecked(this.changesetsCheckbox);
        await this.checkboxIsChecked(this.wikiPagesCheckbox);
        await this.checkboxIsChecked(this.messagesCheckbox);
        await this.checkboxIsChecked(this.redminePluginsCheckboxes);
    }

    async checkboxIsChecked (checkbox) {
        if (await checkbox.isChecked()) {}
        else {
            await this.page.screenshot({path: './screenshots/Checkbox_is_not_checked.png', fullPage: true});
            await expect(checkbox).toBeChecked();
        }
    }
}