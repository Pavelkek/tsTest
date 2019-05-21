import {browser, protractor} from 'protractor';
export class Options {
    public static EC = protractor.ExpectedConditions;
    public static async isClickable(el) {
        await browser.wait(this.EC.elementToBeClickable(el), 5000);
    }
}