describe('Overview Page', () => {

    beforeEach(() => {

        cy.homelogin()

        cy.pfnavigation()

    })

    afterEach(() => {

        cy.logout()

    })

    it('header components', () => {

        cy.preliminarymodal()
        
        // Navigate to Overview page
        cy.allsuccessoverview()

        // Breadcrumbs
        cy.get('[data-cy=breadcrumbs-list]')
            .should('contain', 'Account Home')
            .and('contain', 'Performance Feedback')
            .and('contain', 'Elig WI Org 6');

        // Page header
        cy.get('#page-header')
            .should('contain', 'Overview')
            .and('contain', 'TIN: 000644007')
            .and('contain', 'Print')
            .and('contain', 'Download Data');

        // Yellow Banner Message
        cy.get('.message')
            .should('contain', 'Processing Submission Data')
            .and('contain', 'The information being displayed below is NOT your Final Score. Your Final Score will be available Summer 2019 During this timeframe, additional data will be scored and could effect your Final Score.');

        // Practice Details section
        cy.get('.practice-details')
            .should('contain', 'Elig WI Org 6')
            .and('contain', 'TIN:000644007')
            .and('contain', 'VIEW LIST OF CLINICIANS');

        // Peer Compare Summary
        cy.get('app-feedback-peer-compare-summary')
            .should('contain', 'Performance Score for Elig WI Org 6')
            .and('contain', 'Your Performance Score is achieved by adding the points you earn in each Performance Category')

        // Final Score section
        cy.get('app-feedback-peer-compare-summary')
            .should('contain', 'Score')
            .and('contain', '90')
            .and('contain', 'out of 100')
            .and('contain', 'Performance Category Scores')
            .and('contain', 'Quality')
            .and('contain', '50 of 50')
            .and('contain', 'Promoting Interoperability')
            .and('contain', '25 of 25')
            .and('contain', 'Improvement Activities')
            .and('contain', '15 of 15')
            .and('contain', 'Cost');

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

        // Clinicians List button
        cy.get('.practice-details')
            .contains('VIEW LIST OF CLINICIANS')
            .click();

        cy.get('app-dashboard-list')
            .should('contain', 'Connected Clinicians');

        cy.get('#qppSidebar')
            .contains('Switch Practice')
            .click();

    })

    it('category summary', () => {

        // Navigate to Overview page
        cy.allsuccessoverview()

        // Quality Summary Header
        cy.get('app-feedback-quality-summary')
            .should('contain', 'Quality')
            .and('contain', '50 out of 50');

        // After Submission details
        cy.get('.category-card-body')
            .eq(0)
            .should('contain', 'Performance Period')
            .and('contain', 'Highest Scored Submission Method')
            .and('contain', 'Reported Measures')
            .and('contain', 'High Priority Measures');

        // Green Congrats message for score achieved
        cy.get('app-notification')
            .eq(0)
            .should('contain', 'Congratulations! You have scored the maximum number of points.');

        // View All Details Button
        cy.get('.improvements-view-all')
            .eq(0)
            .should('contain', 'View All Details');

        // PI Summary Header
        cy.get('app-feedback-pi-summary')
            .should('contain', 'Promoting Interoperability')
            .and('contain', '25 out of 25');

        // After Submission details
        cy.get('.category-card-body')
            .eq(1)
            .should('contain', 'Performance Period')
            .and('contain', 'Submission Method')
            .and('contain', 'Base Measures')
            .and('contain', 'Optional Measures');

        // Green Congrats message for score achieved
        cy.get('app-notification')
            .eq(1)
            .should('contain', 'Congratulations! You have scored the maximum number of points.');

        // View All Details Button
        cy.get('.improvements-view-all')
            .eq(1)
            .should('contain', 'View All Details');

        // IA Summary Header
        cy.get('app-feedback-ia-summary')
            .should('contain', 'Improvement Activities')
            .and('contain', '15 out of 15');

        // After Submission details
        cy.get('.category-card-body')
            .eq(2)
            .should('contain', 'Performance Period')
            .and('contain', 'Submission Method')
            .and('contain', 'High Weighted Activities')
            .and('contain', 'Medium Weighted Activities');

        // Green Congrats message for score achieved
        cy.get('app-notification')
            .eq(2)
            .should('contain', 'Congratulations! You have scored the maximum number of points.');

        // View All Details Button
        cy.get('.improvements-view-all')
            .eq(2)
            .should('contain', 'View All Details');

        // Cost Summary Header
        cy.get('app-feedback-cost-summary')
            .should('contain', 'Cost')
            .and('contain', 'N/A');

        // Cost Message
        cy.get('app-notification')
            .eq(3)
            .should('contain', 'Cost data is not yet available. Your score will be available by summer 2019.');

        // Additional Bonus points Summary
        cy.get('app-feedback-bonus-summary')
            .should('contain', 'Additional Awarded Bonus Points')
            .and('contain', '0')
            .and('contain', 'Search the Research Library for more information.');

        /*  // Items and Services Summary
        cy.get('app-feedback-items-and-services-summary')
            .should('contain', 'Items & Services')
            .and('contain', "This section includes information about your patient's emergency department visits based on 2018 claims data. This information is not part of your score and is provided for your reference only.");

            */
    })

})
