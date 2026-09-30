describe('Performance Feedback Page', () => {

    beforeEach(() => {

        cy.homelogin()

        cy.pfnavigation()

    })

    afterEach(() => {

        cy.logout()

    })

    it('header components', () => {

        cy.preliminarymodal()

        cy.get('.dashboard-tabs-container')
            .contains('Practices')
            .click();

        cy.wait(2000);

        cy.get('.buttons-container')
            .eq(0)
            .should('contain', 'VIEW PRACTICE DETAILS')
            .click();

        cy.get('.page-title')
            .should('contain', 'Practice Details');

        cy.get('button')
            .contains('Print');

        cy.get('button')
            .contains('Download Data');

        // Yellow Banner Message
        cy.get('.message')
            .should('contain', 'Processing Submission Data')
            .and('contain', 'The information being displayed below is NOT your Final Score. Your Final Score will be available Summer 2019 During this timeframe, additional data will be scored and could effect your Final Score.');

        cy.get('.message')
            .contains('View Pending Data')
            .click();

        cy.get('.modal-dialog')
            .should('contain', 'Performance Feedback Data Is Still Pending');

        cy.get('#disclaimerModalDescription')
            .should('contain', 'We are still processing your feedback data. The information displayed on the following pages is NOT your final score or feedback. Your final score and feedback will be available Summer 2019. Between now and summer your feedback and scores could change at the performance category level or measure level based on the availability of new or updated information, such as:');

        cy.get('.modal-dialog')
            .contains('OK')
            .click();

        // Group section
        cy.get('.practice-details-label')
            .should('contain', 'Elig WI Org 6');

        cy.get('.practice-details-actions')
            .should('contain', 'VIEW PRACTICE FEEDBACK');

        // Individual section

        cy.get('.dashboard-list-header-title')
            .should('contain', 'Connected Clinicians');

        cy.get('.dashboard-list-header-description')
            .should('contain', 'Select one of the clinicians below to view their performance details.');

        cy.get('button')
            .contains('Download Data (Page 1)');

        // Valid NPI Search
        cy.get('[type=search]')
            .type('0002357941 {enter}');

        cy.get('app-name-tin-npi-address')
            .should('contain', 'NPI: #0002357941');

        cy.reload();

        cy.wait(1000)

        // Invalid NPI Search

        cy.get('[type=search]')
            .type('0000000000 {enter}');

        cy.get('.no-data-message')
            .should('contain', 'You have entered an incorrect NPI number or there is no data available for this NPI.' +
                'Please check your input and try again.');

    })

})
