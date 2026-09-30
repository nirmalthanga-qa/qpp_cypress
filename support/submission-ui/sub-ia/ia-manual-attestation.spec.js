describe('IA Manual submission', () => {

    beforeEach(() => {
        cy.homelogin()

        cy.groupsub()

        cy.ianavigation()

    })

    afterEach(() => {
        cy.logout()

    })

    it('manual attestation', () => {

        cy.iaenteringdates()


        // Total number of Activities
        cy.get('[data-cy=cpia-filters-group]')
            .should('contain', '112');

        // Filter By
        cy.get('[data-cy=cpia-filters-bar]')
            .should('contain', 'Filter By');

        // Search Activities
        cy.get('[data-cy=cpia-filters-bar]')
            .should('contain', 'Search');


        // Attesting IA_PCMH

        cy.get('[data-cy=ia-measures-container]')
            .contains('Electronic submission of Patient Centered Medical Home accreditation');


        cy.get('[data-cy=ia-measures-container]')
            .contains('Activity ID: IA_PCMH');


        cy.get('.submission-boolean-measure-button').first().click();

        // Submission Score Bar

        cy.get('[data-cy=div-submission-score-bar]')
            .should('contain', 'Improvement Activites Score');

        cy.get('[data-cy=submission-score-bar-score-block]')
            .should('contain', 'Total Score');

        cy.get('[data-cy=submission-score-bar-score-block]')
            .should('contain', '40 out of 40');

        cy.get('[data-cy=completed-submission-score-bar-score-block]')
            .should('contain', 'Completed Activities');

        cy.get('[data-cy=completed-submission-score-bar-score-block]')
            .should('contain', '1');

        // Calculation Section

        cy.get('[data-cy=score-formula-header]')
            .should('contain', 'Your Total Improvement Activities Score');

        cy.get('[data-cy=score-formula-header]')
            .should('contain', 'Below is how your Total Improvement Activities score is calculated based on the measures above.');

        cy.get('[data-cy=score-formula-container]')
            .should('contain', 'You have received the maximum number of points available, 15, for reporting Patient-Centered Medical Home (PCMH).');

        // CEHRT Yellow Banner

        cy.get('[data-cy=cehrt-notification]')
            .should('contain', 'This activity is Eligible for');

        cy.get('[data-cy=cehrt-notification]')
            .should('contain', 'Certified Electronic Health Record Technology (CEHRT)');

        cy.get('[data-cy=cehrt-notification]')
            .should('contain', 'bonus in the Promoting Interoperability category. For more Information regarding CEHRT, please visit the');

        // Group Header Title

        cy.get('[data-cy=ia-measure-list]')
            .should('contain', 'Achieving Health Equity');

        cy.get('[data-cy=ia-measure-list]')
            .should('contain', 'Behavioral And Mental Health');

        cy.get('[data-cy=ia-measure-list]')
            .should('contain', 'Beneficiary Engagement');

        cy.get('[data-cy=ia-measure-list]')
            .should('contain', 'Care Coordination');

        cy.get('[data-cy=ia-measure-list]')
            .should('contain', 'Emergency Response And Preparedness');

        cy.get('[data-cy=ia-measure-list]')
            .should('contain', 'Expanded Practice Access');

        cy.get('[data-cy=ia-measure-list]')
            .should('contain', 'Patient Safety And Practice Assessment');

        cy.get('[data-cy=ia-measure-list]')
            .should('contain', 'Population Management');

        // Delete Measures
        cy.deletemeasures()

    })

})