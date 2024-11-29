class AddNewComputer {
    addNewComputer(computerName, introduced, discontinued) {
        cy.get('#add').click();
        cy.get('#name').type(computerName);
        cy.get('#introduced').type(introduced);
        cy.get('#discontinued').type(discontinued);
        cy.get('#company').select(1);
    }
    SaveAndVerify() {
        cy.get('[type="submit"]').click();
        cy.get('.alert-message.warning').should('contain.text', 'Done !  Computer '+computerName+' has been created')
    }
}
export default new AddNewComputer();