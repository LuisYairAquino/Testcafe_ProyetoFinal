import page from './POM';
import { data } from './data';
import { constants } from './constants';
import { ClientFunction } from 'testcafe';
import { Selector } from 'testcafe';

fixture('Performing Tests for Product List Module')
    .page ('http://automationpractice.com');

 //TEST 01
test('Login, select 3 Items, login and proceed to purchase', async t =>
{
    await t
        //Maximizing the Screen
        .maximizeWindow()
        .click(page.lnk_SignIn)

    await t
        //Log into a registered Account
        .typeText(page.txt_RegisteredEmail, data.registeredEmail)
        .expect(page.txt_RegisteredEmail.value).eql(data.registeredEmail)
        .typeText(page.txt_RegisteredPassword, data.password)
        .expect(page.txt_RegisteredPassword.value).eql(data.password)
        .click(page.btn_SignIn)
        .wait(1000)
    
    await t
        //Check user Name in Navigation Bar
        .expect(page.NavBar_Username.innerText).eql(data.firstName + ' ' + data.lastName)
        .expect(page.NavBar_Username.exists).ok()
        .takeScreenshot()


        await t
        //Navigating to WOMENS page
        .click(page.bnr_Women)

    await t
        //Hovering over the first Item in the Results area
        .hover(page.are_Item1)
        //Validate Add to Cart button is visible when mouse is over the Item
        .expect(page.lnk_Item1AddtoCart.visible).ok()
        .wait(500)
        //Click 'Add to Cart'
        .click(page.lnk_Item1AddtoCart)
        .wait(500)
        //Validate 'Continue Shopping' and 'Proceed to Checkout' are visible
        .expect(page.btn_ContinueShopping.visible).ok()
        .expect(page.btn_ProceedtoCheckout.visible).ok()
        //Click 'Continue Shopping'
        .click(page.btn_ContinueShopping)
        //Hovering over the second Item in the Results area
        .hover(page.are_Item2)
        //Validate Add to Cart button is visible when mouse is over the Item
        .expect(page.lnk_Item2AddtoCart.visible).ok()
        .wait(500)
        //Click 'Add to Cart'
        .click(page.lnk_Item2AddtoCart)
        .wait(500)
        //Validate 'Continue Shopping' and 'Proceed to Checkout' are visible
        .expect(page.btn_ContinueShopping.visible).ok()
        .expect(page.btn_ProceedtoCheckout.visible).ok()
        //Click 'Continue Shopping'
        .click(page.btn_ContinueShopping)
        .wait(1000)

    await t
        //Navigating to DRESSES page
        .click(page.bnr_Dresses)
    
    await t
        //Hovering over the first Item in the Results area
        .hover(page.are_Item1)
        //Validate Add to Cart button is visible when mouse is over the Item
        .expect(page.lnk_Item1AddtoCart.visible).ok()
        .wait(500)
        //Click 'Add to Cart'
        .click(page.lnk_Item1AddtoCart)
        .wait(500)
        //Validate 'Continue Shopping' and 'Proceed to Checkout' are visible
        .expect(page.btn_ContinueShopping.visible).ok()
        .expect(page.btn_ProceedtoCheckout.visible).ok()
        //Click 'Continue Shopping'
        .click(page.btn_ContinueShopping)
        .wait(1000)

     await t
        //Navigating to TSHIRTS page
        .click(page.bnr_Tshirts)

    await t
        //This Item is already added to the Shopping Cart
        //Hovering over the first Item in the Results area
        .hover(page.are_Item1)
        //Validate Add to Cart button is visible when mouse is over the Item
        .expect(page.lnk_Item1AddtoCart.visible).ok()
        .wait(500)
        //Click 'Add to Cart'
        .click(page.lnk_Item1AddtoCart)
        .wait(500)
        //Validate 'continue Shopping' and 'Proceed to Checkout' are visible
        .expect(page.btn_ContinueShopping.visible).ok()
        .expect(page.btn_ProceedtoCheckout.visible).ok()
        //Click 'Proceed to Checkout'
        .click(page.btn_ProceedtoCheckout)
        .wait(1000)
    
    await t
        //Taking a Screenshot from Order Details
        .takeElementScreenshot(page.are_SUM_OrderDetail)
        //Click 'Proceed to Checkout'
        .click(page.btn_SUM_ProceedtoCheckout)
    
    await t
        //Check user Name in Navigation Bar
        .expect(page.NavBar_Username.innerText).eql(data.firstName + ' ' + data.lastName)
        .expect(page.NavBar_Username.exists).ok()
        .takeScreenshot()
        //Click 'Procedd to Checkout' in Address page
        .click(page.btn_ADS_ProceedtoCheckout)
    
    await t
        .expect(page.chk_SHP_TermsofService.checked).eql(false)
        //Click 'Proceed to Checkout' in Shipping page
        .click(page.btn_SHP_ProceedtoCheckout)
        .takeScreenshot()
        //Expect a message to Agree the Terms of Service
        .expect(page.msg_SHP_AgreeTerms.visible).ok()
        //Close the message to Agree the Terms of Service
        .click(page.msg_SHP_CloseAgreeTerms)
    
    await t
        //Select 'Terms of Service'
        .click(page.chk_SHP_TermsofService)
        .expect(page.chk_SHP_TermsofService.checked).eql(true)
        .takeScreenshot()
        //Click 'Proceed to Checkout' in Shipping page
        .click(page.btn_SHP_ProceedtoCheckout)
    
    await t
        //Taking a Screenshot from Order Details
        .takeElementScreenshot(page.are_PAY_OrderDetail)
        //Click 'Pay by Bank' in Payment page
        .click(page.btn_PAY_ByBank)

    await t
        .takeScreenshot()
        //Click 'I confirm my order'
        .click(page.btn_PAY_ConfirmOrder)
        .wait(1000)
        
    await t
        //validate Text for Order complete is visible in teh Text Area
        .takeScreenshot()
        .takeElementScreenshot(page.txt_PAY_OrderComplete)
        .expect(page.txt_PAY_OrderComplete.visible).ok
        let message = await Selector('#center_column > div > p > strong').innerText;

    await t
        .expect(message).eql(constants.msg_orderComplete)
        .expect(await page.txt_PAY_OrderComplete.innerText).eql(constants.msg_orderComplete)
 });


//TEST 02
test('Select 3 Items, login and proceed to purchase', async t =>
{
    await t
        //Maximizing the Screen
        .maximizeWindow()

    await t
        //Navigating to WOMENS page
        .click(page.bnr_Women)

    await t
        //Hovering over the second Item in the Results area
        .hover(page.are_Item2)
        //Validate Add to Cart button is visible when mouse is over the Item
        .expect(page.lnk_Item2AddtoCart.visible).ok()
        .wait(500)
        //Click 'Add to Cart'
        .click(page.lnk_Item2AddtoCart)
        .wait(500)
        //Validate 'Continue Shopping' and 'Proceed to Checkout' are visible
        .expect(page.btn_ContinueShopping.visible).ok()
        .expect(page.btn_ProceedtoCheckout.visible).ok()
        //Click 'Continue Shopping'
        .click(page.btn_ContinueShopping)
        .wait(1000)

    await t
        //Navigating to DRESSES page
        .click(page.bnr_Dresses)
    
    await t
        //Hovering over the first Item in the Results area
        .hover(page.are_Item1)
        //Validate Add to Cart button is visible when mouse is over the Item
        .expect(page.lnk_Item1AddtoCart.visible).ok()
        .wait(500)
        //Click 'Add to Cart'
        .click(page.lnk_Item1AddtoCart)
        .wait(500)
        //Validate 'Continue Shopping' and 'Proceed to Checkout' are visible
        .expect(page.btn_ContinueShopping.visible).ok()
        .expect(page.btn_ProceedtoCheckout.visible).ok()
        //Click 'Continue Shopping'
        .click(page.btn_ContinueShopping)
        .wait(1000)

     await t
        //Navigating to TSHIRTS page
        .click(page.bnr_Tshirts)

    await t
        //Hovering over the first Item in the Results area
        .hover(page.are_Item1)
        //Validate Add to Cart button is visible when mouse is over the Item
        .expect(page.lnk_Item1AddtoCart.visible).ok()
        .wait(500)
        //Click 'Add to Cart'
        .click(page.lnk_Item1AddtoCart)
        .wait(500)
        //Validate 'continue Shopping' and 'Proceed to Checkout' are visible
        .expect(page.btn_ContinueShopping.visible).ok()
        .expect(page.btn_ProceedtoCheckout.visible).ok()
        //Click 'Proceed to Checkout'
        .click(page.btn_ProceedtoCheckout)
        .wait(1000)
    
    await t
        //Taking a Screenshot from Order Details
        .takeElementScreenshot(page.are_SUM_OrderDetail)
        //Click 'Proceed to Checkout'
        .click(page.btn_SUM_ProceedtoCheckout)

    await t
        //Log into a registered Account
        .typeText(page.txt_RegisteredEmail, data.registeredEmail)
        .expect(page.txt_RegisteredEmail.value).eql(data.registeredEmail)
        .typeText(page.txt_RegisteredPassword, data.password)
        .expect(page.txt_RegisteredPassword.value).eql(data.password)
        .click(page.btn_SignIn)
        .wait(1000)
    
    await t
        //Check user Name in Navigation Bar
        .expect(page.NavBar_Username.innerText).eql(data.firstName + ' ' + data.lastName)
        .expect(page.NavBar_Username.exists).ok()
        .takeScreenshot()
        //Click 'Procedd to Checkout' in Address page
        .click(page.btn_ADS_ProceedtoCheckout)
    
    await t
        //Select 'Terms of Service'
        .click(page.chk_SHP_TermsofService)
        .expect(page.chk_SHP_TermsofService.checked).eql(true)
        .takeScreenshot()
        //Click 'Proceed to Checkout' in Shipping page
        .click(page.btn_SHP_ProceedtoCheckout)
    
    await t
        //Taking a Screenshot from Order Details
        .takeElementScreenshot(page.are_PAY_OrderDetail)
        //Click 'Pay by Check' in Payment page
        .click(page.btn_PAY_ByCheck)

    await t
        .takeScreenshot
        //Click 'I confirm my order'
        .click(page.btn_PAY_ConfirmOrder)
        .wait(1000)
        
    await t
        //validate Message for Order complete is visible
        .takeElementScreenshot(page.msg_PAY_OrderComplete)
        .expect(page.msg_PAY_OrderComplete.visible).ok
        let message = await Selector('#center_column > p.alert.alert-success').innerText;

    await t
        .expect(message).eql(constants.msg_orderComplete)
        .expect(await page.msg_PAY_OrderComplete.innerText).eql(constants.msg_orderComplete)
});