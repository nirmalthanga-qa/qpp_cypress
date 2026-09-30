/// <reference types="Cypress" />

describe('a sandbox test suite', () => {
    it('visit a relative page', () => {
        cy.visit('/');
        cy.get('select')
            .select('charles');

        cy.get('#get-token-btn').click();

        cy.contains('Home Page').click();

        cy.url().should('include', '/user/submissions');

       // cy.get('#get-submission-btn').click();

      //  cy.get('#feedback-dashboard-link').click();

       // cy.get('app-name-tin-npi-address').should('have.length', 2);

       // cy.get('.final-score').parentsUntil('app-name-tin-npi-address').should('contain', 'Boley Clinical Care');
    });

   /* it('should run a 508 example test', () => {
        cy.visit('/');
        cy.get('select')
            .select('charles');

        cy.get('#get-token-btn').click();

        cy.get('#get-submission-btn').click();

        cy.get('#feedback-dashboard-link').click();

        cy.get('app-name-tin-npi-address').should('have.length', 2);

        cy.get('app.root, main, #content')
            .then((pageSource) => {
                cy.runTenon(pageSource.html(), '508-example-user-submissions-feedback-2017')
                    .then((tenon) => {
                        // Expect no 508 errors on main Feedback page.
                        expect(tenon.resultSet).to.deep.equal([]);
                    });
            });
    }); */
});
