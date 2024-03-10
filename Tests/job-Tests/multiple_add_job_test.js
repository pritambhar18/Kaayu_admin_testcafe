//Add jobs multiple time
import { ClientFunction, t, Selector } from 'testcafe';
import LoginPage from '../../Pages/LoginPage';
import Add_jobs_Pages from '../../Pages/job_pages/Add_jobs_Pages';

fixture('Getting Started').page('https://staging.kaayu.ca/login').skipJsErrors(true);

test('Add 10 Jobs', async t => {
    // Login
    await LoginPage.SetUserName('sushobhan123');
    await LoginPage.SetPassword('Password@1234');
    await LoginPage.ClickonLoginButton();
    await Add_jobs_Pages.Click_Jobs();
    // Add 10 Jobs
    for (let i = 1; i <= 10; i++) {
        await Add_jobs_Pages.Click_AddJobs();

        // Set Job Title with incremental number
        const jobTitle = `Software Tester`;
        await Add_jobs_Pages.Job_Title(`${jobTitle}${i}`);

        // Select company
        await Add_jobs_Pages.SetCompanySearchClick('Ward and Sons');
        await Add_jobs_Pages.SetjobDescription(`Description for ${jobTitle}`);
        await Add_jobs_Pages.Click_Submit();

        // Set Job Description inside iframe
        /*const iframeSelector = Selector('#description_ifr');
        await t
            .switchToIframe(iframeSelector)
            .typeText('body#tinymce', `Description for ${jobTitle}`)
            .switchToMainWindow()
            .wait(5000);

        await t.click('#submit');
        await t.wait(5000);*/
    }
});