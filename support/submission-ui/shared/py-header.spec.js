
describe('Performance Year PY header', () => {

    beforeEach(() => {
        cy.homelogin()

        cy.groupsub()

    })

    afterEach(() => {
        cy.logout()

    })

    it('select performance year 2017', () => {

        // Select the PY 2017 and cancel 
        cy.get('#dropdownLabel')
            .should('contain', "Select Performance Year (PY)");

        cy.get('#selectPerformanceYear')
            .should('contain', "2018").click();

        cy.get('li')
            .contains('2017')
            .click();

        cy.get('.modal-dialog')
            .should('contain', "2017, Submission Window is Closed");

        cy.get('#navigationModalDescription')
            .should('contain', "The submission window for 2017 is now closed. To view your submission data, Final Score, and Payment Adjustment information please go to Performance Feedback.");

        cy.get('button')
            .contains('Cancel')
            .click();

        // Select the PY 2017 and continue
        cy.get('#dropdownLabel')
            .should('contain', "Select Performance Year (PY)");

        cy.get('#selectPerformanceYear')
            .should('contain', "2018")
            .click();

        cy.get('li')
            .contains('2017')
            .click();

        cy.get('button')
            .contains('Continue')
            .click();

        cy.url()
            .should('contain', "http://dev.qpp.cms.gov/user/submissions/feedback/2017");

    })

})