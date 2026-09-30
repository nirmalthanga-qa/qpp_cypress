describe('Breadcrumbs in Performance Feedback and Practice Details', () => {

    beforeEach(() => {
        cy.homelogin()

        cy.pfnavigation()

    })

    afterEach(() => {
        cy.logout()

    })

    it('performance feedback breadcrumb', () => {

        cy.preliminarymodal()

        cy.get('[data-cy=breadcrumbs-list]')
            .contains('Account Home')
            .click();

        cy.url()
            .should('include', '/user/submissions');

    })

    it('practice details breadcrumbs', () => {

        cy.get('.dashboard-tabs-container')
            .contains('Practices')
            .click();

        cy.wait(2000);

        cy.get('.buttons-container')
            .eq(0)
            .should('contain', 'VIEW PRACTICE DETAILS')
            .click();

        cy.url()
            .should('include', '/user/submissions/feedback/2018/');

        cy.get('[data-cy=breadcrumbs-list]')
            .contains('Performance Feedback')
            .click();

        cy.url()
            .should('include', '/user/submissions/feedback/2018?feedbackTab=Practices');

    })

})
