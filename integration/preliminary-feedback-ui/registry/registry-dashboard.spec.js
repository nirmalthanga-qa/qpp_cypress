describe('2018 Registry Submission Details', () => {

    beforeEach(() => {

        cy.homelogin()

        cy.pfnavigation()

    })

    afterEach(() => {

        cy.logout()
    })

    it('header text and message assertion', () => {

        cy.preliminarymodal()

        cy.registrynavigation()

        // PY Year toggle
        cy.get('.submission-select-performance-year')
            .should('contain', 'Select Performance Year (PY)')
            .and('contain', '2018');

        // Header
        cy.get('#page-header')
            .should('contain', '2018 Registry Submission Details')
            .and('contain', 'Print')
            .and('contain', 'Download API Token');

        // Submission window closed message
        cy.get('.text-red')
            .should('contain', 'The submission period is now closed. This information can no longer be edited, and is read-only.');

    })

    it('submission detail section', () => {

        cy.registrynavigation()

        // Displaying
        cy.get('.detailed-submission-list')
            .should('contain', 'Displaying: 1 - 10');

        cy.wait(3000);

        // Registry Submission container
        cy.get('app-detailed-submission-list-toolbar')
            .should('contain', 'SELECT ALL')
            .and('contain', 'SEARCH');

        // Download and Delete disabled buttons
        cy.get('app-detailed-submission-list-toolbar')
            .contains('DOWNLOAD')
            .should('be.disabled');

        cy.get('app-detailed-submission-list-toolbar')
            .contains('DELETE')
            .should('be.disabled');

        // Select All Checkbox
        cy.get('[type="checkbox"]')
            .eq(0)
            .check();

        cy.get('app-detailed-submission-list-toolbar')
            .contains('DOWNLOAD')
            .should('be.enabled');

    })

    it('registry search', () => {

        cy.registrynavigation()

        cy.wait(3000);

        cy.get('app-detailed-submission-list-toolbar')
            .contains('SEARCH')
            .click();

        cy.get('[type="text"]')
            .eq(0)
            .type('999967032');

        cy.get('.detailed-submission-list-search-button')
            .click();

        cy.get('app-detailed-submissions-list-content-header')
            .should('contain', 'TIN: 999967032')
            .and('contain', 'Preliminary Score:')
            .and('contain', '46.9 Points')
            .and('contain', 'Out of 100 Points');

        cy.get('.content-title')
            .should('contain', 'Score Breakdown');

        cy.get('.content-title-description')
            .should('contain', 'Each TINs Score is achieved by adding up the points earned in each Performance Category.');

        // PI measure
        cy.get('.detailed-submissions-list-content-body')
            .should('contain', 'Performance Category Score')
            .and('contain', 'Promoting Interoperability')
            .and('contain', 'Submission Type: EHR')
            .and('contain', 'Measures Submitted: 11')
            .and('contain', 'Performance Score 100')
            .and('contain', '100 Points')
            .and('contain', 'Out of 100 Points');

        // Bonus Measures
        cy.get('.detailed-submissions-list-content-body')
            .should('contain', 'Additional Awarded Bonus Points')
            .and('contain', 'Small Practice Bonus')
            .and('contain', 'Bonus Points 5')
            .and('contain', '5 Points')
            .and('contain', 'Out of 5 Points')
            .and('contain', 'Complex Patient Bonus');

        // Expand
        cy.get('.measure-expand-collapse-button')
            .should('contain', 'EXPAND')
            .click()
            .should('contain', 'COLLAPSE');

        cy.get('.detailed-submissions-list-scores-card')
            .should('contain', 'Attestation Statements');

    })

    it('pagination', () => {

        cy.registrynavigation()

        cy.get('.detailed-submission-list-pagination')
            .should('contain', 'First')
            .and('contain', 'Previous')
            .and('contain', 'Next')
            .and('contain', 'Last');

        cy.get('.detailed-submission-list-pagination')
            .contains('2')
            .click();

        cy.wait(3000);

        cy.get('.detailed-submission-list')
            .should('contain', 'Displaying: 11 - 20');

    })

})
