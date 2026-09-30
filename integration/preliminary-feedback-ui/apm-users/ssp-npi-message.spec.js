describe('SSP NPI message', () => {

    beforeEach(() => {

        cy.homelogin()

        cy.pfnavigation()

    })

    afterEach(() => {

        cy.logout()

    })

    it('message text assertion on SSP NPI', () => {

        cy.preliminarymodal()

        cy.get('.dashboard-tabs-container')
            .contains('Practices')
            .click();

        cy.get('app-name-tin-npi-address')
            .eq(4)
            .should('contain', 'TIN: #999202621');

        // Navigate to Practice Details page
        cy.get('.buttons-container')
            .eq(4)
            .should('contain', 'VIEW PRACTICE DETAILS')
            .click();

        cy.get('app-name-tin-npi-address')
            .should('contain', 'NPI: #8880613048');

        cy.get('app-feedback-messages')
            .eq(0)
            .should('contain', 'This is an Alternative Payment Model Participant.')
            .and('contain', 'Feedback will be based on the ACO score. Feedback is applicable to all MIPS eligible clinicians within the ACO.')
            .and('contain', 'You are part of a Shared Savings Program APM.')
            .and('contain', 'Participant in:');

        cy.get('app-tooltip')
            .eq(0)
            .should('contain', 'MIPS scores are calculated at the ACO level for groups participating in an APM. If groups participate in')
            .and('contain', 'more than one ACO, the groups may receive feedback for each ACO. Final MIPS feedback will be')
            .and('contain', 'available in Summer 2019.');

    })

})
