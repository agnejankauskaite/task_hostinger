import { Page, expect } from '@playwright/test';

export class CommonPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async clickButton (buttonText: string) {
        await this.page.getByRole('button', { name: buttonText }).click();
    }

    async checkTextIsVisible (text: string) {
        await expect(this.page.getByText(text)).toBeVisible();
    }
}