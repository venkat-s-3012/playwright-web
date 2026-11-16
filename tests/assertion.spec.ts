import{test, expect} from '@playwright/test'


test('assertion test', async({page})=>{

    await page.goto('https://www.facebook.com/')

    await expect.soft(page).toHaveTitle('Faebook') // Auto-retrying assertion
    console.log(await page.title())
    await page.waitForTimeout(3000)

})