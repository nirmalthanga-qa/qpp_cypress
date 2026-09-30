describe('Buttons and Links Validation', () => {

    beforeEach(() => {
        cy.homelogin()
        
    })

    afterEach(() => {
        cy.logout()

    })

    it('Preliminary 2018 Performance Feedback Available', () => {

        cy.get('[data-cy=home-feeback-header]').eq(0)
            .should('contain', 'Preliminary 2018 Performance Feedback Available');

        cy.get('[data-cy=home-feedback-navigation-block]').eq(0)
            .should('contain', 'Your preliminary 2018 performance year feedback is now available. Your final score will be available Summer 2019. Your performance feedback could change based on additional information being entered into the system.');

        cy.get('[data-cy=home-view-performance-feeback-button]').click();

        cy.preliminarymodal();

        cy.url().should('include', '/user/submissions/feedback/2018');

    })

    it('2018 Submission Window has Closed', () => {

        cy.get('[data-cy=home-feeback-header]').eq(1)
            .should('contain', '2018 Submission Window has Closed');

        cy.get('[data-cy=home-feedback-navigation-block]').eq(1)
            .should('contain', 'As of Thursday, March 28th at 11:15 a.m. EDT, you are no longer able to submit your information, 2019 submission window will open January 2, 2020.');

        cy.get('[data-cy=home-facility-link]').eq(0).click();

        cy.url().should('include', '/user/dashboard');

    })

    it('validate the facility based preview block', () => {

        cy.get('[data-cy=home-facility-header]')
            .should('contain', 'Facility Based Preview');

        cy.get('[data-cy=home-facility-container]')
            .should('contain', 'You are able to preview your Hospital Value-Based Purchasing (HVBP) score and how it breaks down into a Quality and Cost MIPS score.');

        cy.get('[data-cy=home-facility-link]').eq(1).click();

        cy.url().should('include', '/submissions/facility-based-preview/2018');

    })

    it('validate the manage user access', () => {

        cy.get('[data-cy=home-manage-header]')
            .should('contain', 'Manage User Access');

        cy.get('[data-cy=home-manage-container]')
            .should('contain', 'View which practices or APM Entities that you are currently connected to and your associated permissions.');

        cy.get('[data-cy=home-view-your-access-link]').click();

        cy.url().should('include', 'user/manage-access');

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
