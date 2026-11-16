import{Locator, Page} from '@playwright/test';
import { BasePage } from './base.page';


export class EventPage extends BasePage{

    readonly addEventBtn: Locator;

    constructor(page: Page){
        super(page)

        this.addEventBtn = page.getByRole('button', {name: 'Add New Event'})

    }

    async expectAddEventBtnVisible():Promise<void>{
        await this.expectVisible(this.addEventBtn)

    }

    async navigateToNewEventForm():Promise<void>{
        await this.doClick(this.addEventBtn)
    }




}