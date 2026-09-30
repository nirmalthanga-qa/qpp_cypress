describe('MIPS Home Header', () => {

    beforeEach(() => {
        cy.homelogin()
    })

    afterEach(() => {
        cy.logout()
    })

    it('home header', () => {

        // Welcome Text
        cy.get('[data-cy=home-header]')
            .should('contain', "Welcome back");

        // First checkmark
        cy.get('[data-cy=home-timeline-container]')
            .should('contain', "January 02, 2019");

        cy.get('[data-cy=home-timeline-container]')
            .should('contain', "Submission Window is open");


        // Second checkmark
        cy.get('[data-cy=home-timeline-container]')
            .should('contain', "April 02, 2019");

        cy.get('[data-cy=home-timeline-container]')
            .should('contain', " Last Day to submit 2018 data");


        // Third checkmark
        cy.get('[data-cy=home-timeline-container]')
            .should('contain', "April 03, 2019");

        cy.get('[data-cy=home-timeline-container]')
            .should('contain', " Preliminary Performance Feedback Available");

        // Fourth checkmark
        cy.get('[data-cy=home-timeline-container]').should('contain', "Summer 2019");

        cy.get('[data-cy=home-timeline-container]')
            .should('contain', " Final Performance Feedback is available");

    })

})
