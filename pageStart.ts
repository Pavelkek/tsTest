import {browser, element, by, protractor} from 'protractor';
let Options = require('./options');
let options = new Options();
class PageStart {
    public geoButton = element(by.css('span.geolink__reg'));
    public moreButton = element(by.css("a.home-link.home-link_blue_yes.home-tabs__link.home-tabs__more-switcher.dropdown2__switcher"));
    public moreContent = element(by.css("div.home-tabs__more"));

    get = async function() {
        await browser.get('https://yandex.ru/');
    }

    clickGeoButton = async function() {
        options.isClickable(this.geoButton);
        await this.geoButton.click();
    }

    copyMore = async function(more : string) {
        options.isClickable(this.moreButton);
        await this.moreButton.click();
        more = await this.moreContent.getText();
    }

    compare = async function(parisMore: string, londonMore: string) {
        await expect(parisMore).toEqual(londonMore);
    }
}
export = PageStart;