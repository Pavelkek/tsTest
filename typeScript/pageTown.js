"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const options_1 = require("./options");
class PageTown {
    static writeTown(townName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield options_1.Options.isClickable(this.town);
            yield this.town.click();
            yield this.town.clear();
            yield this.town.sendKeys(townName);
            console.log("написал город");
        });
    }
    static setTown() {
        return __awaiter(this, void 0, void 0, function* () {
            yield options_1.Options.isClickable(this.townValue);
            yield this.townValue.click();
        });
    }
}
PageTown.town = protractor_1.element(protractor_1.by.css('input#city__front-input.input__control.input__input'));
PageTown.townValue = protractor_1.element(protractor_1.by.css('li.b-autocomplete-item.b-autocomplete-item_type_geo.b-autocomplete-item_subtype_region.i-bem.b-autocomplete-item_js_inited'));
exports.PageTown = PageTown;
//# sourceMappingURL=pageTown.js.map