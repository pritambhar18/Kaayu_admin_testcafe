import { ClientFunction, t, Selector } from 'testcafe';
import add_candidate_Page from '../../Pages/candidate_pages/Add_Candidate_Page';
import HomePage from '../../Pages/HomePage';
import LoginPage from '../../Pages/LoginPage';
//import { path } from 'pdfkit';

//const dataset = require('../../data/addcandidate_personal_info.json')
const url = 'https://staging.kaayu.ca/login'
const getURL = ClientFunction(() => window.location.href);
const expectedResult = "Successfully created candidate.";

fixture('Add Candidate Page').page(url).skipJsErrors(true);


test(`Login to Admin and navigate to add candidate page -`, async t => {

    LoginPage.SetUserName('sushobhan123');
    LoginPage.SetPassword('Password@1234');
    LoginPage.ClickonLoginButton();
    /*await t.wait(2000);
    add_candidate_Page.Click_Candidates();
    await t.wait(2000);
    await t.expect(add_candidate_Page.candidate_pageheading.innerText).contains('All Candidates');
    add_candidate_Page.Add_Candidate_Button();
    await t.wait(2000);
    await t.expect(add_candidate_Page.add_candidate_pageheading.innerText).contains('Add Candidate');*/

    for (let i = 6; i <= 7; i++) {
        add_candidate_Page.Click_Candidates();
        await t.wait(2000);
        await t.expect(add_candidate_Page.candidate_pageheading.innerText).contains('All Candidates');
        add_candidate_Page.Add_Candidate_Button();
        await t.wait(2000);
        await t.expect(add_candidate_Page.add_candidate_pageheading.innerText).contains('Add Candidate');
        const firstname = 'Test candidate';
        add_candidate_Page.SetFirstName(`${firstname}${i}`);
        add_candidate_Page.SetLastName('Test last name');
        const phno = '0198765432';
        add_candidate_Page.SetPhNo(`${phno}${i}`);
        const email = 'test_candidate@yopmail.com';
        add_candidate_Page.SetEmail(`${i}${email}`);
        await add_candidate_Page.SetCountrySearchClick('India');
        await add_candidate_Page.SetState_Search_Click('West Bengal');
        await add_candidate_Page.SetCity_Search_Click('Kolkata');
        add_candidate_Page.Setlocality('Dn 51 , Merline Infinite building');
        add_candidate_Page.SaveNext_Button();
        await t.expect(add_candidate_Page.data_created.innerText).contains(expectedResult);
        await t.wait(2000);
    }

});
