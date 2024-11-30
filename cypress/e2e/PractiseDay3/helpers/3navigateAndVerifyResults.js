class overviewNavigating {
    
    elements = {
        thirdComputer : () => cy.get('table.computers tbody tr:nth-child(3) td:nth-child(1) a'),
        nextBtn : () => cy.contains("Next →")
    }
    
    locators = {
        nextButton : '#pagination ul li.next a',
        paginationInfo : '#pagination',
        tableRows : 'tbody > tr',
    }

    clickButton(buttonElement) {
        cy.get(buttonElement).click();
    }
    
    clickNextButton(times) {
        for (let i = 0; i < times; i++)  {
            cy.get(this.locators.nextButton).click();
        }
    }

    verifyPaginationText(expectedText) {
        cy.get(this.locators.paginationInfo).should('include.text', expectedText);
    }

    verifyResults(rowIndex, expectedText) {
        cy.get(this.locators.tableRows)
            .eq(rowIndex) // Select the row by index
            .find('td') // Get all cells in the row
            .first() // Focus on the first cell in the row
            .should('have.text', expectedText); // Verify the text matches the expected value
    }

    
}
 
export default new overviewNavigating();