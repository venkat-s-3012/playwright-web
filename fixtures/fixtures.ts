import{test as base, expect} from '@playwright/test'
import { valid } from '../test-data/login.data'
import { LoginPage } from '../pages/login.page'
import { HomePage } from '../pages/home.page'
import { EventPage } from '../pages/event.page'
import { tr } from '@faker-js/faker'

type MyFixtures = {
    login: LoginPage;
    loginPage: LoginPage;
    homePage: HomePage;
    eventPage: EventPage
}

type MyWorkerFixture = {
    workerScope: string;
}

export const test = base.extend<MyFixtures, MyWorkerFixture>({

    login: async({page}, use)=>{

        const loginPage = new LoginPage(page)
        await loginPage.navigateToUrl('/login')
        await loginPage.fullScreen(1512, 949);
        await loginPage.login(valid.email, valid.password);

        const home = new HomePage(page);
        await home.expectHomeTabVisible();

        await use(loginPage)

        await home.logOut();
        console.log('Logged out successfully')

    },

    loginPage: async({page}, use)=>{
        await use(new LoginPage(page))
    },

    homePage: async({page}, use)=>{
        await use(new HomePage(page))
    },

    eventPage: async({page}, use)=>{
        await use(new EventPage(page))
    },

    workerScope: [async({}, use)=>{
        console.log('Create User Profile')

        await use('')

        console.log('Delete Profile')

    }, {scope: 'worker'}]

})

export{expect} from '@playwright/test'


































