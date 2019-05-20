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
describe('Protractor Demo App', function () {
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
    it('should add one and two', function () {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("it");
            yield geoButton.click();
            yield town.click();
            yield town.clear();
            yield town.sendKeys('Лондон');
            protractor_1.browser.sleep(1000); //не заю, почему, но приходится браузер слипать, иначе интер не работает
            yield protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ENTER).perform();
            protractor_1.browser.sleep(1000);
            yield moreButton.click();
            protractor_1.browser.sleep(1000);
            let londonMore = moreContent.getText();
            yield geoButton.click();
            yield town.click();
            yield town.clear();
            yield town.sendKeys('Париж');
            protractor_1.browser.sleep(1000);
            yield protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ENTER).perform();
            protractor_1.browser.sleep(1000);
            yield moreButton.click();
            protractor_1.browser.sleep(1000);
            let parisMore = moreContent.getText();
            yield expect(parisMore).toEqual(londonMore);
            console.log("success");
        });
    });
});
//# sourceMappingURL=ts.js.map