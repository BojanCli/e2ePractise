class ComputersInfo {
    visitWebPage() {
        cy.visit('https://computer-database.gatling.io/computers');
    }

    addNew3Computers() {
        const computers = [
            { name: 'abc', introduced: '1995-05-22', discontinued: '1996-05-22', company: 'Apple Inc.' },
            { name: '123', introduced: '2000-05-22', discontinued: '2001-05-22', company: 'Nokia' },
            { name: '000', introduced: '2010-05-22', discontinued: '2011-05-22', company: 'Samsung Electronics' },
        ];
        
        computers.forEach((computer) => {    
            cy.get('#add').click();
            cy.get('#name').type(computer.name);
            cy.get('#introduced').type(computer.introduced);
            cy.get('#discontinued').type(computer.discontinued);
            cy.get('#company').select(computer.company);
            cy.get('[type="submit"]').click();
            cy.get('.alert-message.warning').should('contain.text', 'Done !  Computer '+computer.name+' has been created');
        })
    }
}
export default new ComputersInfo();