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
//let Options = require('./options');
//let options = new Options();
class PageStart {
    static get() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.get('https://yandex.ru/');
        });
    }
    static clickGeoButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield options_1.Options.isClickable(this.geoButton);
            yield this.geoButton.click();
            console.log("clickGeoButton");
        });
    }
    static clickOnButtonMore() {
        return __awaiter(this, void 0, void 0, function* () {
            yield options_1.Options.isClickable(this.moreButton);
            yield this.moreButton.click();
            console.log("clickOnButtonMore");
        });
    }
}
PageStart.geoButton = protractor_1.element(protractor_1.by.css('span.geolink__reg'));
PageStart.moreButton = protractor_1.element(protractor_1.by.css("a.home-link.home-link_blue_yes.home-tabs__link.home-tabs__more-switcher.dropdown2__switcher"));
PageStart.moreContent = protractor_1.element(protractor_1.by.css("div.home-tabs__more"));
exports.PageStart = PageStart;
//# sourceMappingURL=pageStart.js.map