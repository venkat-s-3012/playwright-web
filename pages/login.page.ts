import{Page, Locator} from '@playwright/test';
import { BasePage } from './base.page';

export class LoginPage extends BasePage{

    readonly email_field: Locator;
    readonly password_field: Locator;
    readonly login_btn: Locator;
    readonly login_error: Locator;


    constructor(page: Page){
        super(page);

        this.email_field = page.getByRole('textbox', {name: 'email'});
        this.password_field = page.getByRole('textbox', {name: 'password'});
        this.login_btn = page.getByText('Sign In', {exact: true});
        this.login_error = page.getByText('Invalid email or password', {exact: true})

    }

    async login(email: string, password:string): Promise<void>{
        await this.fillInput(this.email_field, email)
        await this.fillInput(this.password_field, password)
        await this.doClick(this.login_btn)
    }

    async expectLoginError():Promise<void>{
        await this.expectVisible(this.login_error);
    }

    async expectEmailFieldVisible():Promise<void>{
        await this.expectVisible(this.email_field)
    }

    async expectPasswordFieldVisible():Promise<void>{
        await this.expectVisible(this.password_field)
    }

    async getLoginErrorMessage(){
        return await this.getText(this.login_error);
    }

}