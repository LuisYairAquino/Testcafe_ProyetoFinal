import page from './POM';
import { data } from './data';
import { constants } from './constants';
import { ClientFunction } from 'testcafe';
import { Selector } from 'testcafe';

fixture('Performing Tests for Product List Module')
    .page ('http://automationpractice.com');

//VARIABLES
let getLocation;
let itemDescription;
let forCounter = 0;
let counter = 0;

//TEST 01
test('Open Women, select Dresses, check all listed elements read Dress', async t =>
{
    await t
        //Maximizing the Screen
        .maximizeWindow()

    await t
        //Navigating to WOMENS page
        .click(page.bnr_Women)

        //Validating the url belongs to WOMENS Page
        getLocation = ClientFunction(() => document.location.href);
    await t
        .expect(getLocation()).contains(constants.url_women)

        //Click in the Dresses Link
        .click(page.lnk_Dresses)

        //Get total count of elements in Results Area
        counter = await Selector('#center_column > ul > li').count;
    await t
        .takeElementScreenshot('#center_column > ul')
        //Validating the Total Count is 5
        .expect(counter).eql(constants.int_expect005);

    for(forCounter = 1; forCounter <= constants.int_expect005; forCounter++)
    {
        itemDescription = await Selector ('#center_column > ul > li:nth-child(' + forCounter + ') > div > div.right-block > h5 > a').getAttribute('title');
        //itemDescription = await Selector ('#center_column > ul > li:nth-child(' + forCounter + ') > div > div.right-block > h5 > a').innerText;
        
        //Validate Item Description contains the expected substring
        await t
            .expect(itemDescription).contains('Dress',' ' + itemDescription + ' contains the substring Dress')
    }
 });

//TEST 02
test('Hover Women, Hover top, select Tshirts, check all listed elements read Tshirts', async t =>
{
    await t
        //Maximizing the Screen
        .maximizeWindow()
        //Hovering WOMEN link in Banner
        .hover(page.bnr_Women)
        .takeScreenshot()
        .wait(2000)
        //Click on T-shirt links under WOMEN section
        .click(page.lnk_Tshirts)

    //Get total count of elements in Results Area
    counter = await Selector('#center_column > ul > li').count;
    await t
        .takeElementScreenshot('#center_column > ul')
        //Validating the Total Count is 1
        .expect(counter).eql(constants.int_expect001);
            
    for(forCounter = 1; forCounter <= constants.int_expect001; forCounter++)
    {
        itemDescription = await Selector ('#center_column > ul > li:nth-child(' + forCounter + ') > div > div.right-block > h5 > a').getAttribute('title');
        //itemDescription = await Selector ('#center_column > ul > li:nth-child(' + forCounter + ') > div > div.right-block > h5 > a').innerText;
        
        //Validate Item Description contains the expected substring
        await t
            .expect(itemDescription).contains('T-shirts',' ' + itemDescription + ' contains the substring T-shirts')
    }
});


//TEST 03
test('Open Dresses, perform validations over first Item', async t =>
{
    await t
        //Maximizing the Screen
        .maximizeWindow()

        //Validating the url belongs to HOME Page
        getLocation = ClientFunction(() => document.location.href);
    await t
        .expect(getLocation()).notContains(constants.url_categories)

        await t
        //Navigating to DRESSES page
        .click(page.bnr_Dresses)

        //Validating the url belongs to DRESSES Page
         getLocation = ClientFunction(() => document.location.href);
    
    await t
        //Take a screenshot from the current Item in the Results area
        .takeElementScreenshot('#center_column > ul > li:nth-child(1)')
        //Validate Add to Cart button is not visible
        .expect(page.lnk_ItemAddtoCart.visible).notOk()
        //Validate More button is not visible
        .expect(page.lnk_ItemMore.visible).notOk()
        //Hovering over the current Item in the Results area
        .hover('#center_column > ul > li:nth-child(1)')
        //Take a screenshot from the current Item in the Results area
        .takeElementScreenshot('#center_column > ul > li:nth-child(1)')
        //Validate Add to Cart button is visible when mouse is over the Item
        .expect(page.lnk_ItemAddtoCart.visible).ok()
        //Validate More button is visible when mouse is over the Item
        .expect(page.lnk_ItemMore.visible).ok()
});
/*
Open Dresses, Compare Dresses
Open Dresses, Remove Dresses from compare
 */