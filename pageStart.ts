import {browser, element, by} from 'protractor';
let Options = require('./options');
let options = new Options();
export class PageStart {
    private static geoButton = element(by.css('span.geolink__reg'));
    private static moreButton = element(by.css("a.home-link.home-link_blue_yes.home-tabs__link.home-tabs__more-switcher.dropdown2__switcher"));
    public static moreContent = element(by.css("div.home-tabs__more"));

    public static async get() {
        await browser.get('https://yandex.ru/');
    }

    public static async clickGeoButton() {
        await options.isClickable(this.geoButton);
        await this.geoButton.click();
        console.log("clickGeoButton");
    }

    public static async clickOnButtonMore() {
        await options.isClickable(this.moreButton);
        await this.moreButton.click();
        console.log("clickOnButtonMore");
    }
}