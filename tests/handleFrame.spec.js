const { test, expect } = require('@playwright/test');

test('handle frames', async ({ page }) => {

    await page.goto("https://ui.vision/demo/webtest/frames/");
    const allFrames = await page.frames();
    console.log("Total no of frames :", allFrames.length)

    // Approch 1: using name and url
    const frame1 = await page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_1.html" });
    await frame1.locator("//input[@name='mytext1']").fill('Raj');

    const inputbox = await page.frameLocator("frame[src='frame_2.html']").locator("input[name='mytext2']");
    inputbox.fill('Raj');

    await page.waitForTimeout(5000);

})