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
const pageStart_1 = require("./pageStart");
const pageTown_1 = require("./pageTown");
let londonMore;
let parisMore;
describe('Type Script Test', function () {
    beforeEach(function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.waitForAngularEnabled(false);
            pageStart_1.PageStart.get();
        });
    });
    it('should compare more of London and Parish', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield pageStart_1.PageStart.clickGeoButton();
            yield pageTown_1.PageTown.writeTown("Лондон");
            yield pageTown_1.PageTown.setTown();
            yield pageStart_1.PageStart.clickOnButtonMore();
            londonMore = yield pageStart_1.PageStart.moreContent.getText();
            yield pageStart_1.PageStart.clickGeoButton();
            yield pageTown_1.PageTown.writeTown("Париж");
            yield pageTown_1.PageTown.setTown();
            yield pageStart_1.PageStart.clickOnButtonMore();
            parisMore = yield pageStart_1.PageStart.moreContent.getText();
            ;
            yield yield expect(parisMore).toEqual(londonMore);
        });
    });
});
//# sourceMappingURL=ts.js.map