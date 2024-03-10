import { ClientFunction, t, Selector } from 'testcafe';


class Add_Jobs_Page {

    constructor() {
        this.click_jobs = Selector('body > div > aside.main-sidebar.sidebar-dark-primary.elevation-4 > div > div.os-padding > div > div > nav > ul > li:nth-child(4) > a');
        this.add_job_btn = Selector('#topIconPanel > a > span')
        this.job_title = Selector('#job-title')
        this.click_company = Selector('#select2-company_id-container')
        this.company_search = Selector('body > span > span > span.select2-search.select2-search--dropdown > input')
        this.country_search_click = Selector('#select2-company_id-results > li')

        this.job_description_selection = Selector('#description_ifr')
        this.job_description = Selector('body#tinymce')
        this.submit = Selector('#submit')
        this.table_data = Selector('#jobDatatable')

    }
    async Click_Jobs() {
        await t.click(this.click_jobs);
    }
    async Click_AddJobs() {
        await t.click(this.add_job_btn);
    }
    async Job_Title(title) {
        await t.typeText(this.job_title, title)
    }
    async SetCompanySearchClick(search_company) {
        await t.click(this.click_company);
        await t.typeText(this.company_search, search_company);
        await t.click(this.country_search_click.withText(search_company));
    }
    async SetjobDescription(jobdescription_value) {
        const iframeSelector = this.job_description_selection
        await t
            .switchToIframe(iframeSelector)
            .typeText(this.job_description, jobdescription_value)
            .switchToMainWindow()
            .wait(5000);
    }
    async Click_Submit() {
        await t.click(this.submit);
        await t.wait(5000);
    }
}

export default new Add_Jobs_Page();