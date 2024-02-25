// Import necessary TestCafe modules
import { ClientFunction, t, Selector } from 'testcafe';


class LoginPage {

    constructor() {
        this.userNameInput = Selector('#username');
        this.passwordInput = Selector('#password');
        this.loginBtn = Selector('body > div > div > div:nth-child(2) > div > div > div > div.col-lg-6.d-flex.justify-content-center.align-items-center > div > form > button');
        this.responceCard = Selector('#validationServerPasswordFeedback');
        this.unsuccessfullmsz = Selector('body > div > div > div:nth-child(2) > div > div > div > div.col-lg-6.d-flex.justify-content-center.align-items-center > div > div');
        this.logoutresponceCard = Selector('body > div > div > div:nth-child(2) > div > div > div > div.col-lg-6.d-flex.justify-content-center.align-items-center > div > div');
    }


    async SetUserName(userName) {
        await t.typeText(this.userNameInput, userName)
    }

    async SetPassword(password) {
        await t.typeText(this.passwordInput, password)
    }

    async ClickonLoginButton() {

        await t.click(this.loginBtn);
    }

}


export default new LoginPage();
