import {test,expect} from '@playwright/test';

test('Verify title', async({page})=>{
   await page.goto("https://www.automationinc.com/") ;
    
  let name:string = await page.title();
   console.log('Titlename',name);
    await expect(page).toHaveTitle(/Automation/);

});
