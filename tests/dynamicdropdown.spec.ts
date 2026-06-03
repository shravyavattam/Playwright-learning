import{test,expect,Locator} from '@playwright/test'

test('testing dynamicdropdowns',async({page})=>{


    await page.goto('https://www.flipkart.com/');

    await page.locator("form input[name='q']").fill('shoes');

    const shoelist:Locator = page.locator("ul>li");
    await page.waitForTimeout(5000);
    const shoecount:number= await shoelist.count();
    console.log(shoecount);
    console.log(await shoelist.allTextContents());
 

    await page.waitForTimeout(3000);
})