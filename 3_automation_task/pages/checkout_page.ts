import { expect, Locator, Page } from '@playwright/test';
import { CommonPage } from './common_page';

export class CheckoutPage extends CommonPage {
    readonly page: Page;
    readonly shippingDestination: Locator;
    readonly shippingAddress: Locator;
    readonly emailInput: Locator;
    readonly fullNameInput: Locator;
    readonly phoneNumber: Locator;
    readonly commentInput: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.shippingDestination = page.locator('#destination');
        this.shippingAddress = page.getByPlaceholder('Choose address');
        this.emailInput = page.getByRole('textbox', { name: 'Email' });
        this.fullNameInput = page.getByRole('textbox', { name: 'Your full name' });
        this.phoneNumber = page.getByRole('textbox', { name: 'Your phone number' });
        this.commentInput = page.getByRole('textbox', { name: 'Your comment' });
    }

    async fillShippingInformation (country: string, address: string) {
        await this.shippingDestination.click();
        await this.page.getByRole('option', { name: country }).click();
        await this.shippingAddress.click();
        await this.page.getByText(address).click();
        await this.clickButton('Continue');
    }

    async fillContactInformation (email: string, fullName: string, phoneNumber: string, comment: string) {
        await this.emailInput.fill(email);
        await this.fullNameInput.fill(fullName);
        await this.phoneNumber.fill(phoneNumber);
        await this.commentInput.fill(comment);
        await this.clickButton('Continue');
    }
}