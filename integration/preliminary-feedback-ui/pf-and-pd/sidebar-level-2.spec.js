describe('QPP Sidebar Level 2', () => {

    beforeEach(() => {
        cy.homelogin()

        cy.pfnavigation()


    })

    afterEach(() => {
        cy.logout()

    })

    it('sidebar level 2', () => {

        cy.preliminarymodal()

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

        cy.get('#qppSidebar')
            .should('contain', 'TIN# 000644007')
            .and('contain', 'Practice Feedback')
            .and('contain', 'Details');

        cy.get('#qppSidebar')
            .contains('Account Home')
            .click();

        cy.url().should('include', '/user/submissions');

        cy.go('back');

        cy.get('#qppSidebar')
            .contains('Switch Practice')
            .click();

        cy.url()
            .should('include', '/user/submissions/feedback/2018?feedbackTab=Practices');

    })

})
