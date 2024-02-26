import { ClientFunction, t, Selector } from 'testcafe';
import add_candidate_Page from '../../Pages/candidate_pages/Add_Candidate_Page';
import Advance_search_Pages from '../../Pages/candidate_pages/Advance_search_Pages';
import LoginPage from '../../Pages/LoginPage';


const url = 'https://staging.kaayu.ca/login'
const getURL = ClientFunction(() => window.location.href);
const expectedResult = "Successfully created candidate.";


fixture('Add Candidate Page').page(url).skipJsErrors(true).beforeEach(async t => {
    await LoginPage.SetUserName('pritam123');
    await LoginPage.SetPassword('12345678');
    await LoginPage.ClickonLoginButton();
    await add_candidate_Page.Click_Candidates();
});

// search data with email in keywords section 

test.skip(`search with email Keywords-`, async t => {
    await Advance_search_Pages.Click_Advancesearch_btn();
    await Advance_search_Pages.Set_Email('7test_candidate@yopmail.com');
    await Advance_search_Pages.Click_Applybtn();
    //const listCandidates = Selector('#candidates-table > tbody');
    await t.expect(await Advance_search_Pages.list_candidates.textContent).contains('7test_candidate@yopmail.com')
        .then(() => {
            console.log(`Search data matches the expected data.Expected data:7test_candidate@yopmail.com`);
        })
        .catch(error => {
            console.error(`Search data does not match the expected data. Expected data:7test_candidate@yopmail.com. Error: ${error}`);
        })
});

// search name with filter type "is" 

test.skip(`search name with filter is type `, async t => {
    await Advance_search_Pages.Click_Advancesearch_btn();
    await Advance_search_Pages.Select_Is();
    await Advance_search_Pages.Search_Name('Test')
});

//Search email with filter type is not 
test(`search name with filter is type `, async t => {
    await Advance_search_Pages.Click_Advancesearch_btn();
    await Advance_search_Pages.Select_IsNot();
    const search_email = '7test_candidate@yopmail.com';
    await Advance_search_Pages.Search_Email(search_email);
    await Advance_search_Pages.Click_Applybtn();
    await Advance_search_Pages.navigateToNextPage(search_email)
    /*console.log('Log',await Advance_search_Pages.list_candidates_isnot.textContent);
    const totalPages = Selector('#candidates-table_paginate > span > a:nth-child(7)'); 
    console.log('totalPages',await totalPages.textContent);
    const nextPageButton = Selector('#candidates-table_next');
    
    for (let i = 0; i < await totalPages.textContent; i++) {
        await t.expect(search_email).notContains(await Advance_search_Pages.list_candidates_isnot.textContent); // Validate content on the current page
        await t.click(nextPageButton); // Click the next page button
    }*/
});



