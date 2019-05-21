import {browser} from 'protractor';
import {PageStart} from './pageStart';
import {PageTown} from './pageTown';
let londonMore: string;
let parisMore: string;
describe('Type Script Test', function() {
  beforeEach(async function() {
    await browser.waitForAngularEnabled(false);
    PageStart.get();
  });
    it('should compare more of London and Parish',async function() {
      await PageStart.clickGeoButton();
      await PageTown.writeTown("Лондон");
      await PageTown.setTown();
      await PageStart.clickOnButtonMore();
      londonMore = await PageStart.moreContent.getText();
      await PageStart.clickGeoButton();
      await PageTown.writeTown("Париж");
      await PageTown.setTown();
      await PageStart.clickOnButtonMore();
      parisMore = await PageStart.moreContent.getText();;
      await await expect(parisMore).toEqual(londonMore);
    });
  });