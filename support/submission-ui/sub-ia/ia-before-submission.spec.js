describe('IA Page Before Submission', () => {

    beforeEach(() => {
        cy.homelogin()

        cy.groupsub()

        cy.ianavigation()

    })

    afterEach(() => {
        cy.logout()
    })

    it('ia header', () => {

        cy.get('#dropdownLabel')
            .should('contain', 'Select Performance Year (PY)');

        cy.get('h1').should('contain', 'Improvement Activities');

        cy.get('[data-cy=ia-header]')
            .should('contain', 'TIN:');

        cy.get('[data-cy=ia-print]')
            .should('contain', 'Print');

    })

    it('ia bottom navigation', () => {

        // Overview Navigation Button
        cy.get('[data-cy=return-overview-button]')
            .click();

        cy.get('h1').contains('Reporting Overview');

        cy.ianavigation();

        // PI Navigation Button
        cy.get('[data-cy=category-navigation-button]')
            .click();

        cy.get('[data-cy=quality-header]').contains('Quality');

    })

    it('learn more about ia', () => {

        // PI Instruction
        cy.get('[data-cy=ia-submission-tabs-header]')
            .should('contain', "Review the Improvement Activities available. Remember, in order to get credit for Improvement Activities, you must submit information for the required activites.");

        cy.get('[data-cy=instruction-modal-button]')
            .should('contain', "Learn more about Improvement Activities");

    })

    it('manually enter and steps text assert', () => {

        cy.get('.submission-manual-attestation-header')
            //get('[data-cy=submission-manual-attestation-header]')
            .should('contain', 'Manually Enter Your Measures');

        cy.get('.submission-manual-attestation-header')
            //get('[data-cy=submission-manual-attestation-header]')
            .should('contain', 'To manually enter your IA measures, start by selecting the performance period then which measure set.');

        cy.get('[data-cy=submission-step-header]')
            .should('contain', 'Step 1 - Start by selecting your performance period:');

        cy.get('[data-cy=submission-step-header]')
            .should('contain', 'Step 2 - Search for your activities:');

        // Submission Score Bar
        cy.get('.submission-score-bar')
            .should('contain', 'Improvement Activites Score');

        cy.get('.submission-score-bar')
            .should('contain', 'Total Score');

        cy.get('.submission-score-bar')
            .should('contain', '0 out of 40');

    })

    //data-cy=div-submission-score-bar

})