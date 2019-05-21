"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const protractor_1 = require("protractor");
let conf = require('./options');
let options = new conf();
class PageTown {
    constructor() {
        this.town = protractor_1.element(protractor_1.by.css('input#city__front-input.input__control.input__input'));
        this.townValue = protractor_1.element(protractor_1.by.css('li.b-autocomplete-item.b-autocomplete-item_type_geo.b-autocomplete-item_subtype_region.i-bem.b-autocomplete-item_js_inited'));
        this.setTown = function (townName) {
            return __awaiter(this, void 0, void 0, function* () {
                options.isClickable(this.town);
                yield this.town.click();
                yield this.town.clear();
                yield this.town.sendKeys(townName);
                options.isClickable(this.townValue);
                yield this.townValue.click();
            });
        };
    }
}
module.exports = PageTown;
//# sourceMappingURL=pageTown.js.map