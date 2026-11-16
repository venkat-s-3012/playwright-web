import {test} from '../fixtures/fixtures'
import { EventPage } from '../pages/event.page';

test.describe('Events Page', ()=>{

    let eventPage: EventPage;

    test.beforeEach(async({page, login, homePage})=>{
        eventPage = new EventPage(page)
        homePage.clickExploreBtn();
    })

    test('Verify AddEvent Button is visible', async({page})=>{
        await eventPage.expectAddEventBtnVisible();
    })

    test('Verify navigation of AddEvent btn', async({page})=>{
        await eventPage.navigateToNewEventForm();
    })




})