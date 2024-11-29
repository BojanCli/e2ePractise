describe('Page Title Tests', () => {
    require('../Utilities/testSetup.cy')
    it('Verify Title', () => {
        cy.title().should('eq','Computers database')
      })
})