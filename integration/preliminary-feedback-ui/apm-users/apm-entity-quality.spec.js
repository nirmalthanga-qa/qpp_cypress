describe('APM Entity Quality Page', () => {

    beforeEach(() => {

        cy.homelogin()

        cy.pfnavigation()

    })

    afterEach(() => {

        cy.logout()

    })

    it('apm entity quality page', () => {

        cy.preliminarymodal()

        // Navigate to APM Entity page
        cy.apmentitynavigation()

        // View All Details Button
        cy.get('.improvements-view-all')
            .eq(0)
            .should('contain', 'View All Details')
            .click();

        // Breadcrumbs
        cy.get('[data-cy=breadcrumbs-list]')
            .should('contain', 'Account Home')
            .and('contain', 'Performance Feedback')
            .and('contain', 'Atrius Health  Inc.')
            .and('contain', 'Group Feedback Overview');

        // Page header
        cy.get('#page-header')
            .should('contain', 'Quality')
            .and('contain', 'TIN: 000001030')
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

        // App Page Header
        cy.get('app-page-header')
            .should('contain', 'At a Glance')
            .and('contain', 'The following is a detailed review of your highest scored Quality submission information. If you have submitted Quality data through multiple methods we are only showing the highest scored submission method. The highest scored submission method will be used to determine your Final Score and payment adjustment information.');

        // Go To CMS WI Button
        cy.get('app-web-interface-button')
            .should('contain', 'Go to CMS Web Interface');

        // Category Score
        cy.get('app-feedback-category-score')
            .should('contain', 'Score')
            .and('contain', '43.33')
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

        cy.get('#236')
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
