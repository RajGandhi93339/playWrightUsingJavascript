const { test, expect } = require('@playwright/test');

test('tables', async ({ page }) => {

    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto("https://testautomationpractice.blogspot.com/");

    const table = await page.locator("//table[@id='productTable']");

    const columns = await table.locator("thead tr th");
    console.log("number of columns:", await columns.count())
    expect(await columns.count()).toBe(4);

    const rows = await table.locator("tbody tr");
    console.log("number of rows:", await rows.count())
    expect(await rows.count()).toBe(5);

    const pagination = await page.locator("//ul[@id='pagination']//li//a");
    console.log("Number of pegination :", await pagination.count())
    // await selectProduct(rows,page,'Smartphone')
    // await selectProduct(rows,page,'Wireless Earbuds')
    // await selectProduct(rows,page,'Tablet')
    for (let p = 0; p < await pagination.count(); p++) {

        if (p > 0) {

            const page = await pagination.nth(p);
        
            await page.click();
            console.log("---------------------Page",p,"---------------------");
        }
        for (let i = 0; i < await rows.count(); i++) {

            const row = await rows.nth(i);
            const tds = await row.locator('td');

            for (let j = 0; j < await tds.count() - 1; j++) {

                console.log(await tds.nth(j).textContent())

            }

        }
    }
    await page.waitForTimeout(5000);

})

//Create new functions 
async function selectProduct(rows, page, name) {

    const matchrows = rows.filter({
        has: page.locator('td'),
        hasText: name

    })

    await matchrows.locator('input').check();

}