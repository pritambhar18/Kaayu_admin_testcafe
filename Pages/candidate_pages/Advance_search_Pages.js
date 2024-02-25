import { ClientFunction, t, Selector } from 'testcafe';


class Advance_Search_Page {

    constructor() {

        this.advance_search = Selector('body > div.wrapper > div.content-wrapper > section:nth-child(2) > div > div > div > div.col-md-12.col-lg-10.rightAction.spclBtn > div.btnBlock.rightBlock > span.btn.btn-success');
        this.click_applybtn = Selector('#advancedSearchModal > div > div > div.modal-body > div > div:nth-child(2) > button.btn.btn-primary');
        // keywords search
        this.enter_email = Selector('#search_keywords');
        this.list_candidates = Selector('#candidates-table > tbody td:nth-child(5)');

        //name field and is filter type 
        this.Select_filter_name = Selector('#filter_type_name');
        this.Select_isfiltertype = Selector('#filter_type_name > option:nth-child(1)');
        this.search_name = Selector('#filter_search_name');

        //email field with is not filter type
        this.select_filter_email = Selector('#filter_type_email');
        this.select_isnot_filtertype = Selector('#filter_type_email > option:nth-child(2)');
        this.search_email = Selector('#filter_search_email');
        this.list_candidates_isnot = Selector('#candidates-table > tbody');
        //pagination handle 
        this.nextPageButton = Selector('#candidates-table_next');
        
    }

    async Click_Advancesearch_btn() {
        await t.click(this.advance_search);
    }
    async Set_Email(search_email) {
        await t.typeText(this.enter_email, search_email);
    }
    async Click_Applybtn() {
        await t.click(this.click_applybtn);
    }

    //name field and is filter type 
    async Select_Is() {
        await t
            .click(this.Select_filter_name)
            .click(this.Select_isfiltertype);
    }
    async Search_Name(searchname) {
        await t.typeText(this.search_name);
    }

    //email field with isnot filter type 
    async Select_IsNot() {
        await t
            .click(this.select_filter_email)
            .click(this.select_isnot_filtertype);
    }
    async Search_Email(searchemail) {
        await t.typeText(this.search_email, searchemail);
    }
    async navigateToNextPage(searchemail){
       // const nextPageButton = Selector('#candidates-table_next');
        const lastPageButton = Selector('#candidates-table_last');
        let currentPage = 1;

        do {
            await t.expect(this.list_candidates_isnot.textContent).notContains(searchemail)
            .then(() => {
                console.log(`Search data matches the expected data.Expected data:${searchemail}`);
            })
            .catch(error => {
                console.error(`Search data does not match the expected data. Expected data:${searchemail}. Error: ${error}`);
            })
            await t.click(this.nextPageButton);
            currentPage++;
        }
        while (!(await lastPageButton.hasClass('disabled')));
        console.log('attribute',await lastPageButton.getAttribute('class'));
        }
    

}

export default new Advance_Search_Page();