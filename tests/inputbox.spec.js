const { test, expect } = require("@playwright/test")

test('Input Boxes', async ({ page }) => {

    const baseUrl = "https://demoqa.com/automation-practice-form"
    await page.goto(baseUrl);

    await expect.soft(page.locator("//input[@id='firstName']")).toBeVisible()
    await expect.soft(page.locator("//input[@id='firstName']")).toBeEditable()
    await expect.soft(page.locator("//input[@id='firstName']")).toBeEmpty()
    const firstname = await expect.soft(page.locator("//input[@id='firstName']")).toBeEnabled()
    await page.fill("//input[@id='firstName']", 'Raaj');
    
    // await page.getByText('Female', { exact: true }).click();

    await page.getByText("Female").click();

    await page.waitForTimeout(3000);

});