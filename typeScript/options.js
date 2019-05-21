"use strict";
const protractor_1 = require("protractor");
class Options {
    constructor() {
        this.EC = protractor_1.protractor.ExpectedConditions;
        this.isClickable = el => {
            protractor_1.browser.wait(this.EC.elementToBeClickable(el), 5000);
        };
    }
}
module.exports = Options;
//# sourceMappingURL=options.js.map