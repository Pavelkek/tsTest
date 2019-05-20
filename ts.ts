import {browser, element, by, protractor} from 'protractor';
describe('Protractor Demo App', function() {
  let geoButton = element(by.css('span.geolink__reg'));
  let town = element(by.css('input#city__front-input.input__control.input__input'));
  let moreButton = element(by.css("a.home-link.home-link_blue_yes.home-tabs__link.home-tabs__more-switcher.dropdown2__switcher"));
  let moreContent = element(by.css("div.home-tabs__more"));
  beforeEach(async function() {
    await browser.waitForAngularEnabled(false);
    await browser.get('https://yandex.ru/');
    console.log("before");
  });
    it('should add one and two',async function() {
      console.log("it");
      await geoButton.click();
      await town.click();
      await town.clear();
      await town.sendKeys('Лондон');
      browser.sleep(1000); //не заю, почему, но приходится браузер слипать, иначе интер не работает
      await browser.actions().sendKeys(protractor.Key.ENTER).perform();
      browser.sleep(1000);
      await moreButton.click();
      browser.sleep(1000);
      let londonMore = moreContent.getText();
      await geoButton.click();
      await town.click();
      await town.clear();
      await town.sendKeys('Париж');
      browser.sleep(1000);
      await browser.actions().sendKeys(protractor.Key.ENTER).perform();
      browser.sleep(1000);
      await moreButton.click();
      browser.sleep(1000);
      let parisMore = moreContent.getText();
      await expect(parisMore).toEqual(londonMore);
      console.log("success");
    });
  });