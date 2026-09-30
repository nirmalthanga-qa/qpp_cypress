describe('IA Filter and Search Activities', () => {

    beforeEach(() => {
        cy.homelogin()

        cy.groupsub()

        cy.ianavigation()

    })

    afterEach(() => {
        cy.logout()

    })

    it('filter by', () => {

        cy.iaenteringdates()

        cy.get('.dropdown-list-container').click();

        cy.get('.ia-dropdown-list').contains('Achieving Health Equity').click();

        cy.get('.cpia-filters-group').should('contain', '6');

        cy.get('button').contains('Clear All Filters').click();

    })

    it('search activities', () => {

        cy.get('.search-group-input').type('eligible');

        cy.get('.search-group').click();

        cy.get('.cpia-filters-group').should('contain', '34');

        cy.get('.clear').click();

        cy.get('.cpia-filters-group').should('contain', '112');

    })

})