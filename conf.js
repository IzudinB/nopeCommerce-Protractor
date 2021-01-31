exports.config = {
    capabilities:
        {
            browserName: 'chrome',
            chromeOptions: {
                args: ['--window-size=1920,1080'] // THIS!
            }
        },

    specs: ['registration-test.js'],
    directConnect: true,
    framework: 'jasmine',

    onPrepare: function() {
        browser.ignoreSynchronization = true;
    }

};
