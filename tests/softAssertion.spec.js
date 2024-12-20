const { test, expect } = require('@playwright/test')

test('SoftAssertion', async ({ page }) => {
    const baseURL = "https://blazedemo.com/"
    await page.goto(baseURL);

    // Hard assertion
    // await expect(page).toHaveTitle('BlazeDemo');
    // await expect(page).toHaveURL(baseURL);
    // await expect(page.getByRole("button", {name: 'Find Flights'})).toBeVisible();
        

    // soft assertion
    await expect.soft(page).toHaveTitle('BlazeDemos');
    await expect.soft(page).toHaveURL(baseURL);
    await expect.soft(page.getByRole("button", {name: 'Find Flights'})).toBeVisible();
    })