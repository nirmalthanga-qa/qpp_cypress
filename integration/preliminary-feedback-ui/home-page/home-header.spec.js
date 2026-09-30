describe('MIPS Home Header', () => {

    before(() => {
        cy.homelogin()
    })

    after(() => {
        cy.logout()
    })

    it('home header', () => {

        // Welcome Text
        cy.get('[data-cy=home-header]')
            .should('contain', "Welcome back");

        // First checkmark
        cy.get('[data-cy=home-timeline-container]')
            .should('contain', "January 02, 2019")
            .and('contain', "Submission Window is open");

        // Second checkmark
        cy.get('[data-cy=home-timeline-container]')
            .should('contain', "March 27, 2019")
            .and('contain', " Last Day to submit 2018 data");

        // Third checkmark
        cy.get('[data-cy=home-timeline-container]')
            .should('contain', "March 28, 2019")
            .and('contain', " Preliminary Performance Feedback Available");

        // Fourth checkmark
        cy.get('[data-cy=home-timeline-container]')
            .should('contain', "Summer 2019")
            .and('contain', " Final Performance Feedback is available");

    })

})
