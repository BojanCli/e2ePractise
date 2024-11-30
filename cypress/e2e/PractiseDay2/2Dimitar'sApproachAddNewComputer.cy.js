import ComputerInforDimitar from './helpers/2ComputerInfoDimitar'
 
describe('Add Computer Tests', () => {
    require('../utilities/testSetup.cy')
    it('Verify that new computer is added', () => {
        ComputerInforDimitar.addComputer()
        ComputerInforDimitar.sendComputerName()
        ComputerInforDimitar.sendIntroducedDate()
        ComputerInforDimitar.sendDiscontinuedDate()
        ComputerInforDimitar.sendCompany()
        ComputerInforDimitar.createComputer()
        ComputerInforDimitar.elements.warningMsg().should('have.text','Done !  Computer Dimitar\'s PC has been created')
      })
})