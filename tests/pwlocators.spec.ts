import{test,expect,Locator} from '@playwright/test'

test('Verifying Register User', async({page})=>{

//Navigate to url 'http://automationexercise.com

await page.goto('http://automationexercise.com');
await page.getByAltText('Website for automation practice').isVisible();

//Verify that home page is visible successfully

await page.getByRole('link', {name:' Home'}).click();

//Click on 'Signup / Login' button

await page.getByRole('link',{name:' Signup / Login'}).click();

// Verify 'New User Signup!' is visible

await expect(page.getByText('New User Signup!')).toBeVisible();

//Enter name and email address

await page.getByPlaceholder('Name').fill('shravya');
//await page.getByPlaceholder("Email Address").fill('shravya@gmail.com');
//await page.getByLabel('signup-email').fill('shravya@gmail.com');
// await page.getByRole('textbox',{name:'Email Address'}).fill('shravya@gmail.com');

await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('shravya@gmail.com');

// Click 'Signup' button

await page.getByRole('button',{name:'Signup'}).click();

// Verify that 'ENTER ACCOUNT INFORMATION' is visible

await expect(page.getByText('Enter Account Information')).toBeVisible();

//Fill details: Title, Name, Email, Password, Date of birth

await page.getByRole('radio',{name:'Mrs.'}).click();
await page.getByLabel('Password').fill('password@123');




})