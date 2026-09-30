describe('PI Performance Period date range', () => {

    beforeEach(() => {

        cy.homelogin()

        cy.groupsub()

        cy.pinavigation()

    })

    afterEach(() => {
        
        cy.logout()

    })

    it('enter end date greater than start date', () => {

        cy.get('.performance-start').clear().type('02/02/2018');

        cy.get('.performance-end').clear().type('01/01/2018');

        cy.get('.submission-performance-period')
            .should('contain', 'End Date must be greater than Start Date.');

    })

    it('enter invalid performance year', () => {

        cy.get('.performance-start').clear().type('01/01/2020');

        cy.get('.submission-performance-period')
            .should('contain', 'Please enter valid date for performance year 2018.');

    })

    it('enter invalid date format', () => {

        cy.get('.performance-start').clear().type('20/01/2018');

        cy.get('.submission-performance-period')
            .should('contain', 'Please enter the valid Start Date with MM/DD/YYYY format for performance year 2018.');

    }) 

    it('enter less than 90 days range', () => {

        cy.get('.performance-start').clear().type('01/01/2018');

        cy.get('.performance-end').clear().type('03/30/2018');

        cy.get('.aci-performance-range-messages')
            .should('contain', 'You have selected a Performance Period of less than 90 days. To participate in this category, a minimum of 90 day Performance Period is required. This will result of a score of 0 for the category and you will not be able to report.');

    })

})

