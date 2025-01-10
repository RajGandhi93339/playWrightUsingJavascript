const { test, expect } = require('@playwright/test');

test('handle frames', async ({ page }) => {

    await page.goto("https://ui.vision/demo/webtest/frames/");

    const frame3 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3.html' })
    await frame3.locator("input[name='mytext3']").fill('Frame 3');

    //nested frames 
    const childframes = await frame3.childFrames();

    const radioChecked = await childframes[0].locator("//div//span[normalize-space()='Hi, I am the UI.Vision IDE']")
    radioChecked.click();


    await page.waitForTimeout(5000);

});
