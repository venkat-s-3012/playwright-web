import{Page, Locator} from '@playwright/test'
import { BasePage } from './base.page'
import { th } from '@faker-js/faker';

export class HomePage extends BasePage{

    readonly homeTab: Locator;
    readonly exploreEventBtn: Locator;
    readonly logOutBtn: Locator;

    constructor(page: Page){
        super(page)

    this.homeTab = page.getByText('Home', {exact:true})
    this.exploreEventBtn = page.getByRole('button', {name: 'Explore All Events'})
    this.logOutBtn = page.getByRole('button', {name: 'Logout'})
    }

    async expectHomeTabVisible():Promise<void>{
        await this.expectVisible(this.homeTab)
    }


    async clickExploreBtn(){
        await this.scrollToElement(this.exploreEventBtn)
        await this.doClick(this.exploreEventBtn)
    }

    async logOut():Promise<void>{
        await this.doClick(this.logOutBtn)

    }


    


}