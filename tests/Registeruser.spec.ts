import{test,expect,Locator,Browser,chromium,Page} from '@playwright/test';
let page: Page;

test.describe('Testing automation',()=>{
   

    test.beforeAll( 'pageurl test',async ({browser})=>{
       //const context = await browser.newContext();
        page = await browser.newPage();
        await page.goto('http://automationexercise.com');
        await expect(page.getByRole('link',{name:' Home'})).toBeVisible();
    });

    test('testcase1:Register user', async({page}) =>{ 

      await page.goto('http://automationexercise.com');
     //await expect(page.url()).toHaveURL('http://automationexercise.com');
      await page.getByRole('link',{name: 'Home'}).click();
      await expect(page.getByText('Home')).toBeVisible();
      await page.getByRole('link',{name:' Signup / Login'}).click();
      await expect(page.getByText('New User Signup!')).toBeVisible();
      await page.locator('input[data-qa="signup-name"]').fill('shravya');
      await page.locator('input[data-qa="signup-email"]').fill("shravy@gmail.com");
      await page.getByRole('button',{name:"Signup"}).click();
      //await page.getByLabel('Signup').click();
      await expect(page.getByText('ENTER ACCOUNT INFORMATION')).toBeVisible();
      //await page.getByLabel('id_gender2').click();
      await page.locator('label[for=id_gender2]').click();
      await page.getByLabel('Password').fill('shravya@123');
      await page.locator('select#days').selectOption('27');
      await page.locator('select#months').selectOption('10');
      await page.locator('select#years').selectOption('1996');
      //await page.locator('#uniform-newsletter').click();
      await page.getByLabel('Sign up for our newsletter!').check();
      await page.getByLabel('Receive special offers from our partners!').check();
      await page.getByLabel('First name').fill('shravya')
      await page.getByLabel('Last name').fill('vattam');
      await page.locator('input#company').fill('cloud4c');
      await page.locator('input#address1').fill('madhapur');
      await page.getByLabel('Address 2').fill('Near Inorbit');
      await page.locator('select#country').selectOption('India');
      await page.getByLabel('State').fill('Telangana');
      await  page.getByLabel('City').fill('Hyderabad');
      //await page.getByLabel('Zipcode').fill('500081');
      await page.locator('#zipcode').fill('500081');
      await page.getByLabel('Mobile Number').fill('1234567890');
      await page.getByRole('button',{name:'Create Account'}).click();
      await page.locator('h2[data-qa="account-created"]').isVisible();
      //await page.getByRole('link',{name:'Continue'}).click();
      await page.locator('[data-qa="continue-button"]').click();
      await expect(page.getByText('Logged in as shravya')).toBeVisible();
      await page.getByRole('link',{name:' Delete Account'}).click();
      await page.getByText('Account Deleted!').isVisible();
      await page.getByRole('link',{name:'Continue'}).click();

      await page.waitForTimeout(2000);
    });



    test('testcase2: Login User with correct email and password',async({page})=>{

      await page.goto('http://automationexercise.com');
      await expect(page.getByRole('link',{name:' Home'})).toBeVisible();
      await page.getByRole('link',{name:' Signup / Login'}).click();
      await expect(page.getByText('Login to your account')).toBeVisible();
      await page.locator('[data-qa="login-email"]').fill("shravya9@gmail.com");
      await page.locator('[data-qa="login-password"]').fill('shravya@123');
      await page.getByRole('button',{name:'Login'}).click();
      await expect(page.getByText('Logged in as shravya')).toBeVisible();
      await page.getByRole('link',{name:'Delete Account'}).click();
      await expect(page.getByText('Account Deleted!')).toBeVisible();
      await page.waitForTimeout(5000);


    });


    test('testcase3:testLogin User with incorrect email and password',async ()=>{

    
      //await page.goto('https://automationexercise.com/');
      //await expect(page.getByText('Home')).toBeVisible();
      await page.getByRole('link',{name:' Signup / Login'}).click();
      await expect(page.getByText("Login to your account")).toBeVisible();
      await page.locator('[data-qa="login-email"]').fill('shravya123@gmail.com');
      await page.locator('[data-qa="login-password"]').fill('shr');
      await page.getByRole('button',{name:'Login'}).click();
      await expect(page.getByText('Your email or password is incorrect!')).toBeVisible();

      await page.waitForTimeout(2000);

    });

    test('testcase4:Logout User',async()=>{
      await page.getByRole('link',{name:' Signup / Login'}).click();
      await expect(page.getByText("Login to your account")).toBeVisible();
      await page.locator('[data-qa="login-email"]').fill('shravya2@gmail.com');
      await page.locator('[data-qa="login-password"]').fill('shravya@123');
      await page.locator('[data-qa="login-button"]').click();
      await page.getByText('Logged in as shravya').isVisible();
      await page.getByRole('link',{name:' Logout'}).click();
      expect(page.url()).toBe('https://automationexercise.com/login');
      await page.waitForTimeout(3000);


    });


    test('testcase5:Register User with existing email',async()=>{
      await page.getByRole('link',{name:' Signup / Login'}).click();
      await expect(page.getByText("New User Signup!")).toBeVisible();
      await page.locator("[data-qa='signup-name']").fill('shravya');
      await page.locator("[data-qa='signup-email']").fill('shravya2@gmail.com');
      await page.locator("[data-qa='signup-button']").click();
      await expect(page.getByText('Email Address already exist!')).toBeVisible();
      await page.waitForTimeout(2000);


    });



    test('testcase6:Contact Us Form',async()=>{
      await page.getByRole('link',{name:'Contact us'}).click();
      await expect(page.getByText('Get In Touch')).toBeVisible();
      await page.locator("[data-qa='name']").fill('shravya');
      await page.locator("[data-qa='email']").fill('shravya2@gmail.com');
      await page.locator("[data-qa='subject']").fill('Automation practioce');
      await page.locator("[data-qa='message']").fill('This is my first project with playwright');
      await page.locator("[name='upload_file']").setInputFiles('D:/Shravya-Automation/test.txt');
      page.on('dialog', dialog => dialog.accept());
      await page.locator("[name='submit']").click();
      //await page.getByText('Success! Your details have been submitted successfully.').isVisible();
      await expect(page.locator(".status.alert.alert-success")).toHaveText('Success! Your details have been submitted successfully.');
      //await page.getByRole('link',{name:'Home'}).click();
      await page.locator(".btn.btn-success").click();
      expect(page.url()).toBe('https://automationexercise.com/');
      await page.waitForTimeout(3000);


    });

    test('testcase7:Verify Test Cases Page',async()=>{
      await page.getByRole('link',{name:'Test Cases',exact:true}).click();
      //await page.locator("[href='/test_cases']").click();
      expect(page.url()).toBe('https://automationexercise.com/test_cases');
      await page.waitForTimeout(3000);

        


    });

    test('testcase8:Verify All Products and product detail page',async()=>{
      await page.getByRole('link',{name:' Products'}).click();
      expect(page.url()).toBe('https://automationexercise.com/products');
      await page.locator('.features_items').isVisible();
      //await page.locator('.product-image-wrapper').nth(0).click();
      await page.getByRole('link',{name:'View Product'}).first().click();
      await page.waitForTimeout(3000);
      //expect(page.url()).toBe('https://automationexercise.com/product_details/1');
      await expect(page.locator('.product-information')).toBeVisible();
      await page.waitForTimeout(3000);

  

    });
  
    test('testcase9:Search Products',async()=>{

      await page.getByRole('link',{name:' Products'}).click();
      page.on('dialog', dialog => dialog.dismiss());
      //await page.getByRole('button', { name: 'close'}).click(); 
      expect(page.url()).toBe('https://automationexercise.com/products');
      await page.locator('#search_product').fill('winter top');
      await page.locator('#submit_search').click();
      expect(page.locator('.features_items')).toBeVisible();
      await page.waitForTimeout(3000);

        

    });

    test('testcase10:Verify Subscription in home page',async()=>{
      await page.getByText('Subscription').scrollIntoViewIfNeeded();
      await page.locator('#susbscribe_email').fill('shravya2@gmail.com');
      await page.locator('#subscribe').click();
      await expect(page.locator('.alert-success')).toHaveText('You have been successfully subscribed!');
      await page.waitForTimeout(3000);

    });


    test ('testcase11:Verify Subscription in Cart page',async()=>{
      await page.getByRole('link',{name:' Cart'}).click();
      await page.getByText('Subscription').scrollIntoViewIfNeeded();
      await page.locator('#susbscribe_email').fill('shravya2@gmail.com');
      await page.locator('#subscribe').click();
      await expect(page.locator('.alert-success')).toHaveText('You have been successfully subscribed!');
      await page.waitForTimeout(3000);

    });

    test('testcase12:Add Products in Cart',async()=>{

      await page.getByRole('link',{name:' Products'}).click();
      await page.locator('.product-image-wrapper').nth(0).hover();
      await page.getByText('Add to cart').nth(0).click();
      await page.getByRole('button',{name:'Continue Shopping'}).click();
      await page.locator('.product-image-wrapper').nth(1).hover();
      await page.getByText('Add to cart').nth(3).click();
      await page.getByRole('link',{name:'View Cart'}).click();
      expect(page.url()).toBe('https://automationexercise.com/view_cart');
      await page.locator('.cart_info').isVisible();
      await expect(page.locator('.cart_info .cart_product')).toHaveCount(2);
      await expect(page.locator('.cart_price').nth(0)).toHaveText('Rs. 500');
      //await expect(page.locator('cart_quantity').nth(0)).toHaveCount(1);
      //await expect(page.getByRole('button',{name:'1'}).nth(0)).toBeVisible();
      //await expect(page.getByRole('row', { name: 'Product Image Blue Top Women' }).getByRole('button')).toBeVisible();
      await expect(page.locator('#product-1').getByRole('cell', { name: '1' })).toHaveCount(1);
      await expect(page.locator('.cart_total_price').nth(0)).toHaveText('Rs. 500');
      await expect(page.locator('.cart_price').nth(1)).toHaveText('Rs. 400');
      //await expect(page.locator('cart_quantity').nth(1)).toHaveCount(1);
      await expect(page.locator('#product-2').getByRole('cell', { name: '1' })).toHaveCount(1);
      await expect(page.locator('.cart_total_price').nth(1)).toHaveText('Rs. 400');
      await page.waitForTimeout(3000);


    });

    test('testcase13: Verify Product quantity in Cart',async()=>{

      await page.getByRole('link',{name:' Products'}).click();
      await page.locator('.product-image-wrapper').nth(0).hover();
      await page.getByRole('link',{name:'View Product'}).first().click();
      expect(page.url()).toBe('https://automationexercise.com/product_details/1');
      await page.locator('#quantity').fill('4');
      await page.getByRole('button',{name:'Add to cart'}).click();
      await page.getByRole('link',{name:'View Cart'}).click();
      expect(page.url()).toBe('https://automationexercise.com/view_cart');
      await expect(page.getByRole('button', { name: '4' })).toBeVisible();
      await page.waitForTimeout(3000);
    });


    test('testcase14:Place Order: Register while Checkout',async()=>{

      await page.getByRole('link',{name:'Products'}).click();
      await page.locator('.product-image-wrapper').nth(2).hover();
      await page.getByText('Add to cart').nth(5).click();
      await page.getByRole('button',{name:'Continue Shopping'}).click();
      await page.locator('.product-image-wrapper').nth(0).hover();
      await page.getByText('Add to cart').nth(0).click();
      await page.getByRole('link',{name:'View Cart'}).click();
      expect(page.url()).toBe('https://automationexercise.com/view_cart');
      //await page.getByRole('button',{name:'Proceed To Checkout'}).click();
      await page.locator('.btn.btn-default.check_out').click();
      await page.getByRole('link',{name:'Register / Login'}).click();
      expect(page.getByText('New User Signup!')).toBeVisible();
      await page.locator('[data-qa="signup-name"]').fill('shravya');
      await page.locator('[data-qa="signup-email"]').fill('shravya@gmail.com');
      await page.getByRole('button',{name :'Signup'}).click();
      await expect(page.getByText('ENTER ACCOUNT INFORMATION')).toBeVisible();
      await page.locator('label[for=id_gender2]').click();
      await page.getByLabel('Password').fill('shravya@123');
      await page.locator('select#days').selectOption('27');
      await page.locator('select#months').selectOption('10');
      await page.locator('select#years').selectOption('1996');
      //await page.locator('#uniform-newsletter').click();
      await page.getByLabel('Sign up for our newsletter!').check();
      await page.getByLabel('Receive special offers from our partners!').check();
      await page.getByLabel('First name').fill('shravya')
      await page.getByLabel('Last name').fill('vattam');
      await page.locator('input#company').fill('cloud4c');
      await page.locator('input#address1').fill('madhapur');
      await page.getByLabel('Address 2').fill('Near Inorbit');
      await page.locator('select#country').selectOption('India');
      await page.getByLabel('State').fill('Telangana');
      await  page.getByLabel('City').fill('Hyderabad');
      //await page.getByLabel('Zipcode').fill('500081');
      await page.locator('#zipcode').fill('500081');
      await page.getByLabel('Mobile Number').fill('1234567890');
      await page.getByRole('button',{name:'Create Account'}).click();
      await page.locator('h2[data-qa="account-created"]').isVisible();
      //await page.getByRole('link',{name:'Continue'}).click();
      await page.locator('[data-qa="continue-button"]').click();
      await expect(page.getByText('Logged in as shravya')).toBeVisible();
      await page.getByRole('link',{name:' Cart'}).click();
      //await page.getByRole('button',{name:'Proceed To Checkout'}).click();
      await page.locator('.btn.btn-default.check_out').click();
      await expect(page.getByText('Address Details')).toBeVisible();
      await expect(page.getByText('Review Your Order')).toBeVisible();
      //await page.getByLabel('label',{name:'textarea'}).fill('please deliver between 10am-5pm');
      await page.locator('.form-control').fill('please deliver between 10am-5pm');
      await page.getByRole('link',{name:'Place Order'}).click();
      //await expect(page.getByText('Payment')).toBeVisible();
      await page.locator("[name='name_on_card']").fill('shravya vattam');
      await page.locator("[name='card_number']").fill('12345678901234567');
      await page.locator("[name='cvc']").fill('123');
      await page.locator("[name='expiry_month']").fill('100');
      await page.locator("[name='expiry_year']").fill('2029');
      await page.getByRole('button',{name:'Pay and Confirm Order'}).click();
      await expect(page.getByText('Your order has been placed successfully!')).toBeVisible();
      await page.getByRole('link',{name:'Continue'}).click();
      await page.getByRole('link',{name:' Delete Account'}).click();
      await expect(page.getByText('Account Deleted!')).toBeVisible();
      await page.getByRole('link',{name:'Continue'}).click();
      await page.waitForTimeout(3000);

    });
  




});