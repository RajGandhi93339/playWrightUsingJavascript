const { test, expect } = require('@playwright/test');
const { userLogin } = require('./functions');

test('CRM Login', async ({ page }) => {

    await page.goto("https://crm.testsjit.in/#/login");

    // const devId = '82DwAGMIRp8BfZEeGaP/IIuZiTO6EhKwPDzuyEfagH4=';
    // await page.evaluate(devId => localStorage.setItem('devId', devId), devId)
    const userId = "4"
    const password = "13$HiV@M97J"
    userLogin(page,userId,password)
    await page.waitForTimeout(10000);

})

// async function userLogin(page,userId,password){
//     await page.locator("//input[@id='logemail']").fill(userId);
//     await page.locator("//input[@id='password']").fill(password);
//     const loginButton = await page.locator("button[type='submit']")
//     await loginButton.click();
//     await loginButton.click();

// }