import page from './POM';
import { data } from './data';
import { constants } from './constants';
import { ClientFunction } from 'testcafe';
import { Selector } from 'testcafe';

fixture('Performing Tests for Home Module')
    .page ('http://automationpractice.com');

//VARIABLES
let getLocation;
let counter = 0;

//TEST 01
test('Validate each link in Banner takes to a different page',async t =>
{
    await t
        //Maximizing the Screen
        .maximizeWindow()

        //Validating the url belongs to HOME Page
        getLocation = ClientFunction(() => document.location.href);
    await t
        .expect(getLocation()).notContains(constants.url_categories)


    await t
        //Navigating to WOMENS page
        .click(page.bnr_Women)

        //Validating the url belongs to WOMENS Page
        getLocation = ClientFunction(() => document.location.href);
    await t
        .expect(getLocation()).contains(constants.url_women)


    await t
        //Navigating to DRESSES page
        .click(page.bnr_Dresses)

        //Validating the url belongs to DRESSES Page
         getLocation = ClientFunction(() => document.location.href);
    await t
        .expect(getLocation()).contains(constants.url_dresses)


    await t
        //Navigating to TSHIRTS page
        .click(page.bnr_Tshirts)

        //Validating the url belongs to TSHIRTS Page
        getLocation = ClientFunction(() => document.location.href);
    await t
        .expect(getLocation()).contains(constants.url_tshirt)

});

//TEST 02
test('Testing Banner links has the same order in all pages', async t =>
{
    await t
        //Maximizing the Screen
        .maximizeWindow()

    await t
        //Validating arrangement of links in Banner at HOME Page
        .expect(page.bnr_Women.innerText).eql('WOMEN')
        .expect(page.bnr_Dresses.innerText).eql('DRESSES')
        .expect(page.bnr_Tshirts.innerText).eql('T-SHIRTS')
        .takeScreenshot()
    
    await t
        //Navigating to WOMENS page
        .click(page.bnr_Women)

    await t
        //Validating arrangement of links in Banner at WOMENS Page
        .expect(page.bnr_Women.innerText).eql('WOMEN')
        .expect(page.bnr_Dresses.innerText).eql('DRESSES')
        .expect(page.bnr_Tshirts.innerText).eql('T-SHIRTS')
        .takeScreenshot()

     await t
        //Navigating to DRESSES page
        .click(page.bnr_Dresses)

    await t
        //Validating arrangement of links in Banner at DRESSES Page
        .expect(page.bnr_Women.innerText).eql('WOMEN')
        .expect(page.bnr_Dresses.innerText).eql('DRESSES')
        .expect(page.bnr_Tshirts.innerText).eql('T-SHIRTS')
        .takeScreenshot()

    await t
        //Navigating to TSHIRTS page
        .click(page.bnr_Tshirts)

    await t
        //Validating arrangement of links in Banner at TSHIRTS Page
        .expect(page.bnr_Women.innerText).eql('WOMEN')
        .expect(page.bnr_Dresses.innerText).eql('DRESSES')
        .expect(page.bnr_Tshirts.innerText).eql('T-SHIRTS')
        .takeScreenshot()
});

//TEST 03
test('Test that the logo takes to home page', async t =>
{
    await t
        //Maximizing the Screen
        .maximizeWindow()

        //Validating the url belongs to HOME Page
        getLocation = ClientFunction(() => document.location.href);
    await t
        .expect(getLocation()).notContains(constants.url_categories)


    //CHECKING FROM WOMENS PAGE
    await t
        //Navigating to WOMENS page
        .click(page.bnr_Women)

        //Validating the url belongs to WOMENS Page
        getLocation = ClientFunction(() => document.location.href);
    await t
        .expect(getLocation()).contains(constants.url_women)

    await t
        //Clicking in the Logo
        .click(page.lnk_Logo)

        //Validating the url belongs to HOME Page
        getLocation = ClientFunction(() => document.location.href);
    await t
        .expect(getLocation()).notContains(constants.url_categories)


    //CHECKING FROM DRESSES PAGE
    await t
        //Navigating to DRESSES page
        .click(page.bnr_Dresses)

        //Validating the url belongs to DRESSES Page
         getLocation = ClientFunction(() => document.location.href);
    await t
        .expect(getLocation()).contains(constants.url_dresses)

    await t
        //Clicking in the Logo
        .click(page.lnk_Logo)

        //Validating the url belongs to HOME Page
        getLocation = ClientFunction(() => document.location.href);
    await t
        .expect(getLocation()).notContains(constants.url_categories)


    //CHECKING FROM TSHIRTS PAGE
    await t
        //Navigating to TSHIRTS page
        .click(page.bnr_Tshirts)

        //Validating the url belongs to TSHIRTS Page
        getLocation = ClientFunction(() => document.location.href);
    await t
        .expect(getLocation()).contains(constants.url_tshirt)

    await t
        //Clicking in the Logo
        .click(page.lnk_Logo)

        //Validating the url belongs to HOME Page
        getLocation = ClientFunction(() => document.location.href);
    await t
        .expect(getLocation()).notContains(constants.url_categories)
});

//TEST 04
test('Perform search with Non-Existing Item', async t =>
{
    await t
        //Maximizing the Screen
        .maximizeWindow()

    await t
        //Entering an Invalid Search Term and click Search Icon
        .typeText(page.txt_SearchBox,data.nonExistingItem)
        .click(page.btn_SearchIcon)

    await t
        //Expect an error indicatign that there are no results
        .expect(await page.msg_NoResults.exists).ok()
});

//TEST 05
test('Perform search with Existing Items', async t =>
{
    await t
        //Maximizing the Screen
        .maximizeWindow()

    await t
        //Entering an Valid Search Term and click Search Icon
        .typeText(page.txt_SearchBox,data.existingItem01)
        .click(page.btn_SearchIcon)

    await t
        .takeScreenshot()

        counter = await Selector('#center_column > ul > li').count;
        //counter = page.msc_ResultsArea.count;

    await t
        //Validating the Total Count is 1
        .expect(counter).eql(constants.int_expect001);


    await t
        .wait(3000)

    await t
        //Entering an Valid Search Term and click Search Icon
        .typeText(page.txt_SearchBox,data.existingItem02, {replace: true})
        .click(page.btn_SearchIcon)

    await t
        .takeScreenshot()

        counter= await Selector('#center_column > ul > li').count;
        //counter = page.msc_ResultsArea.count;

    await t
        //Validating the Total Count is 7
        .expect(counter).eql(constants.int_expect007);



        /*
const smthg = Selector('.smthg');
t.expect(smthg.count).eql(3);

const osCount = Selector('.column.col-2 label').count;
await t.expect(osCount).eql(3);

const iframeAmount = await Selector('#leader-iframes iframe').count;
console.log('LeaderElection(' + methodType + ') still no success (' + iframeAmount + ' iframes left)');

        */

});