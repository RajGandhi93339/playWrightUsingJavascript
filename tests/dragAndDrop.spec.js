const { test, expect } = require('@playwright/test');
const { timeOut } = require('./functions');

test('drag and drop', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/#");

    const dragBox = await page.locator("//p[normalize-space()='Drag me to my target']")
    const dropBox = await page.locator("//div[@id='droppable']")

    // approch 1
    await dragBox.dragTo(dropBox);
    // await page.mouse.move(dropBox);

    // await dropBox.hover();
    // await page.mouse.right();
    await timeOut(page,10000)

})