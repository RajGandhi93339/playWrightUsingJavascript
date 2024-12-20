import { test, expect } from '@playwright/test';


test.beforeEach('Login', async ({ page }) => {
  await page.goto('https://roughauction.testsjit.in/#/login');
  await page.getByText('Login with Username &').click();
  await page.getByPlaceholder('Enter Username or Email').click();
  await page.getByPlaceholder('Enter Username or Email').fill('admina');
  await page.getByPlaceholder('Enter Username or Email').press('Enter');
  await page.getByPlaceholder('Enter Username or Email').press('Tab');
  await page.getByPlaceholder('Enter Password').fill('Test@123');
  const login = await page.getByRole('button', { name: 'Log In' }).click();
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'Add BID' }).click();
  await page.getByRole('row', { name: '4 8540 MAKEABLE TOP\'S ( D' }).getByRole('button').first().click();
  await page.getByPlaceholder('Add Price').click();
  await page.getByPlaceholder('Add Price').fill('50');
  await page.getByRole('row', { name: '4 8540 MAKEABLE TOP\'S ( D' }).getByRole('button').nth(1).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('button', { name: ' My Bid' }).click();
  await page.getByRole('button', { name: ' Edit Bid' }).first().click();
  await page.getByRole('button', { name: ' Edit Bid' }).first().click();
  await page.getByRole('button', { name: ' Edit Bid' }).nth(1).click();
  await page.getByPlaceholder('Add Price').click();
  await page.getByPlaceholder('Add Price').fill('75');
  await page.getByRole('button', { name: '' }).nth(2).click();
  await page.getByRole('button', { name: 'Yes' }).click();
})
