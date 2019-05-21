import {browser} from 'protractor';
let PageStart = require('./pageStart');
let PageTown = require('./pageTown');
let pageStart = new PageStart();
let pageTown = new PageTown();
let londonMore: string;
let parisMore: string;
describe('Type Script Test', function() {
  beforeEach(async function() {
    await browser.waitForAngularEnabled(false);
    pageStart.get();
    console.log("before");
  });
    it('should compare more of London and Parish',async function() {
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