describe('Buttons and Links Validation', () => {

    beforeEach(() => {
        cy.homelogin()
    })

    afterEach(() => {
        cy.logout()
    })

    it('validate the submission reporting block', () => {

        cy.get('[data-cy=home-submission-header]')
            .should('contain', 'Performance Year (PY) 2018 Submission Reporting Window is Now Open');

        cy.get('[data-cy=home-submission-navigation-block]')
            .should('contain', 'You are now able to start your reporting for the PY 2018 submission year.');

        cy.get('[data-cy=home-start-reporting-button]').click();

        cy.url().should('include', '/user/dashboard');

    })

    it('validate the facility based preview block', () => {

        cy.get('[data-cy=home-facility-header]')
            .should('contain', 'Facility Based Preview');

        cy.get('[data-cy=home-facility-container]')
            .should('contain', 'You are able to preview your Hospital Value-Based Purchasing (HVBP) score and how it breaks down into a Quality and Cost MIPS score.');

        cy.get('[data-cy=home-facility-link]').click();

        cy.url().should('include', '/submissions/facility-based-preview/2018');

    })

    it('validate the performance feedback block', () => {

        cy.get('[data-cy=home-feedback-previous-header]')
            .should('contain', 'View PY 2017 Final Performance Feedback');

        cy.get('[data-cy=home-feedback-previous-container]')
            .should('contain', ' You are able to access your PY 2017 Final Feedback at any time.');

        cy.get('[data-cy=home-view-feedback-link]').click();

        cy.url().should('include', 'user/submissions/feedback/2017');

    })

    it('validate the manage user access', () => {

        cy.get('[data-cy=home-manage-header]')
            .should('contain', 'Manage User Access');

        cy.get('[data-cy=home-manage-container]')
            .should('contain', 'View which practices or APM Entities that you are currently connected to and your associated permissions.');

        cy.get('[data-cy=home-view-your-access-link]').click();

        cy.url().should('include', 'user/manage-access?');

    })

    it('validate the help and support', () => {

        cy.get('[data-cy=home-help-support-header]')
            .should('contain', 'Help and Support');

        cy.get('[data-cy=home-help-support-container]')
            .should('contain', 'Get the help you need to participate and succeed in the Quality Payment Program (QPP).');

        cy.get('[data-cy=home-get-help-link]').click();

        cy.url().should('include', 'about/help-and-support');

    })

})
