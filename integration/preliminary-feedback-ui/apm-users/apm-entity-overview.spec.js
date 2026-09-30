describe('APM Entity Message and Overview page', () => {

    beforeEach(() => {

        cy.homelogin()

        cy.pfnavigation()

    })

    afterEach(() => {

        cy.logout()

    })

    it('apm entity message', () => {

       cy.preliminarymodal()

        cy.get('.dashboard-tabs-container')
            .contains('APM Entities')
            .click();

        cy.get('app-name-tin-npi-address')
            .eq(0)
            .should('contain', ' Atrius Health  Inc.')
            .and('contain', 'APM Entity ID: V204');

        cy.get('.apm-message-wrapper')
            .should('contain', 'This score will reflect the score that will be given to all participants who are not Qualifying APM Participants')
            .and('contain', '(QP). Feedback is applicable to all MIPS eligible clinicians within the APM Entity.');

        cy.get('.cms-tooltip-wrapper')
            .should('contain', 'MIPS scores are calculated at the APM entity level for groups participating in an APM. If groups participate in')
            .and('contain', 'more than one APM Entity, the groups may receive feedback for each APM Entity. Final MIPS feedback will be')
            .and('contain', 'available in Summer 2019.');

    })

    it('apm overview page', () => {

        // Navigate to APM Entity page
        cy.apmentitynavigation()

        // Breadcrumbs
        cy.get('[data-cy=breadcrumbs-list]')
            .should('contain', 'Account Home')
            .and('contain', 'Performance Feedback');

        // Header texts
        cy.get('#page-header')
            .should('contain', 'Overview')
            .and('contain', 'TIN: 000001030')
            .and('contain', 'Print')
            .and('contain', 'Download Data');

        // Yellow Banner Message
        cy.get('.message')
            .should('contain', 'Processing Submission Data')
            .and('contain', 'The information being displayed below is NOT your Final Score. Your Final Score will be available Summer 2019 During this timeframe, additional data will be scored and could effect your Final Score.');

        // Practice Details
        cy.get('.practice-details')
            .should('contain', 'Atrius Health  Inc.')
            .and('contain', 'TIN:000001030');

        // Peer Compare Summary
        cy.get('app-feedback-peer-compare-summary')
            .should('contain', 'Performance Score for Atrius Health  Inc.')
            .and('contain', 'Your Performance Score is achieved by adding the points you earn in each Performance Category')

        // Final Score section
        cy.get('app-feedback-peer-compare-summary')
            .should('contain', 'Score')
            .and('contain', '45.33')
            .and('contain', 'out of 100')
            .and('contain', 'Performance Category Scores')
            .and('contain', 'Quality')
            .and('contain', '43.33 of 50')
            .and('contain', 'Promoting Interoperability')
            .and('contain', '0 of 30')
            .and('contain', 'Improvement Activities')
            .and('contain', '0 of 20')
            .and('contain', 'Cost')
            .and('contain', 'N/A');

        // How is the score calculated? modal
        cy.get('app-feedback-peer-compare-summary')
            .contains('How is the score calculated?')
            .click();

        cy.get('.modal-dialog')
            .should('contain', 'Calculating Your  Score')
            .and('contain', 'This Payment Adjustment will be based on the Composite Performance Score (MIPS Score) earned on the measures reported. You may earn a positive MIPS Payment Adjustment beginning January 1, 2020. Please reference the scale below for more context:')
            .and('contain', '2020 PAYMENT ADJUSTMENT SCALE');

        cy.get('.modal-dialog')
            .eq(2)
            .contains('OK')
            .click();

        // Overview Title
        cy.get('.overview-title')
            .should('contain', 'Performance Category Overview');

    })

    it('category summary', () => {

        // Navigate to APM Entity page
        cy.apmentitynavigation()

        // Quality Summary Header
        cy.get('app-feedback-quality-summary')
            .should('contain', 'Quality')
            .and('contain', '43.33 out of 50');

        // After Submission details
        cy.get('.category-card-body')
            .eq(0)
            .should('contain', 'Performance Period')
            .and('contain', 'Highest Scored Submission Method')
            .and('contain', 'Reported Measures')
            .and('contain', 'High Priority Measures');

        // PI Summary Header
        cy.get('app-feedback-pi-summary')
            .should('contain', 'Promoting Interoperability')
            .and('contain', 'N/A');

        cy.get('app-notification')
            .eq(0)
            .should('contain', 'The Promoting Interoperability data is pending and will be available when the Final Score is available.');

        // IA Summary Header
        cy.get('app-feedback-ia-summary')
            .should('contain', 'Improvement Activities')
            .and('contain', 'N/A');

        cy.get('app-notification')
            .eq(1)
            .should('contain', '100% credit for the Improvement Activities Credit Category was awarded for participation in an Alternative Payment Model (APM).');

        // Cost Summary Header
        cy.get('app-feedback-cost-summary')
            .should('contain', 'Cost')
            .and('contain', 'N/A');

        cy.get('app-notification')
            .eq(2)
            .should('contain', 'Alternative Payment Models (APM) are not subject to scoring based on cost. No cost information will be displayed.');

    })

})
