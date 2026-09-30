describe('Yellow Banner Warning messages', () => {


    beforeEach(() => {

        cy.homelogin()

        cy.groupsub()

        cy.pinavigation()

    })

    afterEach(() => {

        cy.logout()

    })

    it('message after attesting one statement', () => {

        cy.pienteringdates();


        cy.get('.aci-measure-selection-item')
            .contains('2018 Promoting Interoperability Transition Measures')
            .click();

        cy.wait(1000);

        cy.get('.attestation-measure')
            .contains('Prevention of Information Blocking Attestation')
            .click();

        cy.wait(1000);

        cy.get('.attestation-measure-content')
            .contains('I attest to CMS that I - (A) did not knowingly and willfully take action (such as to disable functionality) to limit or restrict the compatibility or interoperability of certified EHR technology.');

    })

    cy.get('.submission-boolean-measure-button')
        .eq(0)
        .click();

    cy.get('.subcategory')
        .contains('Required Measures for Base Score');

    cy.get('.subcategory')
        .contains('You will be unable to attest to these measures until you have completed the Attestation Statements above.');

})