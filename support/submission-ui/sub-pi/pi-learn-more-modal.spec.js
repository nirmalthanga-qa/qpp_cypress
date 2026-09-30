describe('Text Assertion on Learn more about PI modal', () => {

    beforeEach(() => {

        cy.homelogin()

        cy.groupsub()

        cy.pinavigation()

    })

    afterEach(() => {

        cy.logout()

    })

    it('instruction text on pi modal', () => {

        cy.get('[data-cy=instruction-modal-button]')
            .first()
            .click();

        cy.get('[data-cy=dialog-modal]').should('contain', 'Basic Navigation');

        cy.get('[data-cy=dialog-modal]')
            .should('contain', 'On this page, the user can attest to Promoting Interoperability Measures. Depending on the measure, these can be attested either using Yes and No selections, or specific Numerator and Denominator values. The Promoting Interoperability category contains 3 available Measure Set choices:');

        cy.get('[data-cy=dialog-modal]')
            .should('contain', 'You must attest to information in a specific stepwise manner in order to earn a Category Score for Promoting Interoperability. First, you must select a performance period of at least 90 days to receive any credit in this category. Second, you must select the Promoting Interoperability Measurement Set that applies your Electronic Health Record Technology edition. Third, you must select Yes for the first two required Attestation Statements. Fourth, you must successfully attest valid values for the available Base Measures in order to begin earning a Category Score. This includes 5 measures for the Promoting Interoperability Measures set, or 4 available measures for the 2018 Promoting Interoperability Transition Measures set. Finally, you will have the option of attesting to Optional Performance Measures, Optional Registry Measures and / or available Bonus Measures. These measure categories are explained in further detail below.');

        cy.get('[data-cy=dialog-modal]')
            .should('contain', 'Category Scoring');

        cy.get('[data-cy=dialog-modal]')
            .should('contain', 'Promoting Interoperability Measures');

        cy.get('[data-cy=dialog-modal]')
            .should('contain', '2018 Promoting Interoperability Transition Measures');

        cy.get('[data-cy=dialog-modal]')
            .should('contain', 'A Combination of Both Tracks');

        cy.get('[data-cy=dialog-modal]')
            .should('contain', 'Special Scoring Categories');

        cy.get('[data-cy=dialog-modal]')
            .should('contain', 'Bonus Criteria');

        cy.get('[data-cy=dialog-modal]')
            .should('contain', 'On the Improvement Activities page there are specific activities that are labeled with a CEHRT Eligible symbol. This notates that the activity is eligible for bonus points in the Promoting Interoperability category. Selecting one of these activities can provide 10 points to the Category Score by attesting Yes to this activity in conjunction with an associated CEHRT Bonus Measure in the Promoting Interoperability category. For submissions that contain only 2015 Measures, 10 bonus points will be awared to that submission. For submissions that contain multiple Registry submissions, a 5 point bonus will be awarded for the second submission. This will not exceed 5 points for bonus.');

        cy.get('[data-cy=modal-footer]')
            .contains('Close')
            .click({ force: true });

    })

})