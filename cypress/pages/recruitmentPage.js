export class RecruitmentPage {
    navigate() {
        cy.contains('Recruitment').click();
        cy.contains('Candidates').click();
    }

    selectJobTitle(title) {
        cy.contains('Job Title')
            .parents('.oxd-grid-item')
            .find('.oxd-select-text-input')
            .click();

        cy.get('.oxd-select-dropdown')
            .contains(title)
            .click();
    }

    enterCandidateName(name) {
        cy.get('input[name="candidateName"]').type(name);
    }

    getCandidateNameInput() {
        return cy.get('input[name="candidateName"]');
    }

    enterKeywords(text) {
        cy.get('input[name="keywords"]').type(text);
    }

    clickSearch() {
        cy.get('button[type="submit"]').click();
    }

    clickReset() {
        cy.contains('Reset').click();
    }

    clickAddButton() {
        cy.contains('Add').click();
    }

    clickSubmitOnAddForm() {
        cy.get('button[type="submit"]').click();
    }

    getErrorMessages() {
        return cy.get('.oxd-input-field-error-message');
    }

    selectFirstCandidate() {
        cy.get('table tbody tr').first().find('input[type="checkbox"]').check();
    }

    clickDeleteSelected() {
        cy.contains('Delete Selected').click();
    }

    confirmDelete() {
        cy.contains('Yes, Delete').click();
    }

    getToastMessage() {
        return cy.get('.oxd-toast');
    }

    getCandidateRows() {
        return cy.get('table tbody tr');
    }

    clickFirstViewIcon() {
        cy.get('table tbody tr').first().find('i.bi-eye').click();
    }

    clickFirstDownloadIcon() {
        cy.get('table tbody tr').first().find('i.bi-download').click();
    }

    filterByDate(from, to) {
        cy.get('input[placeholder="From"]').clear().type(from);
        cy.get('input[placeholder="To"]').clear().type(to);
        this.clickSearch();
    }
}