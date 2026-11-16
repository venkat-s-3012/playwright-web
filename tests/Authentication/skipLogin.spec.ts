import{test, expect} from '@playwright/test'


test('Skip Login', async({page})=>{

    await page.goto('https://practice.expandtesting.com/secure')

    await page.waitForTimeout(4000)

})