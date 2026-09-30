describe('IA Performance Period date range', () => {

    beforeEach(() => {
        cy.homelogin()

        cy.groupsub()

        cy.ianavigation()

    })

    afterEach(() => {
        cy.logout()
    })

    it('enter end date greater than start date', () => {

        cy.get('.performance-start').clear().type('02/02/2018');

        cy.get('.performance-end').clear().type('01/01/2018');

        cy.get('.submission-performance-period').should('contain', 'End Date must be greater than Start Date.');

        cy.get('.cpia-filters-group').should('contain', '0');

    })

    it('enter invalid performance year', () => {

        cy.get('.performance-start').clear().type('01/01/2020');

        cy.get('.submission-performance-period').should('contain', 'Please enter valid date for performance year 2018.');

        cy.get('.cpia-filters-group').should('contain', '0');

    })

    it('enter invalid date format', () => {

        cy.get('.performance-start').clear().type('20/01/2018');

        cy.get('.submission-performance-period').should('contain', 'Please enter the valid Start Date with MM/DD/YYYY format for performance year 2018.');

        cy.get('.cpia-filters-group').should('contain', '0');

    })

    it('enter valid start and end dates', () => {

        cy.get('.performance-start').clear().type('01/01/2018');

        cy.get('.performance-end').clear().type('01/02/2018');

        cy.get('.cpia-filters-group').should('contain', '112');

    }) 

})

