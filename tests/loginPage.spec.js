const { test, expect } = require('@playwright/test');

test('Login Page', async ({ page }) => {

    await page.goto('http://27.109.25.22/site/#/login');
    
    const pageTitle = page.title();
    console.log("Page title is :",pageTitle);

    await expect(page).toHaveTitle('Shivam Jewels Login - Explore the S J World of Diamonds Description - Access the Shivam Jewels App/Web for a simplified diamond buying experience. Quick login to the S J World ensures a seamless, quality-rich journey');
    
    const pageUrl = page.url();
    console.log("Page Url is:",pageUrl)
    
    await expect(page).toHaveURL('http://27.109.25.22/site/#/login');

    await page.close();

})