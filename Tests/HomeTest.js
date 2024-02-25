import { ClientFunction, t, Selector } from 'testcafe';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';

const url = 'https://staging.kaayu.ca/login'
const Homeurl = 'https://staging.kaayu.ca/'


const getURL = ClientFunction(() => window.location.href);

fixture('Home Page').page(url).skipJsErrors(true).beforeEach(async t => {
    LoginPage.SetUserName('sushobhan123');
    LoginPage.SetPassword('Password@1234');
    LoginPage.ClickonLoginButton();

    await t.wait(5000);
});

test('Loading Home Page', async t => {

    await t.expect(getURL()).contains(Homeurl);
    await t.expect(HomePage.pageheading.innerText).contains('Dashboard');
});

test('Successfully Logout', async t => {

    HomePage.ClickonLogoutButton();
    await t.wait(5000);

    //await t.expect(Selector('body > div > div > div:nth-child(2) > div > div > div > div.col-lg-6.d-flex.justify-content-center.align-items-center > div > form > button').exists).ok();
    // await t.expect(LoginPage.loginBtn.innerText).contains('Login');

    await t.expect(LoginPage.logoutresponceCard.innerText).contains('Logout successful. Thanks for using Kaayu!');




});
