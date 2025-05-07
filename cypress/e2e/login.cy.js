import { LoginPage } from '../pages/loginPage'

const loginPage = new LoginPage()

describe('OrangeHRM Login Tests (POM)', () => {
    beforeEach(() => {
        loginPage.visit()
    })

    it('should log in successfully with valid credentials', () => {
        cy.fixture('users').then((data) => {
            loginPage.login(data.validUser.username, data.validUser.password)
            cy.url({ timeout: 10000 }).should('include', '/dashboard')
            cy.contains('Dashboard', { timeout: 10000 }).should('be.visible')
        })
    })

    it('should show error with invalid credentials', () => {
        cy.fixture('users').then((data) => {
            loginPage.login(data.invalidUser.username, data.invalidUser.password)
            cy.get('.oxd-alert-content-text', { timeout: 20000 })
                .should('be.visible')
                .and('contain', 'Invalid credentials')
        })
    })

    it('should show validation messages when fields are empty', () => {
        loginPage.login('', '')
        cy.get('.oxd-input-group__message')
            .should('contain', 'Required')
            .and('be.visible')
    })

    it('should mask password input', () => {
        cy.get('input[type="password"]').should('have.attr', 'type', 'password')
    })

    it('should show error with wrong username and correct password', () => {
        cy.fixture('users').then((data) => {
            loginPage.login('wrongUsername', data.validUser.password)
            cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials')
        })
    })

    it('should show error with correct username and wrong password', () => {
        cy.fixture('users').then((data) => {
            loginPage.login(data.validUser.username, 'wrongPassword')
            cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials')
        })
    })

    it('should display all login form elements', () => {
        cy.get('input[name="username"]').should('be.visible')
        cy.get('input[name="password"]').should('be.visible')
        cy.get('button[type="submit"]').should('be.visible')
    })
})