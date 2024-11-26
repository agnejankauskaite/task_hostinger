import { Page } from '@playwright/test';
import { CommonPage } from './common_page';

export class HomePage extends CommonPage {
    readonly page: Page;

    constructor(page: Page) {
        super(page);
        this.page = page;
    }

    async clickProductItem (product: string) {
        await this.page.getByRole('link', { name: product }).click();
    }
}