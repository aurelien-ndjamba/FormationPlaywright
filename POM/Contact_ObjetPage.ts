import {Locator, Page, expect} from '@playwright/test';

export class ContactObjetPage{

name : Locator;
email : Locator;
phone : Locator;
contactSubjet : Locator;
contextArea : Locator;
contactCheckBox  : Locator;
contactSubmitForm : Locator;
contactConfirmMessage : Locator;


    constructor(page:Page){

        this.name =page.getByTestId('name-input');
        this.email = page.getByTestId('email-input');
        this.phone = page.getByTestId('phone-input');
        this.contactSubjet =page.getByTestId('name-input');
        this.contextArea = page.getByTestId('message-textarea');
        this.contactCheckBox = page.getByTestId('terms-checkbox');
        this.contactSubmitForm = page.getByTestId('contact-submit-button');
        this.contactConfirmMessage = page.getByTestId('contact-notification');

    }

    // METHODES

    async fillForm (){
        //ACTION
        await this.name.fill('aurelien');
        await this.email.fill('aurelien@test.com');
        await this.phone.fill('+066666666666');
        await this.contactSubjet.selectOption('feedback');
        await this.contextArea.selectOption('support');
        await this.contactCheckBox.fill('Test message');
        await this.contactSubmitForm.check();
        await expect(this.contactConfirmMessage).toContainText("Message sent successfully! We will get back to you soon.");

    }


}