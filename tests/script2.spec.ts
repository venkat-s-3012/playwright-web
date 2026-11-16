import{test, expect} from '@playwright/test'


test('validating dropdown', async({page})=>{

    await page.goto("https://www.amazon.in/")

    await page.waitForTimeout(2000)

    const dropdown = page.locator("#searchDropdownBox")
    await dropdown.selectOption('Apps & Games')
    
    await page.waitForTimeout(5000)

})

test('validating hover', async({page})=>{

    await page.goto("https://www.alibaba.com/")

    await page.waitForTimeout(2000)

    await page.locator('.tab-title').first().hover()

    await page.waitForTimeout(2000)

    await page.getByText('Sports & Entertainment').click()

    await page.waitForTimeout(5000)
})

test('right click', async({page})=>{

    await page.goto('https://senthilsmartqahub.blogspot.com/2025/01/login-page.html')

    await page.getByRole('button', {name:'Login'}).click({button: 'right'})

    console.log('Right click completed');
})

test('scroll to find element', async({page})=>{

    await page.goto('https://greatergoods.com/')

    await page.waitForTimeout(2000)

    const googleBtn = page.getByRole('button', {name:' SHOP HEALTH '})

    await googleBtn.scrollIntoViewIfNeeded();

    await page.waitForTimeout(3000)

})