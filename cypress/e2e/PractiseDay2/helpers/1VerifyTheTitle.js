class VerifyTheTitle {
    visitWebPage() {
        cy.visit('https://computer-database.gatling.io/computers');
        cy.title().should('eq', 'Computers database');
    }

}
export default new VerifyTheTitle();