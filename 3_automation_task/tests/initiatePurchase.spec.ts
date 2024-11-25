import { test } from '@playwright/test';
import { HomePage } from '../pages/home_page';
import { ProductPage } from '../pages/product_page';
import { CheckoutPage } from '../pages/checkout_page';
import pages from '../test-data/pages';
import { products, shippingInformation, contactInformation } from '../test-data/purchaseDetails';

test('purchase an item', async ({ page }) => {
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);
  const checkoutPage = new CheckoutPage(page);
  const randomProduct = Math.floor(Math.random() * products.length);

  await page.goto(pages.home, { waitUntil: 'commit' } );
  await homePage.clickProductItem(products[randomProduct]);
  await homePage.clickButton('Add to bag');
  await productPage.checkShoppingBagDrawer(products[randomProduct]);
  await productPage.clickButton('Checkout');
  await checkoutPage.fillShippingInformation(shippingInformation.country, shippingInformation.address);
  await checkoutPage.fillContactInformation(contactInformation.email, contactInformation.name, contactInformation.phone, contactInformation.comment);
  await checkoutPage.clickButton('Place an order');
  await productPage.checkTextIsVisible('Thank you for your order');
  await productPage.clickButton('Got it');
});
