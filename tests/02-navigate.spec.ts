import {test} from '@playwright/test'

test('Basic Button', async({page}) =>{
    await page.goto('https://material.playwrightvn.com/018-mouse.html');
    await page.locator("//div[@id='clickArea']").click();

    // click chuột phải
    await page.locator("//div[@id='clickArea']").click({
        button: 'right'
    });

    await page.locator("//div[@id='clickArea']").click({
        modifiers: ["Control"]
    });
})

test('Basic input', async({page}) => {
    await page.goto('https://material.playwrightvn.com/01-xpath-register-page.html');

    // hàm fill là điền thẳng 1 cụm vô
    await page.locator("//input[@id='username']").fill("minh tri");

    // hàm pressSenquentially là gõ từng nút, tham số delay là tgian giữa những lần gõ
    await page.locator("//input[@id='username']").pressSequentially("minh tri", {
        delay: 1000,
    });

    // Check radio female
    await page.locator("//input[@id='female']").check()
    
    // Check checkbox reading
    await page.locator("//input[@id='reading']").check()

    // Uncheck checkbox reading
    await page.locator("//input[@id='reading']").uncheck()
})

test('Select option', async({page}) => {
    await page.goto('https://material.playwrightvn.com/01-xpath-register-page.html');

    await page.locator("//select[@id='country']").selectOption("canada")

    // truyền 1 mảng các giá trị để chọn
    await page.locator("//select[@id='interests']").selectOption(['Music', 'Art'])
})