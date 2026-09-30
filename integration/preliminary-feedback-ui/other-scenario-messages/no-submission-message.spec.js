describe('No Submission Data', () => {

    beforeEach(() => {

        cy.homelogin()

        cy.pfnavigation()

    })

    afterEach(() => {

        cy.logout()

    })

    it('no submission message assertion', () => {

        cy.preliminarymodal()

        cy.get('.dashboard-tabs-container')
            .contains('Practices')
            .click();

        cy.get('app-name-tin-npi-address')
            .eq(2)
            .should('contain', 'TIN: #999034573');

        // No Submission message in PF page
        cy.get('app-notification')
            .should('contain', 'We have not received Submission Data from this practice.');

        // Navigate to Practice Details page
        cy.get('.buttons-container')
            .eq(2)
            .should('contain', 'VIEW PRACTICE DETAILS')
            .click();

        cy.get('#page-header')
            .should('contain', 'Practice Details')
            .and('contain', 'TIN: 999034573');

        // No Submission message in PF page
        cy.get('app-notification')
            .should('contain', 'We have not received Submission Data from this practice.');

    })

})
