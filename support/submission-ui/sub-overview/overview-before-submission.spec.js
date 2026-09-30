describe('Overview page before submission', () => {

    beforeEach(() => {
        cy.homelogin()

        cy.groupsub()

    })

    afterEach(() => {
        cy.logout()
    })


    it('overview header', () => {

        cy.get('h1')
            .should('contain', 'Reporting Overview');

        cy.get('[data-cy=reporting-overview-header]')
            .should('contain', 'TIN:');

        // Assert print button text
        cy.get('button')
            .contains('Print')
            .should('contain', 'Print');

    })

    it('start reporting content', () => {

        cy.get('[data-cy=overview-header-title]').then(($reportingtitle) => {

            // File hasn't uploaded 
            if ($reportingtitle.text().includes('reporting')) {

                cy.get('[data-cy=overview-header-title]')
                    .should('contain', 'Start reporting')

            }

            // File has already uploaded
            else {

                cy.get('[data-cy=overview-header-title]')
                    .should('contain', 'Upload another file')

            }
        })

        cy.get('[data-cy=start-reporting-description]').then(($description) => {

            // File hasn't uploaded 
            if ($description.text().includes('preliminary')) {

                cy.get('[data-cy=start-reporting-description]')
                    .should('contain', 'These files will be calculated immediately and the page below will update with your preliminary scoring information. Your information will be automatically saved in our system.')

            }

            // File has already uploaded
            else {

                cy.get('[data-cy=start-reporting-description]')
                    .should('contain', "You can upload another properly formatted QPP JSON,  QPP XML and QRDA-3 files that can contain Quality measures, and/or Promoting Interoperability measures, and/or Improvement Activities.  Any information below will be replaced with what you upload if it is the same submission method and measures.")

            }

        })

        // Remember Instruction
        cy.get('[data-cy=start-reporting-reminder]')
            .should('contain', 'Remember:');

        cy.get('[data-cy=start-reporting-reminder]')
            .should('contain', 'These files will be calculated immediately and the page below will update with your preliminary scoring information. Your information will be automatically saved in our system.');

        // Upload A File text assertion
        cy.get('button')
            .contains('Upload A File')
            .should('contain', 'Upload A File');

    })

    it('quality reporting section', () => {

        cy.get('[data-cy=overview-reporting-category-title]')
            .should('contain', 'Quality');

        cy.get('[data-cy=overview-reporting-category-content]')
            .should('contain', 'Details');

        cy.get('[data-cy=overview-reporting-category-content]')
            .should('contain', 'Quality counts for 50% of your score.')

        cy.get('[data-cy=overview-reporting-category-partition-right]').then(($qualitybutton) => {

            // File hasn't uploaded 
            if ($qualitybutton.text().includes('start')) {

                cy.get('[data-cy=overview-reporting-category-partition-right]')
                    .should('contain', 'Start reporting')

            }

            // File has already uploaded
            else {

                cy.get('[data-cy=overview-reporting-category-partition-right]')
                    .should('contain', 'View Details')

            }

        })

    })

    it('pi reporting section', () => {

        cy.get('[data-cy=overview-reporting-category-title]')
            .should('contain', 'Promoting Interoperability');

        cy.get('[data-cy=overview-reporting-category-content]')
            .should('contain', 'Details');

        cy.get('[data-cy=overview-reporting-category-content]')
            .should('contain', 'PI counts for 25% of your score.');

        cy.get('[data-cy=overview-reporting-category-partition-right]').then(($pibutton) => {

            // Measures haven't submitted 
            if ($pibutton.text().includes('view')) {

                cy.get('[data-cy=overview-pi]')
                    .should('contain', 'Manually Enter')

            }

            // Measures have been already submitted
            else {

                cy.get('[data-cy=overview-pi]')
                    .should('contain', 'View Details')

            }

        })

    })

    it('ia reporting section', () => {

        cy.get('[data-cy=overview-reporting-category-title]')
            .should('contain', 'Improvement Activities');

        cy.get('[data-cy=overview-reporting-category-content]')
            .should('contain', 'Details');

        cy.get('[data-cy=overview-reporting-category-partition-right]').then(($iabutton) => {

            // Measures haven't attested 
            if ($iabutton.text().includes('view')) {

                cy.get('[data-cy=overview-ia]')
                    .should('contain', 'Manually Enter')

            }

            // Measures have been already attested
            else {

                cy.get('[data-cy=overview-ia]')
                    .should('contain', 'View Details')

            }

        })

    })

    it('cost reporting section', () => {

        cy.get('[data-cy=overview-reporting-category-title]')
            .should('contain', 'Cost');

        cy.get('[data-cy=overview-reporting-category-content]')
            .should('contain', 'Details');

        cy.get('[data-cy=overview-reporting-category-content]')
            .should('contain', 'Cost will be scored after the submission window closes and all Claims data is processed.  Remember, Cost may count for 10% of your score.');

    })

    it('additional awarded bonus section', () => {

        // Title
        cy.get('[data-cy=overview-reporting-category-title]')
            .should('contain', 'Additional Awarded Bonus Points');

        cy.get('[data-cy=overview-reporting-category]').then(($bonuspoints) => {

            //  Additional Bonus points description 
            if ($bonuspoints.text().includes('details')) {

                cy.get('[data-cy=details]')
                    .should('contain', "Details")

                cy.get('[data-cy=overview-reporting-category-content]')
                    .should('contain', 'There are two additional bonus points that can be awarded. They are as follows:')

            }

            // If user has Bonus Points
            else {

                cy.get('[data-cy=overview-reporting-bonus-header]')
                    .should('contain', 'Bonus Points')

            }
        })

        cy.get('[data-cy=overview-reporting-category-content]').then(($complex) => {

            // If user doesn't have Complex Patient Bonus
            if ($complex.text().includes('complex')) {

                cy.get('[data-cy=overview-reporting-complex-points-message]')
                    .should('contain', "Complex Patient Bonus:")

                cy.get('[data-cy=overview-reporting-complex-points-message]')
                    .should('contain', "The Complex Patient Bonus is based on the level of complexity and risk of a clinician's or practice's patient population seen during the 2018 calendar year. A score of 0-5 may be available for your practice.")

            }

            // If user has Complex Patient Bonus
            else {

                cy.get('[data-cy=overview-reporting-category-content]')
                    .should('contain', 'Details')

                cy.get('[data-cy=overview-reporting-category-content]')
                    .should('contain', 'You have received a Complex Patient bonus based upon the amount of patients you have seen that are considered higher-risk.')

                cy.get('[data-cy=overview-reporting-category-content]')
                    .should('contain', 'Other Available Bonus Points')
            }
        })

        // Quality Improvement Bonus
        cy.get('[data-cy=overview-quality-bonus-message]')
            .should('contain', 'Quality Improvement Bonus:');

        cy.get('[data-cy=overview-quality-bonus-message]')
            .should('contain', 'If you were eligible for Year 1 and made an eligible Quality submission, you may be eligible for an additional bonus. Once Feedback is available, this will be included as part of your Quality Score.');

        // Search the Research Library link
        cy.get('[data-cy=overview-reporting-category-content]')
            .should('contain', 'Search the Research Library for more information.')

    })

    it('preliminary total score', () => {

        cy.get('[data-cy=overview-preliminary-score-value]')
            .should('contain', 'Preliminary Total Score:');

        cy.get('[data-cy=overview-preliminary-score]')
            .should('contain', "Your Final Score won't be available until Summer 2019");

        cy.get('[data-cy=overview-preliminary-score-value]')
            .should('contain', '- -');

    })

    it('final score legend', () => {

        // Final Score title and description
        cy.get('[data-cy=overview-score-legend-description-title]')
            .should('contain', 'How your Final Score is created');

        cy.get('[data-cy=overview-score-legend-description]')
            .should('contain', 'Your Final Score, available in Summer 2019, is created by taking the highest score submission method in each category and adding them up. Your Final Score will be out of 100.');

        // Legend Quality
        cy.get('[data-cy=legend-quality-title]')
            .should('contain', 'Quality');

        cy.get('[data-cy=overview-score-legend-quality-percentage]')
            .should('contain', '50%');

        // Legend PI
        cy.get('[data-cy=legend-pi-title]')
            .should('contain', 'Promoting Interoperability');

        cy.get('[data-cy=overview-score-legend-pi-percentage]')
            .should('contain', '25%');

        // Legend IA
        cy.get('[data-cy=legend-ia-title]')
            .should('contain', 'Improvement Activities');

        cy.get('[data-cy=overview-score-legend-ia-percentage]')
            .should('contain', '15%');

        // Legend Cost
        cy.get('[data-cy=legend-cost-title]')
            .should('contain', 'Cost');

        cy.get('[data-cy=overview-score-legend-cost-percentage]')
            .should('contain', '10%');

        // Legend Final Score
        cy.get('[data-cy=legend-final-score-title]')
            .should('contain', 'Final Score');

        cy.get('[data-cy=overview-score-legend-final-score-percentage]')
            .should('contain', '100%');

        // Note
        cy.get('[data-cy=overview-score-note]')
            .should('contain', 'Your Quality Score weight could increase by 10% if Cost measures are not available.');

    })

})