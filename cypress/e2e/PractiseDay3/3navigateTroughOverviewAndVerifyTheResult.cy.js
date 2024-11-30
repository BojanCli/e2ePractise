import navigateAndVerifyResults from './helpers/3navigateAndVerifyResults';
const testData = require('../../fixtures/testConfig.json')

describe('Navigate and verify test', () => {
  require('../utilities/testSetup.cy');
    
    it.skip('Navigate to 5 page and verify the 3rd result from the overview first approach', () => {
      navigateAndVerifyResults.clickNextButton(5);
      navigateAndVerifyResults.verifyPaginationText('Displaying 51 to 60 of 574');
      navigateAndVerifyResults.verifyResults(2, 'Apple IIc')
    });

    it.skip('Navigate to 5 page and verify the 3rd result from the overview second approach', () => {
      navigateAndVerifyResults.clickNextButton(testData.clickFiveTimes);
      navigateAndVerifyResults.verifyPaginationText(testData.paginationTextOn5thPage);
      navigateAndVerifyResults.verifyResults(testData.secondRow, testData.thirdComputerName);
    });

    testData.numberOfTimesClickedNext.forEach((times, index) => {
      it(`Navigate ${times} times and verify pagination and computer name for index ${index}`, () => {
          navigateAndVerifyResults.clickNextButton(times);
          navigateAndVerifyResults.verifyPaginationText(testData.paginationText[index]);
          navigateAndVerifyResults.verifyResults(2, testData.computersInThirdRow[index]);
      });
    });
});