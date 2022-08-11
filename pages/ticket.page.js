const { expect } = require('@playwright/test');
const baseUrl = require('../helpers/help.data').baseUrl;


exports.TicketPage = class TickedPage {

    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page) {
        this.page = page;
        //locators
        this.ticketID = page.locator('#content h2');
        this.tickedStatus = page.locator('tbody :nth-child(1) td.status');
    }

    async isCorrectTicket () {
        await this.isTicketPageUrl();
        await this.isPatchType();
        await this.isClosedStatus();

    }

    async isTicketPageUrl () {
        await expect(this.page).toHaveURL(/issues\//);
    }

    async isCorrectType (type) {
        const expectedType = new RegExp(type, 'i');
        await expect(this.ticketID).toHaveText(expectedType);
    }

    async isPatchType () {
        await this.isCorrectType('Patch')
    }

    async isCorrectStatus (status) {
        const expectedStatus = new RegExp(status, 'i');
        await expect(this.tickedStatus).toHaveText(expectedStatus);
    }

    async isClosedStatus () {
        await this.isCorrectStatus('Closed')
    }
}