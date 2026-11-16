import{test, expect} from '@playwright/test'
import { faker } from '@faker-js/faker'


test('Generating Faker Data', async({page})=>{

    console.log(faker.person.firstName())
    console.log(faker.person.lastName())
    console.log(faker.person.gender())

})