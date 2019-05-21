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
let PageStart = require('./pageStart');
let PageTown = require('./pageTown');
let pageStart = new PageStart();
let pageTown = new PageTown();
let londonMore;
let parisMore;
describe('Type Script Test', function () {
    beforeEach(function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.waitForAngularEnabled(false);
            pageStart.get();
            console.log("before");
        });
    });
    it('should compare more of London and Parish', function () {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("it");
            pageStart.clickGeoButton();
            pageTown.setTown("Лондон");
            pageStart.copyMore(londonMore);
            pageStart.clickGeoButton();
            pageTown.setTown("Париж");
            pageStart.copyMore(parisMore);
            pageStart.clickGeoButton();
            pageStart.compare();
            console.log("success");
        });
    });
});
//# sourceMappingURL=ts.js.map