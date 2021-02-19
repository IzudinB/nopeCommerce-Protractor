describe('loginPage', function() {



    const loginLink = $ ('.ico-login');
    const email = $ ('.email');
    const password = $ ('#Password');
    const loginButton = $ ('.login-button');
    const logoutButton = $ ('.ico-logout');
    const emailErrorMsg = $ ('#Email-error');
    const passErrorMsg = $ ('.message-error ');

    beforeEach(function() {
        browser.get('https://demo.nopcommerce.com');
    });

    afterEach(function() {
        browser.driver.manage().deleteAllCookies();
    });

    it('1. Verify successful login on App', function() {

        loginLink.click();
        browser.sleep(5000)
        email.sendKeys('test@gmail.com');
        password.sendKeys('123456Aa');
        loginButton.click();


        expect(logoutButton.getText()).toContain('Log out');


    });

    it('2. Verify error message when email input field is empty', function() {

        loginLink.click();
        browser.sleep(5000)
        loginButton.click();

        expect(emailErrorMsg.getText()).toContain('Please enter your email');

    });


    it('3. Verify error message when email format is wrong', function() {

        loginLink.click();
        browser.sleep(3000)
        email.sendKeys('qwer');
        browser.sleep(3000)
        loginButton.click();
        browser.sleep(3000)


        expect(emailErrorMsg.getText()).toContain('Wrong email');

    });

    it('4. Verify error message when password input field is empty', function() {

        loginLink.click()
        browser.sleep(3000);
        email.sendKeys('test@gmail.com');
        browser.sleep(3000)
        loginButton.click();
        browser.sleep(3000)


        expect(passErrorMsg.getText()).toContain('Login was unsuccessful. Please correct the errors and try again.\nThe credentials provided are incorrect');

    });

});

