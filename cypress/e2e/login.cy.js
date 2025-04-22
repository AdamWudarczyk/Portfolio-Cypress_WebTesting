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

            // 🔽 Stabilna asercja komunikatu o błędnym logowaniu:
            cy.get('.oxd-alert-content-text', { timeout: 20000 })  // czeka max 8s
                .should('be.visible')
                .and('contain', 'Invalid credentials')
        })
    })
})