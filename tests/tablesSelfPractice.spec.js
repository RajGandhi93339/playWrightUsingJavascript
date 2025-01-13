const { test, expect } = require('@playwright/test');

test('tables_Self_Practice', async ({ page }) => {

    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto("https://testautomationpractice.blogspot.com/");

    const table = await page.locator("//table[@id='productTable']");

    const columns = await table.locator("thead tr th");
    console.log("no of columns:", await columns.count());
    expect(await columns.count()).toBe(4);

    const rows = await table.locator("tbody tr");
    console.log("no of rows:", await rows.count());
    expect(await rows.count()).toBe(5);

    const paging = await page.locator("//ul[@id='pagination']//li//a");
    console.log("no of pages:", await paging.count());
    expect(await paging.count()).toBe(4);

    // await selectingvalue(rows, page, 'Smartphone')
    // await selectingvalue(rows, page, 'Laptop')
    // await selectingvalue(rows, page, 'Tablet')

    for (let p = 0; p < await paging.count(); p++) {
        if (p > 0) {
            const page = await paging.nth(p);
            await page.click();
        }
        for (let i = 0; i < await rows.count(); i++) {
            const row = await rows.nth(i);
            const td = await row.locator('td');
            for (let j = 0; j < await td.count() - 1; j++) {
                console.log(await td.nth(j).textContent())
            }
        }
    }

    await page.waitForTimeout(5000);

})

async function selectingvalue(rows, page, name) {
    const checkrows = await rows.filter({
        has: page.locator('td'),
        hasText: name
    })
    await checkrows.locator('input').check();
}