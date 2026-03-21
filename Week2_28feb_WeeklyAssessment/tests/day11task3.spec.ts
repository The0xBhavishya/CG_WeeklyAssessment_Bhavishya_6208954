import {test} from "@playwright/test"
test("task3",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
    await page.locator('//input[@id="name"]').fill("bhavishya");
    await page.locator('//input[@id="email"]').fill("goyal@gmail.com");
    await page.locator('//input[@id="password"]').fill("goyal@12345");
    await page.locator('button[type="submit"]').click();
    await page.locator('//input[@id="email"]').fill("goyal@gmail.com");
    await page.locator('//input[@id="password"]').fill("goyal@12345");
    await page.locator('button[type="submit"]').click();
    await page.screenshot({ path:'task3.png'});
});