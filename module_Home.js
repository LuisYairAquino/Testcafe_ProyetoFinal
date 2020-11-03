import page from './POM';
import { data } from './data';
import { ClientFunction } from 'testcafe';

fixture('Performing Tests for Home Module')
    .page ('http://automationpractice.com');

//TEST 01
test('Validate each link in Banner takes to a different page',async t =>
{
    await t
        //Maximizing the Screen
        .maximizeWindow()

        //Validating the url belongs to HOME Page
        let getLocation = ClientFunction(() => document.location.href);
    await t
        .expect(getLocation()).notContains('id_category=')
        //.expect(getLocation()).contains('expected-url');


    await t
        //Navigating to WOMENS page
        .click(page.bnr_Women)

        //Validating the url belongs to WOMENS Page
        getLocation = ClientFunction(() => document.location.href);
    await t
        .expect(getLocation()).contains('id_category=3')


    await t
        //Navigating to DRESSES page
        .click(page.bnr_Dresses)

        //Validating the url belongs to DRESSES Page
         getLocation = ClientFunction(() => document.location.href);
    await t
        .expect(getLocation()).contains('id_category=8')


    await t
        //Navigating to TSHIRTS page
        .click(page.bnr_Tshirts)

        //Validating the url belongs to TSHIRTS Page
        getLocation = ClientFunction(() => document.location.href);
    await t
        .expect(getLocation()).contains('id_category=5')

});

//TEST 02
test('Testing Banner links has same order in all pages', async t =>
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