import {browser, element, by} from 'protractor';
import {Options} from './options';

export class PageStart {
    private static geoButton = element(by.css('span.geolink__reg'));
    private static moreButton = element(by.css("a.home-link.home-link_blue_yes.home-tabs__link.home-tabs__more-switcher.dropdown2__switcher"));
    public static moreContent = element(by.css("div.home-tabs__more"));

    public static async get() {
        await browser.get('https://yandex.ru/');
    }

    public static async clickGeoButton() {
        await Options.isClickable(this.geoButton);
        await this.geoButton.click();
    }

    public static async clickOnButtonMore() {
        await Options.isClickable(this.moreButton);
        await this.moreButton.click();
    }
}