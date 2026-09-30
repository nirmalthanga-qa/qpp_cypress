describe('Quality page before submission', () => {

    beforeEach(() => {
        cy.homelogin()

        cy.groupsub()

        cy.qualitynavigation()

    })

    afterEach(() => {
        cy.logout()
    })

    it('quality header', () => {

        cy.get('#dropdownLabel').should('contain', 'Select Performance Year (PY)');

        cy.get('h1').should('contain', 'Quality');

        cy.get('[data-cy=quality-header]').should('contain', 'TIN:');

        cy.get('[data-cy=quality-print]').should('contain', 'Print');

    })

    it('quality bottom navigation', () => {

        // Overview Navigation Button
        cy.get('[data-cy=quality-bottom-navigation-buttons]')
            .contains('Return to Overview')
            .click();

        cy.get('h1').contains('Reporting Overview');

        cy.qualitynavigation();

        // PI Navigation Button
        cy.get('[data-cy=quality-bottom-navigation-buttons]')
            .contains('Go to Promoting Interoperability')
            .click();

        cy.get('[data-cy=pi-header]').contains('Promoting Interoperability');

    })

    it('learn more about quality', () => {

        // Quality Instruction
        cy.get('[data-cy=quality-score-instructions]')
            .should('contain', "The Quality score is based on the highest score among all your submission method scores. Select a submission method below to view it's details.");

        cy.get('[data-cy=learn-more-about-quality]')
            .should('contain', "Learn more about Quality");

        // No Quality measures
        cy.get('[data-cy=quality-message]')
            .should('contain', 'No Quality measures have been submitted for this profile.');
            
    })

})