import { from } from "node:stream/iter";
import { valid } from "../testData/login.data";
import { Page } from "@playwright/test";
import {test} from '../fixtures/fixtures'



test.describe('Worker Fixture Validations', ()=>{

    // Requests the worker fixture once for this describe (no need to list it in every test)
    test.beforeEach(async ({ workerScope }) => {})

    test('Verify Home Page Title', async()=>{
        console.log('Home Title present')
    })

    test('Verify Browse Event Text', async()=>{
        console.log('Browse Events')
    })

    test('Verify Book now button text', async()=>{
        console.log('Book Now')
    })

    test('Verify My Bookings button text', async()=>{
        console.log('My Bookings')
    })

    test('Veify featutred Events', async()=>{
        console.log('Dilli Diwali Mela')
    })

})