import { expect, Locator, Page } from '@playwright/test';
import { CommonPage } from './common_page';

export class ProductPage extends CommonPage {
    readonly page: Page;

    constructor(page: Page) {
        super(page);
        this.page = page;
    }

    async checkShoppingBagDrawer (productTitle: string) {
        await this.checkTextIsVisible('Shopping bag');
        await expect(this.page.getByRole('complementary').getByText(productTitle)).toBeVisible();
    }
}