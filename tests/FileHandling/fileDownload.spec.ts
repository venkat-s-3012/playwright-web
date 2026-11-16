import{test, expect} from '@playwright/test'
import { existsSync } from 'node:fs'

test('File Download', async({page})=>{

    await page.goto('https://senthilsmartqahub.blogspot.com/2026/03/employee-documents.html')

    await page.waitForTimeout(3000)

    await page.on('download', async fileDownload=>{

        let filePath = `downloads/${fileDownload.suggestedFilename()}`

        await fileDownload.saveAs(filePath)

        expect(existsSync(filePath)).toBeTruthy()

    })

    await page.getByText('Download').first().click()

    await page.waitForTimeout(3000)


})