import './commands'

import 'cypress-mochawesome-reporter/register'

Cypress.on('fail', (error, runnable) => {
    cy.screenshot('login-error')
    throw error
})