const { test, expect } = require('@playwright/test')
const { userLogin, timeOut } = require('./functions')

test('mouseHover', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    // mouse hover function
    const desktop = await page.locator("//button[normalize-space()='Point Me']")
    const mac = await page.locator("//button[normalize-space()='START']")

    // Mouse hover 
    await desktop.hover();
    // await mac.hover();

    //right click and left click
    //await mac.click({ button: 'left' });

    //double click
    await mac.dblclick();

    // timeout function called 
    await timeOut(page, 5000);

})