import{test, expect} from '@playwright/test'

test('Alert popup', async({page})=>{

    await page.goto('https://senthilsmartqahub.blogspot.com/2026/03/smart-shop-checkout.html')

    // Approach 1: Using page.on('dialog') event listener to handle the alert popup
    // page.on('dialog', async dialog=>{
    //     console.log(dialog.message())
    //     console.log(dialog.type())
    //     await page.waitForTimeout(5000)
    //     dialog.accept()
    // })
    
    const alert = page.getByText('Proceed To Payment')
    await alert.click()

    // Approach 2: Using page.waitForEvent() method to handle the alert popup
    // const dialog = await page.waitForEvent('dialog')

    // console.log(dialog.message())
    // console.log(dialog.type())
    // await page.waitForTimeout(3000)
    // await dialog.accept()
    await page.waitForTimeout(3000)
})