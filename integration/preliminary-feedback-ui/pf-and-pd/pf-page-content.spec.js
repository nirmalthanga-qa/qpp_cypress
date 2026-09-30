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

        cy.get('.page-title')
            .should('contain', 'Performance Feedback');

        cy.get('.page-header-content')
            .should('contain', ' Performance Year (PY) 2018 ');

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

    })

    it('practices page items', () => {

        cy.get('.dashboard-tabs-container')
            .contains('Practices')
            .click();

        cy.get('.dashboard-list-header-content')
            .should('contain', 'Practices')
            .and('contain', 'Select one of the Practices below to view its performance details.');

        cy.wait(2000);

        cy.get('.buttons-container')
            .eq(0)
            .should('contain', 'VIEW PRACTICE DETAILS');

        cy.get('.dropdown-wrapper')
            .eq(0)
            .should('contain', 'Download Data')
            .click();

        cy.get('li')
            .contains('Files');
        cy.get('li')
            .contains('Submission Data.CSV');
        cy.get('li')
            .contains('Connected Clinician List.CSV');

        cy.get('.list-metadata')
            .contains('Showing')

        // TIN Search 
        cy.get('[type=search]')
            .type('000644007 {enter}');

        cy.get('app-name-tin-npi-address')
            .should('contain', 'TIN: #000644007');

        cy.reload();

        cy.get('.dashboard-tabs-container')
            .contains('Practices')
            .click();

        cy.get('[type=search]')
            .clear()
            .type('000000000 {enter}');

        cy.get('.no-data-message')
            .should('contain', 'You have entered an incorrect TIN number or there is no data available for this TIN.' +
                'Please check your input and try again.');

    })

    it('virtual group page items', () => {

        cy.get('.dashboard-tabs-container')
            .contains('Virtual Groups')
            .click();

        cy.get('.dashboard-list-header-content')
            .should('contain', 'Virtual Groups')
            .and('contain', 'Select one of the Virtual Groups below to view its performance details.');

        cy.get('.buttons-container')
            .eq(0)
            .should('contain', 'VIEW GROUP DETAILS');

        cy.get('.list-metadata')
            .contains('Showing');

        // VG Search
        cy.get('[type=search]')
            .type('fake04 {enter}');

        cy.get('app-name-tin-npi-address')
            .should('contain', 'Virtual Group ID: fake04');

    })

    it('registry page items', () => {

        cy.get('.dashboard-tabs-container')
            .contains('Registries')
            .click();

        cy.get('.dashboard-list-header-content')
            .should('contain', 'Registries')
            .and('contain', 'Select one of the Registries below to view its performance details.');

        cy.get('.buttons-container')
            .eq(0)
            .should('contain', 'VIEW DASHBOARD');

        cy.get('.list-metadata')
            .contains('Showing');

    })

    it('apm entities', () => {

        cy.get('.dashboard-tabs-container')
            .contains('APM Entities')
            .click();

        cy.get('.dashboard-list-header-content')
            .should('contain', 'APM Entities')
            .and('contain', 'Select one of the APM Entities below to view its performance details.');

        cy.get('.buttons-container')
            .eq(0)
            .should('contain', 'VIEW APM ENTITY DETAILS');

        cy.get('.list-metadata')
            .contains('Showing');

        // APM Search
        cy.get('[type=search]')
            .type('V204 {enter}');

        cy.get('app-name-tin-npi-address')
            .should('contain', 'APM Entity ID: V204');

    })

})
