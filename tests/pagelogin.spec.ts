import{test,expect} from '@playwright/test';

test('verify page login', async ({page}) =>{

    await page.goto('https://www.udemy.com/');
    await expect(page).toHaveTitle(/Udemy/);

   //await page.getByRole('button',{name:'Log in'}).click();
    await page.getByText('Log in').click();
    await page.getByTitle('email-phone').fill('shravya.vattam@gmail.com');
    await page.getByRole('button',{name:'submit'}).click();
      


})