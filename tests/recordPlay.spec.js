// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//     //Jump to the site
//   await page.goto('http://27.109.25.22/site/#/login');

//   //enter user name
//   await page.getByRole('textbox', { name: 'Enter Username or E-mail' }).click();
//   await page.getByRole('textbox', { name: 'Enter Username or E-mail' }).fill('raaj');

//   //enter password
//   await page.getByPlaceholder('Enter password', { exact: true }).click();
//   await page.getByPlaceholder('Enter password', { exact: true }).fill('Test@2023');

//   //show password
//   await page.getByRole('form').locator('i').click();

//   //remember me
//   await page.getByRole('checkbox', { name: 'Remember me' }).check();

//   //login button click
//   await page.getByRole('button', { name: 'Login' }).click();

//   await page.waitForTimeout(5000);


// });

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://roughauction.testsjit.in/#/login');
  await page.getByText('Login with Username &').click();
  await page.getByPlaceholder('Enter Username or Email').click();
  await page.getByPlaceholder('Enter Username or Email').fill('admina');
  await page.getByPlaceholder('Enter Password').click();
  await page.getByPlaceholder('Enter Password').fill('Test@123');
  await page.getByRole('button', { name: '󰛑' }).click();
  await page.getByLabel('Remember me').check();
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('button', { name: 'Add BID' }).click();
  await page.getByRole('row', { name: '6 8542 MAKEABLE TOP\'S ( F' }).getByRole('button').first().click();
  await page.getByPlaceholder('Add Price').click();
  await page.getByPlaceholder('Add Price').fill('200');
  await page.getByRole('row', { name: '6 8542 MAKEABLE TOP\'S ( F' }).getByRole('button').nth(1).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('button', { name: ' My Bid' }).click();
  await page.getByRole('button', { name: ' Edit Bid' }).nth(1).click();
  await page.getByPlaceholder('Add Price').click();
  await page.getByPlaceholder('Add Price').press('ArrowRight');
  await page.getByPlaceholder('Add Price').fill('150');
  await page.getByRole('button', { name: '' }).nth(1).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('button', { name: 'ADMIN Owner' }).click();
  await page.locator('a').filter({ hasText: 'Logout' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();

  await page.waitForTimeout(10000);

});


