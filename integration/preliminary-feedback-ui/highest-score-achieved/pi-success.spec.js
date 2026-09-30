describe('PI Page', () => {

    beforeEach(() => {

        cy.homelogin()

        cy.pfnavigation()

    })

    afterEach(() => {

        cy.logout()

    })

    it('pi components', () => {

        cy.preliminarymodal()

        // Navigate to Overview page
        cy.allsuccessoverview()

        // View All Details Button
        cy.get('.improvements-view-all')
            .eq(1)
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
            .should('contain', 'Promoting Interoperability')
            .and('contain', 'TIN: 000644007')
            .and('contain', 'Print')
            .and('contain', 'Download Data');

        // Yellow Banner Message
        cy.get('.message')
            .should('contain', 'Processing Submission Data')
            .and('contain', 'The information being displayed below is NOT your Final Score. Your Final Score will be available Summer 2019 During this timeframe, additional data will be scored and could effect your Final Score.');

        // PI Information
        cy.get('.aci-information')
            .should('contain', 'At a Glance')
            .and('contain', 'The following is a detailed review of your highest scored Promoting Interoperability submission information. If you have submitted Promoting Interoperability data through multiple methods we are only showing the highest scored submission method. The highest scored submission method will be used to determine your Final Score and payment adjustment information.');

        // Category Score
        cy.get('app-feedback-category-score')
            .should('contain', 'Score')
            .and('contain', '25')
            .and('contain', 'out of 25')
            .and('contain', 'Performance Period Date')
            .and('contain', 'Base Measures')
            .and('contain', 'Highest Score Submission Method')
            .and('contain', 'Optional Measures');

        // How is the score calculated? modal
        cy.get('app-scores-legend-modal')
            .contains('How is the score calculated?')
            .click();

        cy.get('.modal-dialog')
            .should('contain', 'Calculating Your Promoting Interoperability Score')
            .and('contain', 'The Promoting Interoperability Performance Category counts for 25% (25 Points) of your Final Score. Eligible clinicians report a group of objectives and measures for MIPS. These are called Measure Sets which are based on the EHR edition being used.')
            .and('contain', 'Promoting Interoperability Category Score')
            .and('contain', 'Promoting Interoperability Category Weight');

        cy.get('.modal-dialog')
            .eq(2)
            .contains('OK')
            .click();

        // Feedback Measures
        cy.get('.feedback-pi-legend-title')
            .should('contain', '2018 Submitted Measures');

        // Required Measures for Base Score
        cy.get('app-feedback-measures')
            .should('contain', 'Required Measures for Base Score')
            .and('contain', "You’ll need to meet the requirements of all the base score measures in order to receive the 50% base score. If these requirements are not met, you will get a 0 for the overall PI  performance category score");

        cy.get('.feedback-measures-header')
            .eq(0)
            .should('contain', 'Measure Name')
            .and('contain', 'Performance Score');

        cy.get('button')
            .contains('Expand All')
            .eq(0)
            .click();

        cy.get('#PI_EP_1')
            .should('contain', 'Download Specifications');

        // Optional Performance Measures
        cy.get('app-feedback-measures')
            .should('contain', 'Optional Performance Measures')
            .and('contain', 'The following measures where not required but will contribute additional performance points towards your category score.');

        cy.get('.feedback-measures-header')
            .eq(1)
            .should('contain', 'Measure Name')
            .and('contain', 'Performance Score');

        cy.get('button')
            .contains('Expand All')
            .eq(0)
            .click();

        cy.get('#PI_CCTPE_2')
            .should('contain', 'Download Specifications');

        // PI Formula
        cy.get('app-formula')
            .should('contain', 'Your Total Promoting Interoperability Score')
            .and('contain', 'Below is how your Total Promoting Interoperability score is calculated based on the measures above.');

        cy.get('[data-cy=score-formula-field-header]')
            .should('contain', 'Category Score')
            .and('contain', 'Category Weight')
            .and('contain', 'Total Contribution to Final Score');

        cy.get('[data-cy=score-formula]')
            .should('contain', 'Base Score')
            .and('contain', 'Additional Performance and Bonus points')
            .and('contain', 'Maximum number of points')
            .and('contain', 'out of 25');

    })

})
