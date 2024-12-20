
import { test, expect } from '@playwright/test'
import { url } from 'inspector';
// const { test, expect } = require('@playwright/test')

test('Assertion', async ({ page }) => {

    // Go to Url

    const BaseUrl = 'https://sjworld.testsjit.in/site/#/login';
    await page.goto(BaseUrl);
    await expect(page).toHaveURL(BaseUrl);
    await page.getByRole('textbox', { name: 'Enter Username or E-mail' }).click();
    await page.getByRole('textbox', { name: 'Enter Username or E-mail' }).fill('raaj');
    await page.getByPlaceholder('Enter password', { exact: true }).click();
    await page.getByPlaceholder('Enter password', { exact: true }).fill('Test@2023');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveTitle("Shivam Jewels Login - Explore the S J World of Diamonds Description - Access the Shivam Jewels App/Web for a simplified diamond buying experience. Quick login to the S J World ensures a seamless, quality-rich journey")
    await page.getByText('New Arrival', { exact: true }).click();
    await page.waitForTimeout(3000);
})

