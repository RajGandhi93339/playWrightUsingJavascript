const { test, expect } = require('@playwright/test');

test('Auto suggest Dropdown', async ({ page }) => {

    const BaseUrl = "https://www.redbus.in/";
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(BaseUrl);
    await page.getByLabel("from").click();
    await page.getByLabel("from").fill('del');

    await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]//div//text[1]");

    const fromCityDropdown = await page.$$("//li[contains(@class,'sc-iwsKbI')]//div//text[1]");
    for (let toOption of fromCityDropdown) {
        const toValue = await toOption.textContent()
        console.log(toValue);
        if (toValue.includes('Mayur Vihar')) {
            await toOption.click();
            break;
        }
    }
    await page.getByLabel("To").click();
    await page.getByLabel("To").fill('Mum')
    await page.waitForSelector("//ul//li//div//text[1]");
    const toCityDropdown = await page.$$("//ul//li//div//text[1]");
    for (let fromoption of toCityDropdown) {
        const fromvalue = await fromoption.textContent();
        console.log(fromvalue)
        if (fromvalue.includes('Mulund')) {
            await fromoption.click();
            break;
        }
    }

    await page.getByLabel("Date").click();
    await page.getByRole('button', { name: ' Date Jan 2025 1 Holiday' }).click();

    await page.waitForTimeout(5000);
})

//test('From dropdown',async({page})=>{})