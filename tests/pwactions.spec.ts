import {test,expect,Locator} from '@playwright/test'



test('Register User',async ({page})=>{

await page.goto('https://automationexercise.com/');
await page.getByRole('link',{name: 'Home'}).isVisible();
await page.getByRole('link',{name:' Signup / Login'}).click();
await page.getByText('New User Signup!').isVisible();
await page.locator('input[data-qa=signup-name]').fill('shravya');
await page.locator('input[data-qa=signup-email]').fill('shravya@gmail.com');
await page.getByRole('button',{name:'signup'}).click();
await page.getByText('Enter Account Information').isVisible();
await page.locator('div#uniform-id_gender2').click();
//await page.getByLabel('Title').selectOption({label:'id_gender2'})
await page.getByLabel('password').fill('password@123');
//await page.getByLabel('Date of Birth').selectOption('27');
await page.locator('select#days').selectOption('27');
await page.locator('select#months').selectOption('October');
await page.locator('select#years').selectOption('1996');
await page.getByLabel('newsletter').check();
//await page.getByLabel('optin').check();
//page.locator('div#uniform-optin')
//await page.getByLabel("optin").check();
await page.locator("label[for='optin']").check();
/*
const days: Locator =page.locator('select#days>option');
await expect(days).toHaveCount(32);


const months:Locator = page.locator('select#months>option');
console.log(await months.allTextContents());


await expect(months).toHaveCount(13);

*/
await page.getByLabel('First name').fill('shravya');
await page.getByLabel('Last name ').fill('vattam');
await page.getByLabel('company').fill()

await page.waitForTimeout(3000);
})