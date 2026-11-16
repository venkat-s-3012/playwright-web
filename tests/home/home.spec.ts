import { from } from "node:stream/iter";
import { valid } from "../../test-data/login.data";
import { Page } from "@playwright/test";
import {test} from '../../fixtures/fixtures'



test.describe('HomePage Validations', ()=>{

    test.beforeEach(async ({page, login}) => {
    });

    test('@smoke - Verify navigation of explore event btn', async({page, homePage})=>{
        await homePage.clickExploreBtn();
        await page.waitForLoadState('load')
    })

})