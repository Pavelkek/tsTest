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
let Options = require('./options');
let options = new Options();
class PageStart {
    constructor() {
        this.geoButton = protractor_1.element(protractor_1.by.css('span.geolink__reg'));
        this.moreButton = protractor_1.element(protractor_1.by.css("a.home-link.home-link_blue_yes.home-tabs__link.home-tabs__more-switcher.dropdown2__switcher"));
        this.moreContent = protractor_1.element(protractor_1.by.css("div.home-tabs__more"));
        this.get = function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.browser.get('https://yandex.ru/');
            });
        };
        this.clickGeoButton = function () {
            return __awaiter(this, void 0, void 0, function* () {
                options.isClickable(this.geoButton);
                yield this.geoButton.click();
            });
        };
        this.copyMore = function (more) {
            return __awaiter(this, void 0, void 0, function* () {
                options.isClickable(this.moreButton);
                yield this.moreButton.click();
                more = yield this.moreContent.getText();
            });
        };
        this.compare = function (parisMore, londonMore) {
            return __awaiter(this, void 0, void 0, function* () {
                yield expect(parisMore).toEqual(londonMore);
            });
        };
    }
}
module.exports = PageStart;
//# sourceMappingURL=pageStart.js.map