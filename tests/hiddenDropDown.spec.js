const { test, expect } = require('@playwright/test')

test('Hiddenelements', async ({ page }) => {

    const BaseUrl = "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index";
    await page.setViewportSize({ width: 1920, height: 1080 })
    await page.goto(BaseUrl)
    await page.getByPlaceholder("Username").fill('Admin');
    await page.getByPlaceholder("Password").fill('admin123');
    await page.locator("//button[normalize-space()='Login']").click();
    await page.locator("//a//span[normalize-space()='PIM']").click();
    await page.locator("//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[1]").click();
    await page.waitForSelector("//div[@class='oxd-select-dropdown --positon-bottom']//div//span");
    const data = await page.$$("//div[@class='oxd-select-dropdown --positon-bottom']//div//span");
    for(let option of data){
        const value = await option.textContent();
        console.log(value);

        if(value.includes('QA Lead')){
            await option.click();
            break;
        }
    }
    await page.waitForTimeout(5000);


})

