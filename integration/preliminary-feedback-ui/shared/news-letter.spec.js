describe('Newsletter', () => {

    beforeEach(() => {
        cy.homelogin()
    })

    afterEach(() => {
        cy.logout()
    })

    it('subscribe for updates', () => {

        cy.get('[data-cy=newsletter-header]')
            .should('contain', 'Subscribe For Updates');

        cy.get('[data-cy=newsletter-container]')
            .should('contain', 'Enter your e-mail and get notified about updates and important information automatically.');

        // Subscribe button
        cy.get('[data-cy=newsletter-group]')
            .should('contain', 'Subscribe');

        // Note Message
        cy.get('[data-cy=newsletter-wrapper]')
            .should('contain', 'Note:');

        cy.get('[data-cy=newsletter-wrapper]')
            .should('contain', 'Your email address will only be used to deliver the requested information or to give you access to your profile of subscriptions.')

    })
})