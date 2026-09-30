describe('IA Page', () => {

    beforeEach(() => {

        cy.homelogin()

        cy.pfnavigation()

    })

    afterEach(() => {

        cy.logout()

    })

    it('ia components', () => {

        cy.preliminarymodal()

        // Navigate to Overview page
        cy.allsuccessoverview()

        // View All Details Button
        cy.get('.improvements-view-all')
            .eq(2)
            .should('contain', 'View All Details')
            .click();

        // Breadcrumbs
        cy.get('[data-cy=breadcrumbs-list]')
            .should('contain', 'Account Home')
            .and('contain', 'Performance Feedback')
            .and('contain', 'Elig WI Org 6')
            .and('contain', 'Group Feedback Overview');

        // Page header
        cy.get('#page-header')
            .should('contain', 'Improvement Activities')
            .and('contain', 'TIN: 000644007')
            .and('contain', 'Print')
            .and('contain', 'Download Data');

        // Yellow Banner Message
        cy.get('.message')
            .should('contain', 'Processing Submission Data')
            .and('contain', 'The information being displayed below is NOT your Final Score. Your Final Score will be available Summer 2019 During this timeframe, additional data will be scored and could effect your Final Score.');

        // PI Information
        cy.get('.ia-information')
            .should('contain', 'At a Glance')
            .and('contain', 'The following is a detail review of your Improvement Activites category information.');

        // Category Score
        cy.get('app-feedback-category-score')
            .should('contain', 'Score')
            .and('contain', '15')
            .and('contain', 'out of 15')
            .and('contain', 'Performance Period Date')
            .and('contain', 'High Weighted Activities')
            .and('contain', 'Highest Score Submission Method')
            .and('contain', 'Medium Weighted Activities');

        // How is the score calculated? modal
        cy.get('app-scores-legend-modal')
            .contains('How is the score calculated?')
            .click();

        cy.get('.modal-dialog')
            .should('contain', 'Calculating Your Improvement Activities Score')
            .and('contain', 'The Improvement Activities Performance Category counts for 15% (15 Points) of your Final Score. If you attest that you have completed one or more out of  Improvement Activites available in 2018, You can earn a maximum of 40 points for this category.')
            .and('contain', 'Improvement Activities Category Score')
            .and('contain', 'Improvement Activities Category Weight');

        cy.get('.modal-dialog')
            .eq(2)
            .contains('OK')
            .click();

        // Feedback Measures
        cy.get('.ia-measures')
            .should('contain', 'Submitted Activities');

        cy.get('app-feedback-measures')
            .should('contain', 'Achieving Health Equity');

        cy.get('.feedback-measures-header')
            .eq(0)
            .should('contain', 'Measure Name')
            .and('contain', 'Weight')
            .and('contain', 'Activity Score');

        cy.get('button')
            .contains('Expand All')
            .eq(0)
            .click();

        // IA Formula
        cy.get('app-formula')
            .should('contain', 'Your Total Improvement Activities Score')
            .and('contain', 'Below is how your Total Improvement Activities score is calculated based on the measures above.');

        cy.get('[data-cy=score-formula-field-header]')
            .should('contain', 'Category Score')
            .and('contain', 'Category Weight')
            .and('contain', 'Total Contribution to Final Score');

        cy.get('[data-cy=score-formula]')
            .should('contain', 'High Activity Points')
            .and('contain', 'Medium Activity Points')
            .and('contain', 'Maximum number of points')
            .and('contain', 'out of 15');

    })

})
