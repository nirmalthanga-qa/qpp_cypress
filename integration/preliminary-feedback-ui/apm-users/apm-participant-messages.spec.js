describe('APM Participant messages', () => {

    beforeEach(() => {

        cy.homelogin()

        cy.pfnavigation()

    })

    afterEach(() => {

        cy.logout()

    })

    it('apm participant messages in practice details', () => {

        cy.preliminarymodal()

        cy.get('.dashboard-tabs-container')
            .contains('Practices')
            .click();

        cy.get('app-name-tin-npi-address')
            .eq(3)
            .should('contain', 'TIN: #999192724');

        // Navigate to Practice Details page
        cy.get('.buttons-container')
            .eq(3)
            .should('contain', 'VIEW PRACTICE DETAILS')
            .click();

        // APM Message in Practice section
        cy.get('app-feedback-practice-details')
            .should('contain', 'TIN:999192724')
            .and('contain', 'VIEW PRACTICE FEEDBACK')
            .and('contain', 'Some of your clinicians are participants in an Alternative Payment Model (APM).');

        cy.get('app-name-tin-npi-address')
            .should('contain', 'NPI: #8884735038');

        // APM Message for Clinicians (QP)
        cy.get('app-notification')
            .and('contain', 'Clinicians that are Qualifying APM Participants (QP) are exempt from MIPS and will not receive MIPS Performance Feedback.');

    })

})
