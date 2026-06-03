import{test,expect} from '@playwright/test';


test("Google", async({page})=>{
   await page.goto("https://www.google.com/")


   await expect(page).toHaveTitle("Google");

   await page.getByTitle("Search").fill("playwright courses");
   await page.getByRole('button', {name: "Google Search"}).click();
   await expect(page).toHaveTitle("playwright courses - Google Search")

})

