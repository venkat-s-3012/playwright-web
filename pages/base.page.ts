import { th, ur } from "@faker-js/faker";
import { Page , Locator, expect} from "@playwright/test";
import path from "node:path";


export class BasePage {

    constructor(protected page :Page){
    }

    async navigateToUrl(url:string){
        await this.page.goto(url)
    }

    async getTitle():Promise<string>{
        return await this.page.title();
    }

    async fullScreen(width_value: number, height_value: number){
        await this.page.setViewportSize({width: width_value, height: height_value})

    }

    async fillInput(locator: Locator, value:string){
        await locator.fill(value);
    }

    async clearInput(locator:Locator){
        await locator.clear();

    }

    async doClick(locator: Locator){
        await locator.click();
    }

    async getText(locator: Locator):Promise<string | null>{
        return await locator.textContent();
    }

    async getInputValue(locator:Locator){
        await locator.inputValue();

    }

    async expectVisible(locator: Locator):Promise<void>{
        await expect(locator).toBeVisible();
    }

    async takeScreenshot(name:string){
        await this.page.screenshot({path: `./screenshots/${name}`})
    }

    async waitForElement(locator: Locator){
        await locator.waitFor({state: 'visible'})

    }

    async uploadFiles(fileName: string[]){
        await this.page.on('filechooser', async file=>{
            file.setFiles([`downloads/${fileName}`])
        })

    }

    async scrollToElement(locator: Locator):Promise<void>{
        await locator.scrollIntoViewIfNeeded();

    }

    async setOffline(network: boolean):Promise<void>{
        await this.page.context().setOffline(!network)

    }
}