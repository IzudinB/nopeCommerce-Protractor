describe('Registration Page', function() {

    const registerLink = $ ('.ico-register');
    const firstName = $ ('#FirstName');
    const lastName = $ ('#LastName');
    const email = $ ('#Email');
    const password = $ ('#Password');
    const confirmPassword = $ ('#ConfirmPassword');
    const registerButton = $ ('#register-button');
    const validationMsg = $ ('.result');
    const emailErrorMsg = $ ('#Email-error');
    const firstNameErrorMsg = $ ('#FirstName-error');
    const lastNameErrorMsg = $ ('#LastName-error');
    const confirmPassErrorMsg = $ ('#ConfirmPassword-error');
    const passErrorMsg = $ ('#Password-error');
    const emailUsedErrorMsg = $ ('.message-error')

    beforeEach(function() {
        browser.get('https://demo.nopcommerce.com');
    });

    afterEach(function() {
        browser.driver.manage().deleteAllCookies();
    });

    it('1. Verify successful registration on App', function() {

        registerLink.click();
        browser.sleep(3000)
        firstName.sendKeys('sumejja');
        lastName.sendKeys('sljivic');
        email.sendKeys('kodecta@gmail.com');
        password.sendKeys('Test123');
        confirmPassword.sendKeys('Test123');
        registerButton.click();
        browser.sleep(3000)


        expect(validationMsg.getText()).toContain('Your registration completed');

    });

    it('2. Verify error message when email input field is empty', function() {

        registerLink.click();
        firstName.sendKeys('Asim');
        lastName.sendKeys('Brkan');
        password.sendKeys('hoki123');
        confirmPassword.sendKeys('hoki123');
        registerButton.click();


        expect(emailErrorMsg.getText()).toContain('Email is required.');

    });

    it('3. Verify error message when first name input field is empty', function() {

        registerLink.click();
        lastName.sendKeys('sss');
        email.sendKeys('sss@test.com');
        password.sendKeys('test123');
        confirmPassword.sendKeys('test123');
        registerButton.click();


        expect(firstNameErrorMsg.getText()).toContain('First name is required.');

    });


    it('4. Verify error message when last name input field is empty', function() {

        registerLink.click();
        firstName.sendKeys('Asim');
        email.sendKeys('sss@test.com');
        password.sendKeys('test123');
        confirmPassword.sendKeys('test123');
        registerButton.click();


        expect(lastNameErrorMsg.getText()).toContain('Last name is required.');

    });

    it('5. Verify error message when password input field is empty', function() {

        registerLink.click();
        browser.sleep(3000)
        firstName.sendKeys('Asim');
        lastName.sendKeys('sss');
        email.sendKeys('sss@test.com');
        browser.sleep(3000)
        registerButton.click();
        browser.sleep(3000)

        //ASSERT - VERIFY
        expect(passErrorMsg.getText()).toContain('Password is required.');

    });

    it('6. Verify error message when confirm password input field is empty', function() {

        registerLink.click();
        firstName.sendKeys('Asim');
        lastName.sendKeys('sss');
        email.sendKeys('sss@test.com');
        password.sendKeys('test123');
        registerButton.click();
        browser.sleep(3000)


        expect(confirmPassErrorMsg.getText()).toContain('Password is required.');

    });

    it('7. Verify error message when email format is wrong', function() {

        registerLink.click();
        browser.sleep(2000)
        firstName.sendKeys('Asim');
        lastName.sendKeys('sss');
        email.sendKeys('qwer');
        password.sendKeys('test123');
        confirmPassword.sendKeys('test123');
        registerButton.click();
        browser.sleep(3000)


        expect(emailErrorMsg.getText()).toContain('Wrong email');

    });

    it('8. Verify error message when passwords do not match', function() {

        registerLink.click();
        browser.sleep(2000)
        firstName.sendKeys('Asim');
        lastName.sendKeys('sss');
        email.sendKeys('sss@test.com');
        password.sendKeys('test123');
        confirmPassword.sendKeys('test');
        registerButton.click();
        browser.sleep(3000)


        expect(confirmPassErrorMsg.getText()).toContain('The password and confirmation password do not match.');

    });

    it('9. Verify error message when password is not correct', function() {

        registerLink.click();
        browser.sleep(2000)
        firstName.sendKeys('Asim');
        lastName.sendKeys('sss');
        email.sendKeys('sss@test.com');
        password.sendKeys('tes');
        confirmPassword.sendKeys('test123');
        registerButton.click();
        browser.sleep(3000)


        expect(passErrorMsg.getText()).toContain('Password must meet the following rules:\nmust have at least 6 characters');

    });

    it('10. Verify error message when specified email already exist', function() {

        registerLink.click();
        browser.sleep(2000)
        firstName.sendKeys('Asim');
        lastName.sendKeys('sss');
        email.sendKeys('kodecta@gmail.com');
        password.sendKeys('123456Aa');
        confirmPassword.sendKeys('123456Aa');
        registerButton.click();
        browser.sleep(3000)


        expect(emailUsedErrorMsg.getText()).toContain('The specified email already exists');

    });

});