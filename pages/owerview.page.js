const { expect } = require('@playwright/test');
const baseUrl = require('../helpers/help.data').baseUrl;
const randomWord = require('../helpers/help.data').randomWord;
const { MainPage } = require('./main.page');


exports.OwerviewPage = class OwerviewPage extends MainPage {

    constructor(page) {
        super(page);
        //page url
        this.pageUrl = `${baseUrl}/projects/redmine`
        //locators
    }

    async goto () {
        await this.page.goto(this.pageUrl);
    }

    async searchRandomWord () {
        await super.fillSearchField(randomWord);
        await super.pressEnter(this.searchInput);
    }
}
