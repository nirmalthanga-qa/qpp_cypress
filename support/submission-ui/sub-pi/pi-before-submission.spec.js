describe('pi page before submission', () => {

    beforeEach(() => {
        cy.homelogin()

        cy.groupsub()

        cy.pinavigation()

    })

    afterEach(() => {
        cy.logout()
    })

    it('pi header', () => {

        cy.get('#dropdownLabel').should('contain', 'Select Performance Year (PY)');

        cy.get('[data-cy=pi-header]').should('contain', 'Promoting Interoperability');

        cy.get('[data-cy=pi-header]').should('contain', 'TIN:');

        cy.get('[data-cy=pi-print]').should('contain', 'Print');

    })

    it('pi bottom navigation', () => {

        // Overview Navigation Button
        cy.get('[data-cy=pi-bottom-navigation-buttons]').contains('Return to Overview').click();

        cy.get('h1').contains('Reporting Overview');

        cy.pinavigation();

        // PI Navigation Button
        cy.get('[data-cy=pi-bottom-navigation-buttons]').contains('Go to Improvement Activities').click();

        cy.get('[data-cy=ia-header]').contains('Improvement Activities');

    })

    it('learn more about pi', () => {

        // PI Instruction
        cy.get('[data-cy=pi-landing-message]').should('contain', "Formerly Advancing Care Information (ACI), this performance category promotes patient engagement and electronic exchange of information using certified electronic health record technology (CEHRT). CMS is re-naming the ACI performance category to Promoting Interoperability (PI) to focus on interoperability, improving flexibility, relieving burden.");

        cy.get('[data-cy=pi-instruction]').should('contain', "Learn more about Promoting Interoperability");

    })

})