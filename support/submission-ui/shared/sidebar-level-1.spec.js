describe('QPP Sidebar Level 1', () => {

    beforeEach(() => {
        cy.homelogin()

    })

    afterEach(() => {
        cy.logout()

    })

    it('eligiblity and reporting navigation link', () => {

        cy.get('#qppSidebar')
            .contains('Eligibility & Reporting')
            .click();

        cy.url().should('include', '/user/dashboard');

    })

    it('facility based preview navigation link', () => {

        cy.get('#qppSidebar')
            .contains('Facility Based Preview')
            .click();

        cy.url().should('include', 'user/submissions/facility-based-preview/2018');

    })

    it('performance feedback navigation link', () => {

        cy.get('#qppSidebar')
            .contains('Performance Feedback')
            .click();

        cy.url().should('include', '/user/submissions/feedback/2017');

    })

    it('manage access navigation link', () => {

        cy.get('#qppSidebar')
            .contains('Manage Access')
            .click();

        cy.url().should('include', '/user/manage-access?');

    })

    it('help and support navigation link', () => {

        cy.get('#qppSidebar')
            .contains('Help and Support')
            .click();

        cy.url().should('include', '/about/help-and-support');

    })

    it('collpase and expand', () => {

        cy.get('#qppSidebar')
            .contains('Collapse')
            .click()
            .should('contain', 'Expand');

        cy.get('#qppSidebar')
            .contains('Expand')
            .click()
            .should('contain', 'Collapse');

    })

})