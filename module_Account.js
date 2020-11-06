import page from './POM';
import { data } from './data';
import { constants } from './constants';

fixture('Performing Tests for Account Module')
    .page ('http://automationpractice.com');

//TEST 01
test('Leave Email address empty and click on Create an account, expect an error', async t =>
{
    await t
        //Maximizing the Screen
        .maximizeWindow()
        .click(page.lnk_SignIn)

    await t
        //Leave Email address empty and click on 'Create an account' 
        .click(page.btn_CreateAccount)
    
    await t
        //Expecting an error message
        .expect(await page.msg_CreateAccountError01.innerText).eql(constants.msg_invalidEmail)
        .expect(await page.msg_CreateAccountError01.exists).ok()
        .takeScreenshot()
});

//TEST 02
test('Enter an Invalid Email address and click on Create an account, expect an error', async t =>
{
    await t
        //Maximizing the Screen
        .maximizeWindow()
        .click(page.lnk_SignIn)

    
    await t
        //Enter an Invalid Email address and click on 'Create an account'
        .typeText(page.txt_email, data.bad_email)
        .click(page.btn_CreateAccount)
    
    await t
        //Expecting an error message
        .expect(await page.msg_CreateAccountError01.innerText).eql(constants.msg_invalidEmail)
        .expect(await page.msg_CreateAccountError01.exists).ok()
        .takeScreenshot()
});

//TEST 03
test('Create an account without filling any required field, expect multiple error messages', async t =>
{
    await t
        //Maximizing the Screen
        .maximizeWindow()
        .click(page.lnk_SignIn)

    await t
        //Enter a valid Email address and click on 'Create an account'
        .typeText(page.txt_email, data.email)
        .click(page.btn_CreateAccount)

    await t
        //Leave all fields empty and click on 'Register', expecting multiple error messages
        .click(await page.btn_register)

    await t
        //Expecting an error message
        .expect(await page.msg_CreateAccountError02.innerText).eql(constants.msg_eigthErrors)
        .expect(await page.msg_CreateAccountError02.exists).ok()
        .takeScreenshot()
});

//TEST 04
test('Successfully create an account', async t =>
{
    await t
        //Maximizing the Screen
        .maximizeWindow()
        .click(page.lnk_SignIn)
    
    await t
        //Enter a valid Email address and click on 'Create an account'
        .typeText(page.txt_email, data.email)
        .click(page.btn_CreateAccount)
        console.log(data.email);
        
    await t 
        //Validate that email is  prefilled and it's editable
        .expect(page.txt_frm_email.value).contains(data.email)
        .expect(page.txt_frm_email.hasAttribute('readonly')).notOk()

        //Writing First and Last Name
        .typeText(page.txt_frm_firstName, data.firstName)
        .typeText(page.txt_frm_lastName, data.lastName)

        //Checking First and Last Name are automatically filled in address field
        .expect(page.txt_frm_firstName_Address.value).contains(data.firstName)
        .expect(page.txt_frm_lastName_Address.value).contains(data.lastName)

        //Writing Password and Address
        .typeText(page.txt_frm_password, data.password)
        .typeText(page.txt_frm_address, data.pbox)

        //Checking Address field
        .expect(page.txt_frm_address.value).contains(data.pbox)
        .takeScreenshot()

    await t
        //Writing City and State
        .typeText(page.txt_frm_city, data.city)
        .click(page.drp_frm_state)
        .click(page.drp_frm_state.find('option').withText(data.state))

        //Checking City field
        .expect(page.txt_frm_city.value).eql(data.city)

        //Writing Zip code, Country, Mobile Phone and Alias
        .typeText(page.txt_frm_zip_Code, data.zipCode)
        .click(page.drp_frm_country)
        .click(page.drp_frm_country.find('option').withText(data.country))
        .typeText(page.txt_frm_mobile_Phone, data.mobilePhone)
        .typeText(page.txt_frm_alias, data.alias, {replace: true})

        //Checking Zip code, Country, Mobile Phone and Alias
        .expect(page.txt_frm_zip_Code.value).eql(data.zipCode)
        .expect(page.txt_frm_mobile_Phone.value).eql(data.mobilePhone)
        .expect(page.txt_frm_alias.value).eql(data.alias)
        .takeScreenshot()

        //click on 'Register'
        .click(page.btn_register)

    await t
        .wait(1000)
        .takeScreenshot()

        //Check user Name in Navigation Bar
        .expect(page.NavBar_Username.innerText).eql(data.firstName + ' ' + data.lastName)
        .expect(page.NavBar_Username.exists).ok()

        //Sign Out
        .click(page.NavBar_SignOut)
});

//TEST 05
test('Try to log into an account, using invalid values', async t =>
{
    await t
        //Maximizing the Screen
        .maximizeWindow()
        .click(page.lnk_SignIn)

    await t
        //Click Sign In without entering Email and Password
        .click(page.btn_SignIn)

    await t
        //Expecting an error message
        .expect(await page.msg_CreateAccountError03.innerText).eql(constants.msg_emailRequired)
        .expect(await page.msg_CreateAccountError03.exists).ok()
        .takeScreenshot()

    await t 
        //Writing an invalid Email
        .typeText(page.txt_RegisteredEmail, data.bad_email)
        .expect(page.txt_RegisteredEmail.value).eql(data.bad_email)
        .click(page.btn_SignIn)

    await t
        //Expecting an error message
        .expect(await page.msg_CreateAccountError03.innerText).eql(constants.msg_invalidEmail)
        .expect(await page.msg_CreateAccountError03.exists).ok()
        .takeScreenshot()

    await t 
        //Writing the Email
        .typeText(page.txt_RegisteredEmail, data.registeredEmail, {replace: true})
        .expect(page.txt_RegisteredEmail.value).eql(data.registeredEmail)
        .click(page.btn_SignIn)

    await t
        //Expecting an error message
        .expect(await page.msg_CreateAccountError03.innerText).eql(constants.msg_pswdRequired)
        .expect(await page.msg_CreateAccountError03.exists).ok()
        .takeScreenshot()

    await t
        //Removing the Email and writting the Password
        .click(page.txt_RegisteredEmail)
        .pressKey('ctrl+a delete')
        .typeText(page.txt_RegisteredPassword, data.password)
        .expect(page.txt_RegisteredPassword.value).eql(data.password)
        .click(page.btn_SignIn)

    await t
        //Expecting an error message
        .expect(await page.msg_CreateAccountError03.innerText).eql(constants.msg_emailRequired)
        .expect(await page.msg_CreateAccountError03.exists).ok()
        .takeScreenshot()

    await t
        //Writing the Email
        .typeText(page.txt_RegisteredEmail, data.registeredEmail)
        .expect(page.txt_RegisteredEmail.value).eql(data.registeredEmail)
        .click(page.btn_SignIn)

    await t
        .wait(1000)
        .takeScreenshot()

        //Check user Name in Navigation Bar
        .expect(page.NavBar_Username.innerText).eql(data.firstName + ' ' + data.lastName)
        .expect(page.NavBar_Username.exists).ok()

        //Sign Out
        .click(page.NavBar_SignOut)
});

//TEST 06
test('Trigger the errors on Sign In Page', async t =>
{
    await t
    //Maximizing the Screen
    .maximizeWindow()
    .click(page.lnk_SignIn)

    await t
        //Click Sing In wihout entering Email and Password
        .click(page.btn_SignIn)

    await t
        //Expecting an error message
        .expect(await page.msg_CreateAccountError03.innerText).eql(constants.msg_emailRequired)
        .expect(await page.msg_CreateAccountError03.exists).ok()
        .expect(await page.msg_CreateAccountError01.exists).notOk()
        .takeScreenshot()

    await t
        //Leave Email address empty and click on 'Create an account' 
        .click(page.btn_CreateAccount)
    
    await t
        //Expecting an error message
        .expect(await page.msg_CreateAccountError01.innerText).eql(constants.msg_invalidEmail)
        .expect(await page.msg_CreateAccountError01.exists).ok()
        .expect(await page.msg_CreateAccountError03.innerText).eql(constants.msg_emailRequired)
        .expect(await page.msg_CreateAccountError03.exists).ok()
        .takeScreenshot()

    await t 
        //Writing an invalid Email
        .typeText(page.txt_RegisteredEmail, data.bad_email)
        .expect(page.txt_RegisteredEmail.value).eql(data.bad_email)
        .click(page.btn_SignIn)

    await t
        //Expecting an error message
        .expect(await page.msg_CreateAccountError03.innerText).eql(constants.msg_invalidEmail)
        .expect(await page.msg_CreateAccountError03.exists).ok()
        .expect(await page.msg_CreateAccountError01.exists).notOk()
        .takeScreenshot()

    await t
        //Leave Email address empty and click on 'Create an account' 
        .click(page.btn_CreateAccount)
        
    await t
        //Expecting an error message
        .expect(await page.msg_CreateAccountError01.innerText).eql(constants.msg_invalidEmail)
        .expect(await page.msg_CreateAccountError01.exists).ok()
        .expect(await page.msg_CreateAccountError03.innerText).eql(constants.msg_invalidEmail)
        .expect(await page.msg_CreateAccountError03.exists).ok()
        .takeScreenshot()

    await t 
        //Writing the Email
        .typeText(page.txt_RegisteredEmail, data.registeredEmail, {replace: true})
        .expect(page.txt_RegisteredEmail.value).eql(data.registeredEmail)
        .click(page.btn_SignIn)

    await t
        //Expecting an error message
        .expect(await page.msg_CreateAccountError03.innerText).eql(constants.msg_pswdRequired)
        .expect(await page.msg_CreateAccountError03.exists).ok()
        .expect(await page.msg_CreateAccountError01.exists).notOk()
        .takeScreenshot()


    await t
        //Leave Email address empty and click on 'Create an account' 
        .click(page.btn_CreateAccount)
        
    await t
        //Expecting an error message
        .expect(await page.msg_CreateAccountError01.innerText).eql(constants.msg_invalidEmail)
        .expect(await page.msg_CreateAccountError01.exists).ok()
        .expect(await page.msg_CreateAccountError03.innerText).eql(constants.msg_pswdRequired)
        .expect(await page.msg_CreateAccountError03.exists).ok()
        .takeScreenshot()
    
    await t
        //Removing the Email and writing the Password
        .click(page.txt_RegisteredEmail)
        .pressKey('ctrl+a delete')
        .typeText(page.txt_RegisteredPassword, data.password)
        .expect(page.txt_RegisteredPassword.value).eql(data.password)
        .click(page.btn_SignIn)

    await t
        //Expecting an error message
        .expect(await page.msg_CreateAccountError03.innerText).eql(constants.msg_emailRequired)
        .expect(await page.msg_CreateAccountError03.exists).ok()
        .expect(await page.msg_CreateAccountError01.exists).notOk()
        .takeScreenshot()

    await t
        //Leave Email address empty and click on 'Create an account' 
        .click(page.btn_CreateAccount)
        
    await t
        //Expecting an error message
        .expect(await page.msg_CreateAccountError01.innerText).eql(constants.msg_invalidEmail)
        .expect(await page.msg_CreateAccountError01.exists).ok()
        .expect(await page.msg_CreateAccountError03.innerText).eql(constants.msg_emailRequired)
        .expect(await page.msg_CreateAccountError03.exists).ok()
        .takeScreenshot()
});