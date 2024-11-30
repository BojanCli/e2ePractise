class computerDatabasePage {
    elements = {
        addBtn : () => cy.get('#add'),
        nameTxt : () => cy.get('#name'),
        introducedTxt : () => cy.get('#introduced'),
        discontinuedTxt : () => cy.get('#discontinued'),
        companyDropdown : () => cy.get('#company'),
        submitBtn : () => cy.get('[type=submit]'),
        warningMsg : () => cy.get('.warning')
    }
    addComputer() {
        this.elements.addBtn().click()
    }
    sendComputerName(name) {
        this.elements.nameTxt().type(name)
    }
    sendIntroducedDate(introduced) {
        this.elements.introducedTxt().type(introduced)
    }
    sendDiscontinuedDate(discontinued) {
        this.elements.discontinuedTxt().type(discontinued)
    }
    sendCompany(company) {
        this.elements.companyDropdown().select(company)
    }
    createComputer() {
        this.elements.submitBtn().click()
    }
}
 
module.exports = new computerDatabasePage();