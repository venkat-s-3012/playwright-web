import{test, expect} from '@playwright/test'

test('Login storage state', async({page})=>{


    await page.goto('https://practice.expandtesting.com/login')

    await page.locator('#username').fill('practice')
    await page.locator('#password').fill('SuperSecretPassword!')

    await page.locator('#submit-login').click()
    await page.waitForTimeout(3000)

    page.context().storageState({path:'test_data/Authentication.json'})
    await page.waitForTimeout(2000)

})