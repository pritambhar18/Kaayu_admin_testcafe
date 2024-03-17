import { ClientFunction, t, Selector } from 'testcafe';
import LoginPage from '../../Pages/LoginPage';
import Add_jobs_Pages from '../../Pages/job_pages/Add_jobs_Pages';

const dataset = require('../../data/jobs.json')
fixture('Add job & check exist or not').page('https://staging.kaayu.ca/login').skipJsErrors(true)


dataset.forEach(data => {
    test(`Add job & check - ${data.expectedResult}`, async t => {

        //1.Login
        //For class we use .   for id we use #
        await LoginPage.SetUserName('sushobhan123');
        await LoginPage.SetPassword('Password@1234');
        await LoginPage.ClickonLoginButton();
        await Add_jobs_Pages.Click_Jobs();
        await Add_jobs_Pages.Click_AddJobs();
        await Add_jobs_Pages.Job_Title(data.job_title)
        await Add_jobs_Pages.SetCompanySearchClick(data.company);
        await Add_jobs_Pages.SetjobDescription(data.job_description);
        await Add_jobs_Pages.Click_Submit();


        /* tooltip handel for the job list section */ 

        const tooltipSelector = Selector('.jobs_show span');
        await t.hover(tooltipSelector);
        //console.log('tooltip',tooltipSelector.textContent)
        const tooltipAttributeValue = await tooltipSelector.getAttribute('data-bs-original-title');

        console.log('Tooltip Attribute Value:', tooltipAttributeValue);
        await t.expect(tooltipAttributeValue).eql(data.job_title)
            .then(() => {
                console.log(`data is added successfully in the list. Expected job title:${tooltipAttributeValue} , Actual Job title;${data.job_title}`);
            })
            .catch(error => {
                console.error(`data is not added successfully in the list. Expected job title:${tooltipAttributeValue} , Actual Job title;${data.job_title}. Error: ${error}`);
            })




    })
})




