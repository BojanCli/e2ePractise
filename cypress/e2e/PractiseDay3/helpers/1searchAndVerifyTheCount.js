class searchAndVerifyTheCount {
    search(Text){
        cy.get('#searchbox').clear().type(Text)
        cy.get('#searchsubmit').click();
    }
    verifyTheCountFromSearchResults() {
        cy.get('tbody tr').its('length').then((rowCount) => {
            cy.log(`Number of rows: ${rowCount}`);
            
            cy.get('h1').invoke('text').then((headerText) => {
                const computersFound = parseInt(headerText.match(/\d+/)[0], 10); // Extract number from text
                cy.log(`Number of computers found in header: ${computersFound}`);
        
                // Assert that the row count matches the number in the header
                expect(rowCount).to.equal(computersFound);
            });
        });
    }

}
export default new searchAndVerifyTheCount();