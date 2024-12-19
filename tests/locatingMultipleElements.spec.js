
const { test, expect } = require('@playwright/test');

test('getLink', async ({ page }) => {

    await page.goto('https://roughauction.testsjit.in/#/login');

    const checkLoginPassward = await page.click("//a[normalize-space()='Login with Username & Password?']");

    await page.fill("//input[@id='logemail']", 'admina');

    await page.fill("//input[@id='password']", 'Test@123');

    const clicklogin = await page.click("//button[normalize-space()='Log In']")
    await page.waitForTimeout(3000);

    const checkurlpath = await page.url("https://roughauction.testsjit.in/#/home/pages/user/dashboard");
    await expect(checkurlpath).toBeTruthy();

    page.waitForSelector('a');
    const links = await page.$$('a');

    for (const link of links) {

        const linktext = await link.textContent();
        console.log(linktext);
    }
})