//import {test, expect, Page, chromium} from '@playwright/test'
import { LoginPage } from '../../pages/login.page'
import { HomePage } from '../../pages/home.page';
import { valid, invalid } from '../../test-data/login.data';
import {test, expect} from '../../fixtures/fixtures'
import { tr } from '@faker-js/faker';
import { emit } from 'node:cluster';

let loginPage: LoginPage;


test.describe('Login Module', ()=>{

    test.beforeEach(async({page})=>{
    loginPage = new LoginPage(page);
    await loginPage.fullScreen(1512, 949);
    await loginPage.navigateToUrl('/login')
    })

    test.describe('UI Validation', ()=>{

        test('@smoke - Verify email field visibility', async()=>{
            await loginPage.expectEmailFieldVisible();
        })

        test("@smoke - Verify Password field visible", async()=>{
            await loginPage.expectPasswordFieldVisible();
        })

    })

    test.describe('Login Authentication', ()=>{
        
        test('@smoke - Valid Login', async({page, homePage})=>{
        console.log(await loginPage.getTitle());
        await loginPage.login(valid.email, valid.password);
        await homePage.expectHomeTabVisible();
        await homePage.logOut();
        })


        const invalidCredentials = [
            { email: invalid.email, password: invalid.password },
            { email: 'Bob@email.com', password: 'Hello123' },
            { email: 'Charlie@email.com', password: 'Hello123' },
        ];

        invalidCredentials.forEach(({ email, password }) => {
            test(`@smoke - Invalid Login - ${email}`, async () => {
                await loginPage.login(email, password);
                await loginPage.expectLoginError();
                const error_message = await loginPage.getLoginErrorMessage();
                await expect(error_message).toBe('Invalid email or password')
            })
        })

    })

})

