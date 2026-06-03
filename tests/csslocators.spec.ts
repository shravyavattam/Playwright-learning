import{test,expect,Locator} from '@playwright/test'

test('verifying css locators',async ({page})=>{

    await page.goto('https://www.google.com/');
    const search:Locator=page.locator('textarea.gLFyf');
    //search().fill('udemy');
    await expect(search).toBeEditable();
    await search.fill('udemy');

    await page.waitForTimeout(3000);







})