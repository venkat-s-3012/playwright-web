import{test, expect} from '@playwright/test'



test('HTTP Basic authentication', async({page})=>{

    // const username = 'admin'
    // const password = 'vinothqa'

    // const auth = 'Basic '+btoa(username+':'+password)

    // await page.context().setExtraHTTPHeaders({Authorization:auth})

    await page.goto('https://vinothqaacademy.com/basic-auth-demo/protected')

    //await page.locator('.demo-link').click()

    const title = page.getByRole('heading', {name: 'Login Successful'})

    await expect(title).toContainText('Login Successful')

    await page.waitForTimeout(3000)


})