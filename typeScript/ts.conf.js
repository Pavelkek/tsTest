"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    framework: 'jasmine2',
    onPrepare: function () {
        let AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));
    },
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['ts.js'],
    seleniumAddress: 'http://localhost:4444/wd/hub',
};
//# sourceMappingURL=ts.conf.js.map