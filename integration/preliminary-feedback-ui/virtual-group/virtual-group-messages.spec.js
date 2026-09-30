describe('Virtual Group', () => {

    beforeEach(() => {

        cy.homelogin()

        cy.pfnavigation()

    })

    afterEach(() => {

        cy.logout()

    })

    it('PF Yellow Banner messages', () => {

        cy.preliminarymodal()

        cy.get('.dashboard-tabs-container')
            .contains('Virtual Groups')
            .click();

        // VG Message
        cy.get('app-notification')
            .should('contain', 'All eligible clinicians associated with this Virtual Group will be receiving the Virtual Group score. APM participants are not eligible to receive the Virtual Group Score and will receive their APM Score.');

        // Navigate to Virtual Group Details
        cy.get('.buttons-container')
            .eq(0)
            .should('contain', 'VIEW GROUP DETAILS');

    })

    it('vg details page practice list', () => {

        // Navigation to Virtual Group
        cy.vgnavigation()

        // Breadcrumbs
        cy.get('[data-cy=breadcrumbs-list]')
            .should('contain', 'Account Home')
            .and('contain', 'Performance Feedback');

        // Header text
        cy.get('#page-header')
            .should('contain', 'Virtual Group Details')
            .and('contain', 'Virtual Group ID: fake04')
            .and('contain', 'Print');

        // Yellow Banner Message
        cy.get('.message')
            .should('contain', 'Processing Submission Data')
            .and('contain', 'The information being displayed below is NOT your Final Score. Your Final Score will be available Summer 2019 During this timeframe, additional data will be scored and could effect your Final Score.');

        cy.get('app-name-tin-npi-address')
            .should('contain', ' Virtual Group ID: fake04 ');

        // Group Feedback button
        cy.get('.virtual-group-content-header-partition')
            .should('contain', 'View Group Feedback');

        // Practices
        cy.get('app-dashboard-list')
            .should('contain', 'Practices')
            .and('contain', 'TINs connected with this Virtual Group')
            .and('contain', 'Showing');

      // Valid TIN Search
        cy.get('[type=search]')
            .type('999326673 {enter}');

        cy.get('app-dashboard-list-item')
            .should('contain', 'TIN: #999326673')

        // App Notification TIN message
        cy.get('app-notification')
            .should('contain', 'Virtual Group participation requires a Virtual Group submission for payment adjustment. All submissions made by clinicians part of a Virtual Group will be considered voluntary are are not eligible for Final Score or payment adjustment.');

        // View Practice Details button
        cy.get('.dashboard-list-item-button')
            .should('contain', 'View Practice Details');

        cy.reload();

        cy.get('.dashboard-tabs-container')
            .contains('Virtual Groups')
            .click();

        cy.get('[type=search]')
            .clear()
            .type('000000000 {enter}');

        cy.get('.no-data-message')
            .should('contain', 'You have entered an incorrect TIN number or there is no data available for this TIN.' +
                'Please check your input and try again.');
    })

    it('vg details page cc list', () => {

        // Navigation to Virtual Group
        cy.vgnavigation()

        cy.get('.dashboard-list-item-button')
            .eq(0)
            .should('contain', 'View Practice Details')
            .click();

       cy.get('app-display-tin')
            .should('contain', 'TIN: #999326673');

        // Connected Clinicians
        cy.get('app-dashboard-list')
            .should('contain', 'Connected Clinicians')
            .and('contain', 'NPIs connected with this Virtual Group')
            .and('contain', 'Showing'); 

        // Valid NPI Search
        cy.get('[type=search]')
            .type('8883034096 {enter}');

        cy.get('app-dashboard-list-item')
            .should('contain', 'NPI: #8883034096');

        // App Notification NPI message
        cy.get('app-notification')
            .should('contain', 'Virtual Group participation requires a Virtual Group submission for payment adjustment. All submissions made by clinicians part of a Virtual Group will be considered voluntary are are not eligible for Final Score or payment adjustment.');

        cy.reload();

        cy.get('[type=search]')
            .clear()
            .type('0000000000 {enter}');

        cy.get('.no-data-message')
            .should('contain', 'You have entered an incorrect NPI number or there is no data available for this NPI.' +
                'Please check your input and try again.');

    })

})
