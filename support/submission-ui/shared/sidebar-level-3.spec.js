describe('QPP Sidebar Level 1', () => {

    beforeEach(() => {
        cy.homelogin()

        cy.groupsub()

    })

    afterEach(() => {
        cy.logout()

    })

    it('account home navigation link', () => {

        cy.get('#qppSidebar')
            .contains('Account Home')
            .click();

        cy.url().should('include', '/user/submissions/');

    })

    it('switch practice navigation link', () => {

        cy.get('#qppSidebar')
            .contains('Switch Practice')
            .click();

        cy.url().should('include', '/user/dashboard?org=practice');

    })

    it('performance feedback navigation link', () => {

        cy.get('#qppSidebar')
            .contains('Performance Feedback').click();

            cy.url().should('include', 'user/submissions/feedback/2017');
    })

})