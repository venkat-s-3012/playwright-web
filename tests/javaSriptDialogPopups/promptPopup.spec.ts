import{test, expect} from '@playwright/test'

test('Prompt popup', async({page})=>{

    await page.goto('https://senthilsmartqahub.blogspot.com/2026/03/smart-shop-checkout.html')
    await page.waitForTimeout(2000)

    await page.on('dialog', async popup=>{
        await page.waitForTimeout(3000)
        console.log(popup.message())
        console.log(popup.type())
        await popup.accept('Coupon')
    })

    const coupon = await page.getByText('Apply Coupon')
    await coupon.click()
    await page.waitForTimeout(3000)
    

})

test('Dismiss prompt', async ({page})=>{
    await page.goto('https://senthilsmartqahub.blogspot.com/2026/03/smart-shop-checkout.html')

    await page.on('dialog', async popup=>{
        await page.waitForTimeout(2000)
        console.log(popup.message())
        console.log(popup.type())
        console.log(popup.defaultValue())
        await popup.dismiss()
    })

    await page.getByText('Add To Cart').first().click()
    await page.locator('.removeBtn').click()
    await page.waitForTimeout(3000)

})