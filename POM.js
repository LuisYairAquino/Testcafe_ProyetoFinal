import { Selector } from 'testcafe';

class Page
{
    constructor()
    {
        //PAGE: MAIN PAGE
        this.lnk_SignIn                 = Selector('a').withText('Sign in');
        this.bnr_Women                  = Selector('#block_top_menu > ul > li:nth-child(1) > a');
        this.bnr_Dresses                = Selector('#block_top_menu > ul > li:nth-child(2) > a');
        this.bnr_Tshirts                = Selector('#block_top_menu > ul > li:nth-child(3) > a');
        this.lnk_Logo                   = Selector('#header_logo > a > img');
        this.txt_SearchBox              = Selector('#search_query_top');
        this.btn_SearchIcon             = Selector('#searchbox > button');
        this.msg_NoResults              = Selector('#center_column > h1');
        this.msc_ResultsArea            = Selector('#center_column > ul > li');
        
        //PAGE: AUTHENTICATION
        this.msg_CreateAccountError01   = Selector('#create_account_error > ol > li');
        this.txt_email                  = Selector('#email_create');
        this.btn_CreateAccount          = Selector('#SubmitCreate');
        this.txt_RegisteredEmail        = Selector('#email');
        this.txt_RegisteredPassword     = Selector('#passwd');
        this.btn_SignIn                 = Selector('#SubmitLogin > span');
        this.msg_CreateAccountError03   = Selector('#center_column > div.alert.alert-danger > ol > li')

        //PAGE: CREATE AN ACCOUNT
        this.msg_CreateAccountError02   = Selector('#center_column > div > p');
        this.txt_frm_firstName          = Selector ('#customer_firstname');
        this.txt_frm_lastName           = Selector('#customer_lastname');
        this.txt_frm_email              = Selector('#email');
        this.txt_frm_password           = Selector('#passwd');
        this.txt_frm_firstName_Address  = Selector('#firstname');
        this.txt_frm_lastName_Address   = Selector('#lastname');
        this.txt_frm_address            = Selector ('#address1');
        this.txt_frm_city               = Selector ('#city');
        this.drp_frm_state              = Selector ('#id_state'); //Parent Selector
        this.txt_frm_zip_Code           = Selector ('#postcode');
        this.drp_frm_country            = Selector ('#id_country'); //Parent Selector
        this.txt_frm_mobile_Phone       = Selector ('#phone_mobile');
        this.txt_frm_alias              = Selector ('#alias');
        this.btn_register               = Selector('#submitAccount');

        //PAGE: MY ACCOUNT
        this.NavBar_Username            = Selector('#header > div.nav > div > div > nav > div:nth-child(1) > a > span');
        this.NavBar_SignOut             = Selector('#header > div.nav > div > div > nav > div:nth-child(2) > a');

        //PAGE: WOMEN
        this.lnk_Dresses                = Selector('#subcategories > ul > li:nth-child(2) > div.subcategory-image > a > img');
        this.lnk_Tshirts                = Selector('a').withText('T-shirts');

        //PAGE: RESULTS AREA
        this.are_Item1                  = Selector('#center_column > ul > li:nth-child(1)')
        this.lnk_Item1Description       = Selector('#center_column > ul > li:nth-child(1) > div > div.right-block > h5 > a')
        this.lnk_Item1AddtoCart         = Selector('#center_column > ul > li:nth-child(1) > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default > span')
        this.lnk_Item1More              = Selector('#center_column > ul > li:nth-child(1) > div > div.right-block > div.button-container > a.button.lnk_view.btn.btn-default > span')
        this.are_Item2                  = Selector('#center_column > ul > li:nth-child(2)')
        this.lnk_Item2Description       = Selector('#center_column > ul > li:nth-child(2) > div > div.right-block > h5 > a')
        this.lnk_Item2AddtoCart         = Selector('#center_column > ul > li:nth-child(2) > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default > span')
        this.lnk_Item2More              = Selector('#center_column > ul > li:nth-child(2) > div > div.right-block > div.button-container > a.button.lnk_view.btn.btn-default > span')
        this.btn_ContinueShopping       = Selector('#layer_cart > div > div > div > span > span')
        this.btn_ProceedtoCheckout      = Selector('#layer_cart > div > div > div > a > span')

        //PAGE: SUMMARY
        this.are_SUM_OrderDetail        = Selector('#order-detail-content')
        this.btn_SUM_ProceedtoCheckout  = Selector('#center_column > p > a > span')

        //PAGE: ADDRESS
        this.btn_ADS_ProceedtoCheckout  = Selector('#center_column > form > p > button > span')

        //PAGE: SHIPPING
        this.chk_SHP_TermsofService     = Selector('#cgv')
        this.msg_SHP_AgreeTerms         = Selector('#order > div.fancybox-overlay.fancybox-overlay-fixed > div > div > div > div > p')
        this.msg_SHP_CloseAgreeTerms    = Selector('#order > div.fancybox-overlay.fancybox-overlay-fixed > div > div > a')
        this.btn_SHP_ProceedtoCheckout  = Selector('#form > p > button > span')

        //PAGE: PAYMENT
        this.are_PAY_OrderDetail        = Selector('#order-detail-content')
        this.btn_PAY_ByBank             = Selector('#HOOK_PAYMENT > div:nth-child(1) > div > p > a > span')
        this.btn_PAY_ByCheck            = Selector('#HOOK_PAYMENT > div:nth-child(2) > div > p > a > span')
        this.btn_PAY_ConfirmOrder       = Selector('#cart_navigation > button > span')
        this.msg_PAY_OrderComplete      = Selector('#center_column > p.alert.alert-success')
        this.txt_PAY_OrderComplete      = Selector('#center_column > div > p > strong')
    }
}

export default new Page();