import {element, by, browser} from 'protractor';
import {Options} from './options';
//let conf = require('./options');
//let options = new conf();
export class PageTown {
    private static town = element(by.css('input#city__front-input.input__control.input__input'));
    private static townValue = element(by.css('li.b-autocomplete-item.b-autocomplete-item_type_geo.b-autocomplete-item_subtype_region.i-bem.b-autocomplete-item_js_inited'));

    public static async writeTown(townName : string) {
        await Options.isClickable(this.town);
        await this.town.click();
        await this.town.clear();
        await this.town.sendKeys(townName);
        console.log("написал город");
    }

    public static async setTown() {
        await Options.isClickable(this.townValue);
        //await browser.sleep(2000);
        await this.townValue.click();
        //await browser.sleep(2000);
    }
}