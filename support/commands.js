const TenonNode = require('tenon-node');

const tenonApi = new TenonNode({
    key: Cypress.env('QPP_TENON_KEY')
});

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

/* runTenon
 *  Sends HTML to tenon.io to be processed and scored on its 508 compatibility
 *  @param {String} html   - For best results, send entire HTML of the viewing page.
 *  @param {String} pageId - Alphanumeric string between 16 and 255 characters in length.
 *      '-> Must not contain spaces and only punctuation allowed is '-' and '_'.
 *
 *  @returns {Object} res  - Returns Tenon response object. https://tenon.io/documentation/json-response-overview.php
 */

Cypress.Commands.add("runTenon", (html, pageId) => {
    return new Promise((resolve, reject) => {
        tenonApi.checkSrc(html, {
            level: 'A',
            projectID: Cypress.env('QPP_TENON_PROJECT_ID'),
            docID: pageId
        }, (err, res) => {
            if (err) {
                reject(err);
            }
            const failures = res.resultSummary && res.resultSummary.issuesByLevel.A.count > 0;
            if (failures) {
                console.log('There were Tenon failures.');
            } else {
                console.log('There were no Tenon failures.');
            }
            return resolve(res);
        });
    });
})

// Home Page Login Steps
Cypress.Commands.add('homelogin', () => {

    // Dev Env
    //cy.visit('/');

    // Imp Env
    cy.visit('/?ACA=z3DUR2WH3Y');

    cy.contains('Manage Account').click();

    cy.get('input[name="username"]').type('Automationimpuser');

    cy.get('input[name="password"]').type('123Test@');

    cy.contains('Yes, I agree.').click();

    cy.get('button').contains('Sign in').click();

})

// Logout Steps
Cypress.Commands.add('logout', () => {

    cy.get('#nav-mobile').contains('My Account').click();

    cy.get('.logout').click();

})

// Account Home Navigation
Cypress.Commands.add('accounthome', () => {

    cy.get('#qppSidebar')
        .contains('Account Home')
        .click();

})

// Submission UI Navigation
Cypress.Commands.add('groupsub', () => {

    cy.get('[data-cy=home-start-reporting-button]').click();

    cy.url().should('include', '/user/dashboard');

    cy.wait(2000);

    cy.get('#practices-results').contains('Report as Group').click();

})

// Performance Feedback navigation
Cypress.Commands.add('pfnavigation', () => {

    cy.get('[data-cy=home-view-performance-feeback-button').click();

    cy.url().should('include', '/user/submissions/feedback/2018');

    cy.wait(2000);

})

// Overview navigation - highest score scenario
Cypress.Commands.add('allsuccessoverview', () => {

    cy.get('.dashboard-tabs-container')
        .contains('Practices')
        .click();

    cy.wait(2000);

    cy.get('.buttons-container')
        .eq(0)
        .should('contain', 'VIEW PRACTICE DETAILS')
        .click();

    cy.get('.practice-details-actions')
        .click();

})

// Items and Services navigation
Cypress.Commands.add('isnavigation', () => {

    cy.get('.dashboard-tabs-container')
        .contains('Practices')
        .click();

    cy.wait(2000);

    cy.get('.buttons-container')
        .eq(1)
        .should('contain', 'VIEW PRACTICE DETAILS')
        .click();

    cy.get('.practice-details-actions')
        .click();

})

// Preliminary Acknowledgement modal
Cypress.Commands.add('preliminarymodal', () => {

    cy.get('[type="checkbox"]').check();

    cy.get('.modal-dialog').eq(2).contains('OK').click();

})

// Registry Navigation
Cypress.Commands.add('registrynavigation', () => {

    cy.get('.dashboard-tabs-container')
        .contains('Registries')
        .click();

    cy.get('.buttons-container')
        .eq(0)
        .should('contain', 'VIEW DASHBOARD')
        .click();

})

// APM Entity Navigation
Cypress.Commands.add('apmentitynavigation', () => {

    cy.get('.dashboard-tabs-container')
        .contains('APM Entities')
        .click();

    cy.get('.buttons-container')
        .eq(0)
        .should('contain', 'VIEW APM ENTITY DETAILS')
        .click();

})

// Virtual Group Navigation
Cypress.Commands.add('vgnavigation', () => {

    cy.get('.dashboard-tabs-container')
        .contains('Virtual Groups')
        .click();

    cy.get('.buttons-container')
        .eq(0)
        .should('contain', 'VIEW GROUP DETAILS')
        .click();

})

// Quality sidebar navigation
Cypress.Commands.add('qualitynavigation', () => {

    cy.get('#qppSidebar').contains('Quality').click();

})

// PI sidebar navigation
Cypress.Commands.add('pinavigation', () => {

    cy.get('#qppSidebar').contains('Promoting Interoperability').click();

})

// IA sidebar navigation
Cypress.Commands.add('ianavigation', () => {

    cy.get('#qppSidebar').contains('Improvement Activities').click();

})

// IA Date entering
Cypress.Commands.add('iaenteringdates', () => {

    // Entering Performance Period (Start and End dates)
    cy.get('.performance-start').clear().type('01/01/2018');

    cy.get('.performance-end').clear().type('01/02/2018');

})

// PI Date entering
Cypress.Commands.add('pienteringdates', () => {

    // Entering Performance Period (Start and End dates)
    cy.get('.performance-start').clear().type('01/01/2018');

    cy.get('.performance-end').clear().type('04/01/2018');

})

// Delete Measures
Cypress.Commands.add('deletemeasures', () => {

    // Delete Measures button
    cy.get('button').contains('Delete Measures').click();

    cy.get('.modal-dialog').contains('Delete Data').click();

})
