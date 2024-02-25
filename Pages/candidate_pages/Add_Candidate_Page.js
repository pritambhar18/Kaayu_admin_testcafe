import { ClientFunction, t, Selector } from 'testcafe';


class Add_Candidate_Page {

    constructor() {

        //navigate to add candidate form 
        this.click_candidates = Selector('body > div.wrapper > aside.main-sidebar.sidebar-dark-primary.elevation-4 > div > div.os-padding > div > div > nav > ul > li:nth-child(2) > a');
        this.candidate_pageheading = Selector('body > div.wrapper > div.content-wrapper > div.content-header > div > div > div:nth-child(1) > h1');
        this.add_candidate_button = Selector('#topIconPanel > a');
        this.add_candidate_pageheading = Selector('body > div.wrapper > div.content-wrapper > div > div > div > div:nth-child(1) > h1');

        //add candidate Personal Information fields 
        this.first_name = Selector('#first-name');
        this.last_name = Selector('#last-name');
        this.ph_number = Selector('#contact_number');
        this.email_address = Selector('#email-address');
        this.country_click = Selector('#select2-country-container');
        this.country_search = Selector('body > span > span > span.select2-search.select2-search--dropdown > input');
        this.country_search_click = Selector('.select2-results__options');
        this.state = Selector('#select2-state-container');
        this.state_search = Selector('body > span > span > span.select2-search.select2-search--dropdown > input');
        this.state_search_click = Selector('#select2-state-results');
        this.city = Selector('#select2-city-container');
        this.city_search = Selector('body > span > span > span.select2-search.select2-search--dropdown > input');
        this.city_search_click = Selector('#select2-city-results');
        this.locality = Selector('#locality');
        this.savenextbtn = Selector('#personal_info_form > div.text-right > button:nth-child(2)');
        this.data_created = Selector('#swal2-title');


        //add candidate Work History fields
        this.click_workhistory = Selector("body > div.wrapper > div.content-wrapper > section > div > div.card.card-default.work_history_card > div.card-header > div > button");
        this.company_name = Selector('#company-name-0');
        this.job_title = Selector('#job-title-0')
        this.clickemployment_dropdown = Selector('#employment-type-0');
        this.salary = Selector('#salary-0');
        this.work_description = Selector('#work-description-0');


    }

    async Click_Candidates() {
        await t.click(this.click_candidates);
    }

    async Add_Candidate_Button() {
        await t.click(this.add_candidate_button);
    }

    async SetFirstName(FirstName) {
        await t.typeText(this.first_name, FirstName);
    }

    async SetLastName(LastName) {
        await t.typeText(this.last_name, LastName);
    }

    async SetPhNo(PhNo) {
        await t.typeText(this.ph_number, PhNo);
    }

    async SetEmail(Email) {
        await t.typeText(this.email_address, Email);
    }
    /*
    async SetCountryClick() {
        await t.click(this.country_click);
    }
    async SetCountrySearch(search_country) {
        
        await t.typeText(this.country_search,search_country);
    }*/
    async SetCountrySearchClick(search_country) {
        await t.click(this.country_click);
        await t.typeText(this.country_search, search_country);
        await t.click(this.country_search_click.withText(search_country));
    }
    async SetState_Search_Click(search_state) {
        await t.click(this.state);
        await t.typeText(this.state_search, search_state);
        await t.click(this.state_search_click.withText(search_state));
    }
    async SetCity_Search_Click(search_city) {
        await t.click(this.city);
        await t.typeText(this.city_search, search_city);
        await t.click(this.city_search_click.withText(search_city));
    }
    async Setlocality(Locality) {
        await t.typeText(this.locality, Locality);
    }
    async SaveNext_Button() {
        await t.click(this.savenextbtn);
    }

    // work history section 
    async Click_Workhistory() {
        await t.click(this.click_workhistory);
    }
    async Set_Company() {
        await t.typeText(this.company_name);
    }
    async Set_Jobtitle() {
        await t.typeText(this.job_title);
    }

    async Select_Employment_Type(select_employment) {
        await t.click(this.clickemployment_dropdown.find('option').withText(select_employment));

    }










}

export default new Add_Candidate_Page();