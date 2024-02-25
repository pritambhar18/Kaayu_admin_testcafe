import { ClientFunction, t, Selector } from 'testcafe';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';


const url = 'https://staging.kaayu.ca/login'
const getURL = ClientFunction(() => window.location.href);

fixture('Login Page').page(url).skipJsErrors(true);

test('Loading login Page', async t => {

    await t.expect(getURL()).contains(url);
    await t.expect(LoginPage.loginBtn.exists).ok();

});

test('Form -Successfully Login', async t => {

    LoginPage.SetUserName('pritam123');
    LoginPage.SetPassword('12345678');
    LoginPage.ClickonLoginButton();
    await t.expect(HomePage.pageheading.innerText).contains('Dashboard');
});

test('Form -UnSuccessfully Login with small password', async t => {

    LoginPage.SetUserName('Test');
    LoginPage.SetPassword('jhgggg');
    LoginPage.ClickonLoginButton();
    await t.expect(LoginPage.responceCard.innerText).contains('The password must be at least 8 characters.');


});

test('Form -UnSuccessfully Login with wrong credentials', async t => {

    LoginPage.SetUserName('Test');
    LoginPage.SetPassword('jhgggggggfdgg');
    LoginPage.ClickonLoginButton();

    await t.expect(LoginPage.unsuccessfullmsz.innerText).contains('Invalid login credentials.');




});

