import{test, expect} from '@playwright/test'

test('file upload', async({page})=>{

    await page.goto('https://senthilsmartqahub.blogspot.com/2026/03/jobapplicationform.html')

    const uploadeFileTitle = page.getByText('Upload Resume:', {exact: true}).first()
    await uploadeFileTitle.scrollIntoViewIfNeeded()

    const uploadFileBtn = page.locator('#resume')
    await uploadFileBtn.setInputFiles('downloads/playwright-notes.pdf')
    //await uploadFileBtn.setInputFiles(['downloads/playwright-notes.pdf', 'downloads/playwright-notes-1.pdf']) //To upload multiple files

    // Clear Upload files
    //await page.waitForTimeout(3000)
    //await uploadFileBtn.setInputFiles([])

    await page.waitForTimeout(3000)

})

// File Upload using page.on approach
test('Upload file when no type attribute', async ({page})=>{

    await page.goto('https://senthilsmartqahub.blogspot.com/2026/03/update-profile-photo.html')

    await page.on('filechooser', async file=>{

        file.setFiles('downloads/funny-image.png')
    })

    page.locator('.uploadBtn').click()

    // const file = await page.waitForEvent('filechooser')

    // await file.setFiles('downloads/funny-image.png')

    await page.waitForTimeout(3000)

})