import { Selector } from 'testcafe';

class Page
{
    constructor()
    {
        //PAGE: MAIN PAGE
        this.lnk_SignIn = Selector('a').withText('Sign in');
        
        //PAGE: AUTHENTICATION
        this.msg_CreateAccountError01 = Selector('#create_account_error > ol > li');
        this.txt_email = Selector('#email_create');
        this.btn_CreateAccount = Selector('#SubmitCreate');

        //PAGE: CREATE AN ACCOUNT
        this.msg_CreateAccountError02 = Selector('#center_column > div > p');
        this.txt_frm_firstName = Selector ('#customer_firstname');
        this.txt_frm_lastName = Selector('#customer_lastname');
        this.txt_frm_email = Selector('#email');
        this.txt_frm_password = Selector('#passwd');
        this.txt_frm_firstName_Address = Selector('#firstname');
        this.txt_frm_lastName_Address = Selector('#lastname');
        this.txt_frm_address = Selector ('#address1');
        this.txt_frm_city = Selector ('#city');
        this.drp_frm_state = Selector ('#id_state'); //Parent Selector
        this.txt_frm_zip_Code = Selector ('#postcode');
        this.drp_frm_country = Selector ('#id_country'); //Parent Selector
        this.txt_frm_mobile_Phone = Selector ('#phone_mobile');
        this.txt_frm_alias = Selector ('#alias');
        this.btn_register = Selector('#submitAccount');

        //PAGE: MY ACCOUNT
        this.NavBar_Username = Selector('#header > div.nav > div > div > nav > div:nth-child(1) > a > span');
        this.NavBar_SignOut = Selector('#header > div.nav > div > div > nav > div:nth-child(2) > a');
    }
}

export default new Page();