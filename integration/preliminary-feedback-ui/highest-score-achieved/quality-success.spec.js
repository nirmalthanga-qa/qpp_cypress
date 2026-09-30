describe('Quality Page', () => {

    beforeEach(() => {

        cy.homelogin()

        cy.pfnavigation()

    })

    afterEach(() => {

        cy.logout()

    })

    it('quality components', () => {

        cy.preliminarymodal()

        // Navigate to Overview page
        cy.allsuccessoverview()

        // View All Details Button
        cy.get('.improvements-view-all')
            .eq(0)
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
            .should('contain', 'Quality')
            .and('contain', 'TIN: 000644007')
            .and('contain', 'Print')
            .and('contain', 'Download Data');

        // Yellow Banner Message
        cy.get('.message')
            .should('contain', 'Processing Submission Data')
            .and('contain', 'The information being displayed below is NOT your Final Score. Your Final Score will be available Summer 2019 During this timeframe, additional data will be scored and could effect your Final Score.');

        // Quality Information
        cy.get('.quality-information')
            .should('contain', 'At a Glance')
            .and('contain', 'The following is a detailed review of your highest scored Quality submission information. If you have submitted Quality data through multiple methods we are only showing the highest scored submission method. The highest scored submission method will be used to determine your Final Score and payment adjustment information.');

        // Category Score
        cy.get('app-feedback-category-score')
            .should('contain', 'Score')
            .and('contain', '50')
            .and('contain', 'out of 50')
            .and('contain', 'Performance Period Date')
            .and('contain', 'Reported Measures')
            .and('contain', 'Highest Score Submission Method')
            .and('contain', 'High-Priority Measures');

        // How is the score calculated? modal
        cy.get('app-scores-legend-modal')
            .contains('How is the score calculated?')
            .click();

        cy.get('.modal-dialog')
            .should('contain', 'Calculating Your Quality Score')
            .and('contain', 'The Quality Performance Category counts for 50% (50 Points) of your Final Score. Clinicians can earn maximum of 10 points for each required measure. The submission method and correlating benchmark determines the points earned for each measure.')
            .and('contain', 'Quality Category Score')
            .and('contain', 'Quality Category Weight');

        cy.get('.modal-dialog')
            .eq(2)
            .contains('OK')
            .click();

        // Feedback measures
        cy.get('.feedback-quality-legend-title')
            .should('contain', 'Submitted Measures');

        // Measures that count toward Quality
        cy.get('app-feedback-measures')
            .should('contain', 'Measures that count toward Quality Performance Score')
            .and('contain', 'Your Measure Score includes both performance points and bonus points.');

        cy.get('.feedback-measures-header')
            .eq(0)
            .should('contain', 'Measure Name')
            .and('contain', 'Performance Rate')
            .and('contain', 'Measure Score');

        cy.get('button')
            .contains('Expand All')
            .eq(0)
            .click();

        cy.get('#305')
            .should('contain', 'Download Specifications');

        // Measures that earned bonus points only
        cy.get('app-feedback-measures')
            .should('contain', 'Measures that earned bonus points only')
            .and('contain', 'These measure(s) fall outside of your top scoring measures but received bonus points. Your Measure Score will only include those bonus points.');

        cy.get('.feedback-measures-header')
            .eq(1)
            .should('contain', 'Measure Name')
            .and('contain', 'Performance Rate')
            .and('contain', 'Measure Score');

        cy.get('button')
            .contains('Expand All')
            .eq(0)
            .click();

        cy.get('#236')
            .should('contain', 'Download Specifications');

        // Measures submitted but do not count towards Quality
        cy.get('app-feedback-measures')
            .should('contain', 'Measures submitted but do not count towards Quality')
            .and('contain', 'These measures either fall outside the top six measures or exceed the maximum bonus points moreover they do not contribute to the submission. The “Points from Benchmark Decile” is the measure score that measure recieved.');

        cy.get('.feedback-measures-header')
            .eq(2)
            .should('contain', 'Measure Name')
            .and('contain', 'Performance Rate')
            .and('contain', 'Measure Score');

        cy.get('button')
            .contains('Expand All')
            .eq(0)
            .click();

        cy.get('#117')
            .should('contain', 'Download Specifications');

        // Quality Formula
        cy.get('app-formula')
            .should('contain', 'Your Total Quality Score')
            .and('contain', 'Below is how your Total Quality score is calculated based on the measures above.');

        cy.get('[data-cy=score-formula-field-header]')
            .should('contain', 'Category Score')
            .and('contain', 'Category Weight')
            .and('contain', 'Total Contribution to Final Score');

        cy.get('[data-cy=score-formula]')
            .should('contain', 'Points from Quality measures that count towards Quality score.')
            .and('contain', 'Additional Bonus points.')
            .and('contain', 'Maximum number of points (# of required measures x 10).')
            .and('contain', 'out of 50');

    })

})
