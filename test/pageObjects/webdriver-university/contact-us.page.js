import BasePage from "./BasePage"
import DataGenerator from "../../../utils/data-generator";

class ContactUsPage extends BasePage{
    open() {
        return super.open("/Contact-Us/contactus.html");
    }
    get inputFirstName() {
        return $('//input[@name="first_name"]');
    }
    get inputLastName() {
        return $('//input[@name="last_name"]');
    }
    get inputEmail() {
        return $('//*[@name="email"]');
    }
    get inputMsg() {
        return $('//*[@name="message"]');
    }
    get submitBtn() {
        return $('//input[@value="SUBMIT"]');
    }
    get successMsg() {
        return $("#contact_reply > h1");
    }
    get unsuccessMsg() {
        return $("body");
    }

    async submitForm(firstName,lastName, email, msg) {
        await this.inputFirstName.setValue(firstName);
        await this.inputLastName.setValue(lastName);
        await this.inputEmail.setValue(email);
        await this.inputMsg.setValue(msg);
        await this.submitBtn.click();
    }
    async submitRandomData() {
        await this.inputFirstName.setValue(DataGenerator.generateRandomStrings());
        await this.inputLastName.setValue(DataGenerator.generateRandomStrings());
        await this.inputEmail.setValue("AutoEmail_" + DataGenerator.generateRandomStrings() + "@gmail.com");
        await this.inputMsg.setValue("Random Message " + DataGenerator.generateRandomStrings());
        await this.submitBtn.click();
    }
}

export default new ContactUsPage();