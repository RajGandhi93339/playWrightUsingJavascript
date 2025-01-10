import { test, expect } from '@playwright/test';

test.skip('alert Box', async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  page.on('dialog', async dialog => {
    //enable dialogue window handler 
    expect(dialog.type()).toContain('alert');
    expect(dialog.message()).toContain('I am an alert box!');
    await dialog.accept();

  })
  await page.getByText('Simple Alert').click();
  await page.waitForTimeout(5000);
  // await page.getByText('Confirmation Alert').click();
});

test.skip('Confirmation Dialog - Alert ok and cancel', async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  page.on('dialog', async dialog => {

    //enable dialogue window handler 
    expect(dialog.type()).toContain('confirm');
    expect(dialog.message()).toContain('Press a button!');
    //await dialog.accept(); // close by using ok button
    await dialog.dismiss(); // close by using close button

  })
  await page.getByText('Confirmation Alert').click();
  await page.waitForTimeout(5000);
});

test('Prompt Box - handle ok button', async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  page.on('dialog', async dialog => {

    //enable dialogue window handler 
    expect(dialog.type()).toContain('prompt');
    expect(dialog.message()).toContain('Please enter your name:')
    expect(dialog.defaultValue()).toContain('Harry Potter')
    await dialog.accept(); // close by using ok button

  });
  await page.getByText('Prompt Alert').click();
  await page.waitForTimeout(5000);

});
