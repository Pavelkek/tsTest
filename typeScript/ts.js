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
describe('Type Script Test', function () {
    let EC = protractor_1.protractor.ExpectedConditions;
    let geoButton = protractor_1.element(protractor_1.by.css('span.geolink__reg'));
    let town = protractor_1.element(protractor_1.by.css('input#city__front-input.input__control.input__input'));
    let moreButton = protractor_1.element(protractor_1.by.css("a.home-link.home-link_blue_yes.home-tabs__link.home-tabs__more-switcher.dropdown2__switcher"));
    let moreContent = protractor_1.element(protractor_1.by.css("div.home-tabs__more"));
    beforeEach(function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.waitForAngularEnabled(false);
            yield protractor_1.browser.get('https://yandex.ru/');
            console.log("before");
        });
    });
    it('should compare more of London and Parish', function () {
        return __awaiter(this, void 0, void 0, function* () {
            let isClickable = el => {
                protractor_1.browser.wait(EC.elementToBeClickable(el), 5000);
            };
            console.log("it");
            isClickable(geoButton);
            yield geoButton.click();
            isClickable(town);
            yield town.click();
            yield town.clear();
            yield town.sendKeys('Лондон');
            protractor_1.browser.sleep(1000); //не знаю, как избавится от слипов перед интером
            yield town.sendKeys(protractor_1.protractor.Key.ENTER);
            isClickable(moreButton);
            yield moreButton.click();
            let londonMore = yield moreContent.getText();
            yield geoButton.click();
            yield town.click();
            yield town.clear();
            yield town.sendKeys('Париж');
            protractor_1.browser.sleep(1000); //не знаю, как избавится от слипов перед интером
            yield protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ENTER).perform();
            isClickable(moreButton);
            yield moreButton.click();
            let parisMore = yield moreContent.getText();
            yield expect(parisMore).toEqual(londonMore);
            console.log("success");
        });
    });
});
//# sourceMappingURL=ts.js.map