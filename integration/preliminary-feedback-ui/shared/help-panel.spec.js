describe('Get Help from CMS', () => {

    beforeEach(() => {
        cy.homelogin()

    })

    afterEach(() => {
        cy.logout()

    })

    it('help text assertion', () => {

        // Get Help text assertion
        cy.get('[data-cy=help-header]')
            .should('contain', "Get Help from CMS");

        cy.get('[data-cy=help-panels-container]')
            .should('contain', "CMS offers a range of support to help your practice actively participate in QPP.");

        // Service Center text assertion 
        cy.get('[data-cy=help-options]')
            .should('contain', "Service Center");

        cy.get('[data-cy=help-options]')
            .should('contain', "1-866-288-8292");

        // TTY text assertion
        cy.get('[data-cy=help-options]')
            .should('contain', "Tty");

        cy.get('[data-cy=help-options]')
            .should('contain', "1-877-715-6222");

        // Email text assertion
        cy.get('[data-cy=help-options]')
            .should('contain', "Email");

        cy.get('[data-cy=help-options]')
            .should('contain', "QPP@cms.hhs.gov");

    })

    it('request direct technical assistance', () => {

        // Help Panel text assertion
        cy.get('[data-cy=right-help-panel]')
            .should('contain', "Request Direct Technical Assistance");

        cy.get('[data-cy=right-help-panel]')
            .should('contain', "This support is available through local, experienced organizations that are ready to help at no-cost to you.");

        // Request Assistance text assertion
        cy.get('[data-cy=right-help-panel]')
            .should('contain', "Request Assistance");

        cy.get('.help-panel')
            .eq(2)
            .should('contain', 'Request a Targeted Review')
            .and('contain', 'Requesting a targeted review will not be available until Summer 2019 when the Final Score will be available.');

    })

})
