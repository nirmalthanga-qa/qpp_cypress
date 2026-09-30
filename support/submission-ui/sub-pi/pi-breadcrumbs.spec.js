describe('Submission PI Breadcrumbs', () => {

    beforeEach(() => {
        cy.homelogin()

        cy.groupsub()
        
        cy.qualitynavigation()

    })

    afterEach(() => {
        cy.logout()
    })

    it('account home breadcrumb', () => {

        cy.get('[data-cy=breadcrumbs-list]')
            .contains('Account Home')
            .click();

        cy.url()
            .should('include', '/user/submissions');

    })

    it('eligibility and reporting breadcrumb', () => {

        cy.get('[data-cy=breadcrumbs-list]')
            .contains('Eligibility & Reporting')
            .click();

        cy.url().should('include', '/user/dashboard');

    })

    it('group reporting overview', () => {

        cy.get('[data-cy=breadcrumbs-list]')
            .contains('Group Reporting Overview')
            .click();

        cy.get('h1').should('contain', 'Reporting Overview');

    })

})