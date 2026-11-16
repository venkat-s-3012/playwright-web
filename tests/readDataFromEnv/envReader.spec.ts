import{test, expect} from '@playwright/test'
import dotenv from "dotenv"


dotenv.config({path:`test_data/.env.${process.env.appenv}`})




test('Launch site', async({page})=>{

    const appURL = process.env.url as string

    console.log(appURL)

    await page.goto(appURL)
    await page.waitForTimeout(4000)

})