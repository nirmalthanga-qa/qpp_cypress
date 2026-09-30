describe('Text Assertion on Learn more about IA modal', () => {

    beforeEach(() => {
        cy.homelogin()

        cy.groupsub()

        cy.ianavigation()

    })

    afterEach(() => {
        cy.logout()

    })

    it('instruction text on ia modal', () => {

        cy.get('[data-cy=instruction-modal-button]').click();

        cy.get('[data-cy=modal-header]')
            .should('contain', 'Basic Navigation');

        cy.get('[data-cy=dialog-modal]')
            .should('contain', 'On this page, the user will be able to navigate and attest for any of the 92 Improvement Activities. The user is only required to select "Yes" for activities that they have performed. There are filtering capabilities built into the page allowing the user to quickly navigate all activities. Within the drop-down, the user can select measures by following information. Next to each filter listed is the total number of activities associated with each filter criteria.');

        cy.get('[data-cy=dialog-modal]')
            .should('contain', 'The user can select any or all of these filters. Additionally, there is a text search option which will allow the user to search for activities by text. By entering text, the page will filter the activities by entered information and highlight the entered information within the activities.');

        cy.get('[data-cy=dialog-modal]')
            .should('contain', 'By selecting "Yes" for an activity, the activity will be automatically submitted, stored, and calculated in real-time. To remove a selected activity, you can simply select the button again, which will remove the attestation for that activity and immediately update the score.');

        cy.get('[data-cy=dialog-modal]')
            .should('contain', 'Standard Category Scoring');

        cy.get('[data-cy=dialog-modal]')
            .should('contain', 'The Improvement Activities category is based on a 40 point scale. The activities are broken down into two scoring categories:');

        cy.get('[data-cy=dialog-modal]')
            .should('contain', 'The user can submit any assortment of activities to get to 40 points to fulfill the requirements for the Improvement Activity category. For example, 1 high weighted activity and 2 medium activities, will give the user 40 points. If the user obtains 40 points, they will get 15 points for the Improvement Activities category. Submitting additional activities will be logged but the user cannot obtain more than 40 points in the category or 15 points toward Final Score. If a user obtains less than 40 points, it will be based around on the scores below:');

        cy.get('[data-cy=dialog-modal]')
            .should('contain', 'Special Scoring Categories');

        cy.get('[data-cy=dialog-modal]')
            .should('contain', 'Bonus Criteria');

        cy.get('[data-cy=dialog-modal]')
            .should('contain', 'On the Improvement Activities page, there are measures that are notated with a CEHRT Eligible symbol. This notates that this activity is eligible for bonus points in the Promoting Interoperability category. By selecting one of these activities, the user will be eligible to submit that they have submitted the activity using CEHRT on the Promoting Interoperability page. This bonus will give 10 points towards the Promoting Interoperability category.');

        cy.get('[data-cy=modal-footer-close-button]').click();

    })

})