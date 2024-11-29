import { faker } from "@faker-js/faker";

describe (' add new computer ', () => {
    
    before(() => {
        cy.visit('https://computer-database.gatling.io/computers');
        cy.title().should('eq', 'Computers database');
    });
    
    it(' Add a new computer ', () => {
        const computerName = faker.internet.displayName();
        //const introduced = faker.date.past();
        //const discontinued = faker.date.future();
        
        cy.get('#add').click();
        cy.get('#name').type(computerName);
        cy.get('#introduced').type('1995-05-22');
        cy.get('#discontinued').type('1995-05-23');
        cy.get('#company').select(1);

        cy.get('[type="submit"]').click();
        cy.get('.alert-message.warning').should('contain.text', 'Done !  Computer '+computerName+' has been created')
    });
});