describe('File Upload modal', () => {

    beforeEach(() => {
        cy.homelogin()

        cy.groupsub()

    })

    afterEach(() => {
        cy.logout()

    })

    it('upload a file modal in start reporting', () => {

        cy.get('button')
            .contains('Upload A File')
            .click();

        // Main body
        cy.get('[data-cy=file-upload-modal]')
            .should('contain', 'Upload Data');

        cy.get('[data-cy=file-upload-modal-body]')
            .should('contain', "Your JSON or XML file here, or");

        cy.get('[data-cy=file-upload-modal-body]')
            .should('contain', 'browse');

        cy.get('.modal-dialog')
            .should('contain', "Uploading this file will overwrite the submission data you've submitted. Measure data that you've left blank will not be updated.");

        // Aside content
        cy.get('[data-cy=file-upload-modal-aside]')
            .should('contain', 'Accepted files to upload');

        cy.get('[data-cy=file-upload-modal-aside]')
            .should('contain', "This upload tool accepts properly formatted QPP JSON, QPP XML, and QRDA-3 files. Any files submitted are received and calculated immediately. Learn more.");

        cy.get('[data-cy=file-upload-modal-aside]')
            .should('contain', 'How can I overwrite data to save a blank field?');

        cy.get('[data-cy=file-upload-modal-aside]')
            .should('contain', "If you'd like to update the data with an intentionally empty field, make sure to select the \"N/A\" value in the Excel file for that field.")

        cy.get('[data-cy=file-upload-modal]')
            .contains('Close Upload Modal')
            .click();

    })

    it('start reporting', () => {

        cy.get('button')
            .contains('Start Reporting')
            .click();

        // Main body
        cy.get('[data-cy=quality-upload-content-wrapper]')
            .should('contain', 'Upload Quality Data');

        cy.get('[data-cy=quality-upload-body]')
            .should('contain', 'OPTION 1');

        cy.get('[data-cy=quality-upload-body]')
            .should('contain', 'Manually Upload Quality Data');

        cy.get('[data-cy=quality-upload-body]')
            .should('contain', 'Submit QPP Quality Data via file upload. This method allows the upload of EHR export data in either QPP (JS0N) format and QRDA-3 files. There are six required measures, including one High priority measure.');

        cy.get('[data-cy=quality-modal-option-action]')
            .should('contain', 'Upload File');

        cy.get('[data-cy=quality-upload-aside]')
            .should('contain', 'Using a Third Party Agency?');

        cy.get('[data-cy=quality-upload-aside]')
            .should('contain', 'Contact your Third Party or Third Party Intermediaries to Submit Data');

        cy.get('[data-cy=quality-upload-aside]')
            .should('contain', 'If using a Registry or EHR to submit data, please contact them for support.');

        cy.get('[data-cy=quality-upload-content-wrapper]')
            .contains('Close Upload Modal')
            .click();
    })

})