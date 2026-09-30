describe('Items and Services Page', () => {

    beforeEach(() => {

        cy.homelogin()

        cy.pfnavigation()

    })

    afterEach(() => {

        cy.logout()

    })

    it('items and services', () => {

        cy.preliminarymodal()

        // Navigate to Overview page
        cy.isnavigation()

        // View All Details Button
        cy.get('app-feedback-items-and-services-summary')
            .contains('View All Details')
            .click();

        // Breadcrumbs
        cy.get('[data-cy=breadcrumbs-list]')
            .should('contain', 'Account Home')
            .and('contain', 'Performance Feedback')
            .and('contain', 'Elig Org 45')
            .and('contain', 'Group Feedback Overview');

        // Page header
        cy.get('#page-header')
            .should('contain', 'Items and Services')
            .and('contain', 'TIN: 000893677')
            .and('contain', 'Print');

        // Yellow Banner Message
        cy.get('.message')
            .should('contain', 'Processing Submission Data')
            .and('contain', 'The information being displayed below is NOT your Final Score. Your Final Score will be available Summer 2019 During this timeframe, additional data will be scored and could effect your Final Score.');

        // Items and Services Information
        cy.get('.header-wrapper')
            .should('contain', 'Details')
            .and('contain', 'The information below is about the patients you saw during Performance Year 2018. This is not specific to just services provided by you, but all the services provided based on HCPCS and CRP I billing codes.');

        // Medical Services and Treatment
        cy.get('.feedback-is-measure')
            .eq(0)
            .should('contain', 'Medical Services and Treatment')
            .and('contain', 'The categories below are associated with medical services or treatments provided. Each individual item or services has a correlated HCPCS or CPT I code.')
            .and('contain', 'Item/Service')
            .and('contain', 'Beneficiaries')
            .and('contain', 'Cost')
            .and('contain', 'Services');

        // Evaluation & Management Services
        cy.get('.feedback-is-measure')
            .eq(1)
            .should('contain', 'Evaluation & Management Services')
            .and('contain', 'The Services rendered below are related to evaluation, transportation, or treatment services provided.')
            .and('contain', 'Item/Service')
            .and('contain', 'Beneficiaries')
            .and('contain', 'Cost')
            .and('contain', 'Services');

        // Payment Services
        cy.get('.feedback-is-measure')
            .eq(2)
            .should('contain', 'Payment Services')
            .and('contain', 'These include either temporary service codes or payments to external billers.')
            .and('contain', 'Item/Service')
            .and('contain', 'Beneficiaries')
            .and('contain', 'Cost')
            .and('contain', 'Services');

        // Emergency Department Utilizations
        cy.get('.feedback-is-measure')
            .eq(3)
            .should('contain', 'Emergency Department Utilizations')
            .and('contain', 'Emergency Department Utilization numbers are for Emergency Department visits and include visits that resulted in an admission.');

        // ED Info tooltip
        cy.get('.cms-tooltip-wrapper')
            .should('contain', 'Patients that could have more than 1 emergency visit during the year');

    })

})
