import {test, expect, chromium} from '@playwright/test'

test('Open the app', async ({page})=>{
    // Launch app in chromium
    // const browser = await chromium.launch()
    // const context = await browser.newContext()
    // const page = await context.newPage()

    // Check browser height and width
    // const browser_height = page.viewportSize()?.height;
    // const browser_width = page.viewportSize()?.width;
    // console.log(browser_height, browser_width)

    //Fill text field
    // await page.goto('https://www.facebook.com/')
    // await expect(page).toHaveTitle("Facebook")
    // const email_field = await page.getByRole('textbox', {name: 'email'})
    // const password_field = await page.getByRole('textbox', {name: 'pass'})
    // await email_field.fill('demo@gmail.com')
    // await password_field.fill('password')

    // // get input value
    // const email_input = await email_field.inputValue()
    // //const password_input = await password_field.inputValue()
    // console.log(email_input)
    // //console.log(password_input)


    // Select and unselect Checkbox
    //await page.goto("https://demoqa.com/checkbox/")
    // const checkbox = await page.getByRole('checkbox', {name: 'Select Home'})
    // await checkbox.check()
    // await page.waitForTimeout(3000)
    // await expect(checkbox).toBeChecked()
    // await checkbox.uncheck()
    // await page.waitForTimeout(3000)
    // await expect(checkbox).not.toBeChecked()
    
    // Select radio button
    //await page.goto("https://demoqa.com/radio-button/")
    // const radio_btn = await page.locator('#yesRadio')
    // await radio_btn.check()
    // await page.waitForTimeout(2000)
    // await expect(radio_btn).not.toBeChecked()

    // get Text from element
    // await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    // const login_text = await page.locator(".orangehrm-login-title").textContent()
    // expect(login_text).toBe('Login')

    // get Inner Text
    await page.goto('https://demoqa.com/automation-practice-form')
    const address_text = await page.locator('#currentAddress').innerText()
    console.log(address_text)
    //expect(address_text).toBe('address')

    await page.waitForTimeout(3000)
    // page.close()

})