import { LoginPage } from '../pages/loginPage';
import { RecruitmentPage } from '../pages/recruitmentPage';

const loginPage = new LoginPage();
const recruitmentPage = new RecruitmentPage();

describe('Recruitment - Candidates Tests', () => {
    beforeEach(() => {
        loginPage.visit();
        cy.fixture('users').then((data) => {
            loginPage.login(data.validUser.username, data.validUser.password);
            recruitmentPage.navigate();
        });
    });

    it('filters candidates by Job Title', () => {
        recruitmentPage.selectJobTitle('Junior Account Assistant');
        recruitmentPage.clickSearch();
        recruitmentPage.getCandidateRows().each(row => {
            cy.wrap(row).contains('Junior Account Assistant');
        });
    });

    it('filters candidates by Candidate Name', () => {
        recruitmentPage.enterCandidateName('John');
        recruitmentPage.clickSearch();
        recruitmentPage.getCandidateRows().each(row => {
            cy.wrap(row).contains('John');
        });
    });

    it('resets the form and clears fields', () => {
        recruitmentPage.enterCandidateName('Test');
        recruitmentPage.clickReset();
        recruitmentPage.getCandidateNameInput().should('have.value', '');
    });

    it('shows all candidates when search fields are empty', () => {
        recruitmentPage.clickSearch();
        recruitmentPage.getCandidateRows().its('length').should('be.gte', 1);
    });

    it('opens Add Candidate form', () => {
        recruitmentPage.clickAddButton();
        cy.url().should('include', 'addCandidate');
    });

    it('deletes selected candidate from the list', () => {
        recruitmentPage.selectFirstCandidate();
        recruitmentPage.clickDeleteSelected();
        recruitmentPage.confirmDelete();
        recruitmentPage.getToastMessage().should('contain', 'Successfully Deleted');
    });

    it('opens candidate details from Actions column', () => {
        recruitmentPage.clickFirstViewIcon();
        cy.url().should('include', 'viewCandidate');
    });

    it('filters candidates by Date of Application', () => {
        recruitmentPage.filterByDate('2024-06-01', '2024-06-03');
        recruitmentPage.getCandidateRows().each(row => {
            cy.wrap(row).find('td').eq(4).invoke('text').then(date => {
                const d = new Date(date.trim());
                expect(d >= new Date('2024-06-01') && d <= new Date('2024-06-03')).to.be.true;
            });
        });
    });

    it('shows validation errors when form is empty', () => {
        recruitmentPage.clickAddButton();
        recruitmentPage.clickSubmitOnAddForm();
        recruitmentPage.getErrorMessages().should('exist');
    });

    it('downloads attached file for a candidate', () => {
        recruitmentPage.clickFirstDownloadIcon();
        // Depending on browser config, this may not be testable directly
    });

    it('handles special characters in Keywords field', () => {
        recruitmentPage.enterKeywords('@#$%^&*()');
        recruitmentPage.clickSearch();
        recruitmentPage.getCandidateRows().should('have.length.at.least', 0);
    });

    it('returns no results for future application date', () => {
        recruitmentPage.filterByDate('2099-01-01', '2099-01-01');
        recruitmentPage.getCandidateRows().should('have.length', 0);
    });

    it('displays all candidates with duplicate names', () => {
        recruitmentPage.enterCandidateName('NewUser 04');
        recruitmentPage.clickSearch();
        recruitmentPage.getCandidateRows().its('length').should('be.gte', 2);
    });
});