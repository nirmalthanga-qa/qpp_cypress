describe('Performance Year PY header', () => {

    beforeEach(() => {
        cy.homelogin()

        cy.pfnavigation()

    })

    afterEach(() => {
        cy.logout()

    })

    it('select performance year 2017', () => {

        cy.preliminarymodal()

        // Select the PY 2017 and cancel 
        cy.get('#dropdownLabel')
            .should('contain', "Select Performance Year (PY)");

        cy.get('#selectPerformanceYear')
            .should('contain', "2018").click();

        cy.get('li')
            .contains('2017')
            .click();

        cy.url()
            .should('contain', "/user/submissions/feedback/2017");

        cy.get('.feedback-container')
            .should('contain', 'Performance Year (PY) 2017');

    })

})
