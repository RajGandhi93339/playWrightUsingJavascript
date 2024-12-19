
import { test, expect } from '@playwright/test'

test('builtinLocators', async ({ page }) => {

    await page.goto("http://27.109.25.22/site/#/login");

    const locate1 = await page.getByText(" New Registration ? ");
    await expect(locate1).toBeVisible();

    const locate3 = await page.fill("//div[@class='form-group web-login-form']//input[@placeholder='Enter Username or E-mail']", "raaj");
    const locate2 = await page.fill("//input[@placeholder='Enter password']", "Test@2023");
    // await expect(locate2).toBeTruthy();

    //await page.getByRole('button', { class: 'btn btn-login border-round' }).click()
    const loginAsGuest = await page.getByText('Login as Guest')
    await expect(loginAsGuest).toBeVisible()

    await page.waitForTimeout(5000);

})


