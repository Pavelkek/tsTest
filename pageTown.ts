import {element, by} from 'protractor';
let conf = require('./options');
let options = new conf();
class PageTown {
    public town = element(by.css('input#city__front-input.input__control.input__input'));
    public townValue = element(by.css('li.b-autocomplete-item.b-autocomplete-item_type_geo.b-autocomplete-item_subtype_region.i-bem.b-autocomplete-item_js_inited'));

    setTown = async function(townName : string) {
        options.isClickable(this.town);
        await this.town.click();
        await this.town.clear();
        await this.town.sendKeys(townName);
        options.isClickable(this.townValue);
        await this.townValue.click();
    }
}
export = PageTown;