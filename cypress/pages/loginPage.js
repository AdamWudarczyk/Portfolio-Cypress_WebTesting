export class LoginPage {
    visit() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    fillUsername(username){
        cy.get('input[name="username"]').clear().type(username)
    }

    fillPassword(password){
        cy.get('input[name="password"]').clear().type(password)
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
