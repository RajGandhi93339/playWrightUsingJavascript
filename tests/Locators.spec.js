
//const {test,expect}=require("@playwright/test")

import { test, expect } from '@playwright/test'
import { format } from 'path'

test('Locators', async ({ page }) => {

    await page.goto('https://roughauction.testsjit.in/#/login');

    const checkLoginPassward = await page.click("//a[normalize-space()='Login with Username & Password?']");

    await page.fill("//input[@id='logemail']", 'admina');

    await page.fill("//input[@id='password']", 'Test@123');

    const clicklogin = await page.click("//button[normalize-space()='Log In']")
    await page.waitForTimeout(3000);

    await page.close()
    
})
