import {browser, protractor} from 'protractor';
class Options {
    public EC = protractor.ExpectedConditions;
    isClickable = el => {
        browser.wait(this.EC.elementToBeClickable(el), 5000);
    }
}
export = Options;