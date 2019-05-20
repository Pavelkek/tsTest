import {browser, element, by, protractor} from 'protractor';
describe('Type Script Test', function() {
  let EC = protractor.ExpectedConditions;
  let geoButton = element(by.css('span.geolink__reg'));
  let town = element(by.css('input#city__front-input.input__control.input__input'));
  let moreButton = element(by.css("a.home-link.home-link_blue_yes.home-tabs__link.home-tabs__more-switcher.dropdown2__switcher"));
  let moreContent = element(by.css("div.home-tabs__more"));
  beforeEach(async function() {
    await browser.waitForAngularEnabled(false);
    await browser.get('https://yandex.ru/');
    console.log("before");
  });
    it('should compare more of London and Parish',async function() {
      let isClickable = el => {
        browser.wait(EC.elementToBeClickable(el), 5000);
      }
      console.log("it");
      isClickable(geoButton);
      await geoButton.click();
      isClickable(town);
      await town.click();
      await town.clear();
      await town.sendKeys('Лондон');
      browser.sleep(1000); //не знаю, как избавится от слипов перед интером
      await town.sendKeys(protractor.Key.ENTER);
      isClickable(moreButton);
      await moreButton.click();
      let londonMore = await moreContent.getText();
      await geoButton.click();
      await town.click();
      await town.clear();
      await town.sendKeys('Париж');
      browser.sleep(1000); //не знаю, как избавится от слипов перед интером
      await browser.actions().sendKeys(protractor.Key.ENTER).perform();
      isClickable(moreButton);
      await moreButton.click();
      let parisMore = await moreContent.getText();
      await expect(parisMore).toEqual(londonMore);
      console.log("success");
    });
  });