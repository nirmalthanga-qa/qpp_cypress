describe('Submission Overview Breadcrumbs', () => {

    beforeEach(() => {
        cy.homelogin()

        cy.groupsub()

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

})