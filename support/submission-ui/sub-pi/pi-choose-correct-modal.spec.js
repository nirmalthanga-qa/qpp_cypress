describe('Text Assertion on Need help choosing the correct measure set modal', () => {

    beforeEach(() => {

        cy.homelogin()

        cy.groupsub()

        cy.pinavigation()

    })

    afterEach(() => {

        cy.logout()

    })

    it('choose correct measure modal', () => {

        cy.pienteringdates()

        cy.get('[data-cy=instruction-modal-button]')
            .last()
            .click();

        cy.get('[data-cy=dialog-modal]')
            .should('contain', 'Choosing The Correct Promoting Interoperability Measure Set');

        cy.get('[data-cy=dialog-modal]')
            .should('contain', 'Combination of Both Measure Sets');

        cy.get('[data-cy=dialog-modal]')
            .should('contain', "When choosing the combination of technologies path, you may not submit a measure from the PI measure set that correlates to a 2019 PI transition measure. For example, if you submit the Provide Patient Access 2019 PI transition measure (worth up to 20%), you may not submit the correlating PI measures Provide Patient Access (worth up to 10%) or Patient-Generated Health Data (worth up to 10%). Please see the attached chart for additional detail on the Combination path.");


        cy.get('[data-cy=dialog-modal]')
            .should('contain', 'The 2015 Edition has the reporting capability to support either the 2019 Promoting Interoperability Transition Measures or the Promoting Interoperability measures. We encourage clinicians and vendors that collect and combine data from the 2014 and 2015 Editions during a performance period to aggregate their numerators and denominators for the 2019 Promoting Interoperability Transition Measures.');

        cy.get('[data-cy=dialog-modal]')
            .should('contain', 'For additional information or questions, contact the');

        cy.get('[data-cy=modal-footer-close-button]')
            .last()
            .click({ force: true });

    })

})