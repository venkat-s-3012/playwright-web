import{test, expect} from '@playwright/test'

import{parse} from 'csv-parse/sync'
import fs from 'fs'

const csv_data = parse<Record<string, string>>(fs.readFileSync('test_data/data.csv'),{
    columns:true,
    skip_empty_lines:true,
    skip_records_with_empty_values:true
});



test('Reading Data from csv', async({page})=>{

    console.log(csv_data[0].Name)
    console.log(csv_data[0].Age)
    console.log(csv_data[1].Name)
    console.log(csv_data[1].Age)

    await page.goto('https://vinothqaacademy.com/demo-site/')

    await page.locator('#vfb-5').first().fill(csv_data[0].Name)
    await page.locator('#vfb-7').first().fill(csv_data[1].Name)
    await page.locator('#vfb-13-country').first().selectOption({label:csv_data[0].Country})

    await page.waitForTimeout(3000)
    
})