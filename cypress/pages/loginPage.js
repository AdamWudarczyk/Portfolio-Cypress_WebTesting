export class LoginPage {
    visit() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    fillUsername(username){
        const usernameField = cy.get('input[name="username"]')
        if (username) {
            usernameField.clear().type(username)
        } else {
            usernameField.clear()
        }
    }

    fillPassword(password){
        const passwordField = cy.get('input[name="password"]')
        if (password) {
            passwordField.clear().type(password)
        } else {
            passwordField.clear()
        }
    }

    clickLogin(){
        cy.get('button[type="submit"]').should('be.visible').click()
    }

    login(username, password){
        this.visit()
        this.fillUsername(username)
        this.fillPassword(password)
        this.clickLogin()
    }

    getErrorMessage(options = {}){
        return cy.get('.oxd-alert-content-text', options)
    }
}