const { test, expect } = require("@playwright/test")

test('Input Boxes', async ({ page }) => {

    const baseUrl = "https://testautomationpractice.blogspot.com/";
    await page.goto(baseUrl);

    const dropdown = await page.$$("//select[@id='country']");
    
    for (const option of dropdown) {
        option.click();
        const value = await option.textContent();
        console.log(value);
        for (let values in value) {
            values.textContent('Japan').click();
        }
    }
        await page.waitForTimeout(10000);
    });