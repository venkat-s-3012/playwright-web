import{test, expect} from '@playwright/test'



test('Handling Multi Windows', async({page})=>{

    await page.goto('https://vinothqaacademy.com/multiple-windows/')

    await page.waitForTimeout(3000)

    await page.locator('#button1').first().click()

    await page.waitForTimeout(3000)

    const totalPage = await page.context().pages();
    console.log(totalPage.length)
    
    let newPage
    for (const p of totalPage)
    {
        const title = await p.title()
        console.log(title)

        if(title.includes('V-Tech Solutions'))
            newPage=p

    }

    await newPage?.locator('#addBtn').first().click()

    await page.waitForTimeout(3000)

})