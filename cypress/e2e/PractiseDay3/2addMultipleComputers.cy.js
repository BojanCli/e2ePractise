import computersInfo from './helpers/2computersInfo' 

const computerData = require('../../fixtures/computers.json');

describe('Add computers test', () => {
    require('../utilities/testSetup.cy');
    
    it('Add and verify multiple computers added from JSON file', () => {
      computerData.forEach((computer) => {
        computersInfo.addComputer()
        computersInfo.sendComputerName(computer.name)
        computersInfo.sendIntroducedDate(computer.introduced)
        computersInfo.sendDiscontinuedDate(computer.discontinued)
        computersInfo.sendCompany(computer.company)
        computersInfo.createComputer()
        computersInfo.elements.warningMsg().should('have.text','Done !  Computer '+computer.name+' has been created')
      });
    });
});