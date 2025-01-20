const { test, expect } = require("@playwright/test")

test('KeyBoard Actions', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/#")
    await page.locator("//input[@id='name']").fill('Raj Gandhi')
    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')

    await page.keyboard.down("Tab")
    await page.keyboard.press('Control+V')

    await page.waitForTimeout(5000);
})