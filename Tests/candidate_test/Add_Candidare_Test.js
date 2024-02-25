import { ClientFunction, t, Selector } from 'testcafe';
import add_candidate_Page from '../../Pages/candidate_pages/Add_Candidate_Page';
import HomePage from '../../Pages/HomePage';
import LoginPage from '../../Pages/LoginPage';
import { path } from 'pdfkit';

const dataset = require('../../data/addcandidate_personal_info.json')
const url = 'http://15.156.242.8/login'
const getURL = ClientFunction(() => window.location.href);

fixture('Add Candidate Page').page(url).skipJsErrors(true);

dataset.forEach(data => {
    console.log(data)
    test(`Login to Admin and navigate to add candidate page - ${data.expectedResult}`, async t => {
        LoginPage.SetUserName('sushobhan123');
        LoginPage.SetPassword('Password@1234');
        LoginPage.ClickonLoginButton();
        await t.wait(2000);
        add_candidate_Page.Click_Candidates();
        await t.wait(2000);
        await t.expect(add_candidate_Page.candidate_pageheading.innerText).contains('All Candidates');
        add_candidate_Page.Add_Candidate_Button();
        await t.wait(2000);
        await t.expect(add_candidate_Page.add_candidate_pageheading.innerText).contains('Add Candidate');
        //await t.typeText(Selector('#first-name'),data.firstname)



        add_candidate_Page.SetFirstName(data.firstname);

        add_candidate_Page.SetLastName(data.lastname);
        add_candidate_Page.SetPhNo(data.ph_no);
        add_candidate_Page.SetEmail(data.email);
        //add_candidate_Page.SetCountryClick();
        //add_candidate_Page.SetCountrySearch(data.country);

        await add_candidate_Page.SetCountrySearchClick(data.country);
        await add_candidate_Page.SetState_Search_Click(data.state);
        await add_candidate_Page.SetCity_Search_Click(data.city);
        add_candidate_Page.Setlocality(data.locality);

        /*await t.click('#select2-country-container');
        await t.typeText('body > span > span > span.select2-search.select2-search--dropdown > input','India');
        await t.click(Selector('.select2-results__options').withText('India'));
        await t.click('#select2-state-container');
        await t.typeText('body > span > span > span.select2-search.select2-search--dropdown > input','India');
        await t.click(Selector('.select2-results__options').withText('India'));*/
        add_candidate_Page.SaveNext_Button();
        await t.takeScreenshot({
            path: `Test_Screensot ${data.expectedResult}.png`,
            fullPage: true
        });
        //await t.expect(add_candidate_Page.data_created.innerText).contains(data.expectedResult);


        // work history section 
        add_candidate_Page.Click_Workhistory();
        // add_candidate_Page.Set_Company(data.comapny_name);
        //   add_candidate_Page.Set_Jobtitle(data.job_title);
        // await add_candidate_Page.Select_Employment_Type(data.employment_type);


        //add_candidate_Page.SetFirstName(data.firstname);
        //await t.wait(2000)

    })
});




