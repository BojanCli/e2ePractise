describe (' verify the title ', () => {
    it(' verify page title', () => {
        cy.visit('https://computer-database.gatling.io/computers');
        cy.title().should('eq', 'Computers database');
    });
});