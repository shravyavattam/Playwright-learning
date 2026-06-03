import {test,expect,Locator} from '@playwright/test'

test('Learning Xpath',  async ({page})=>{

  await  page.goto('https://automationexercise.com/');
    

    //absolute xpath

    const path:Locator = page.locator("xpath=html[1]/body[1]/header[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]/img[1]");
    await expect(path).toBeVisible();


    //Relative Xpath

    const relativelogo:Locator=page.locator('//img[@alt="Website for automation practice"]');
    await expect(relativelogo).toBeVisible();

    await page.locator("//a[normalize-space()='Signup / Login']").click();

    await expect(page.locator('//h2[text()="New User Signup!"]')).toBeVisible();

    await page.locator("//input[@type='text']").fill('john');
    await page.locator("//input[@data-qa='signup-email']").fill('john@gmail');
    await page.locator("//button[@data-qa='signup-button']").click();
    
})
