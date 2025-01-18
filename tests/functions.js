export async function userLogin(page,userId,password){
    
    await page.locator("//input[@id='logemail']").fill(userId);
    await page.locator("//input[@id='password']").fill(password);
    const loginButton = await page.locator("button[type='submit']")
    await loginButton.click();
    await loginButton.click();

}

export async function timeOut(page,ms){
    await page.waitForTimeout(ms)
}