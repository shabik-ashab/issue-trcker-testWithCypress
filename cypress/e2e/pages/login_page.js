

export class LoginPage{


    email_textbox = '.mt-5 > .MuiInput-root > #standard-basic'
    password_textbox = ':nth-child(2) > .MuiInput-root > #standard-basic'
    login_button = '.css-ji6jtg'

    enterEmail(username){
        cy.get(this.email_textbox).type(username)

    }
    enterPassword(password){
        cy.get(this.password_textbox).type(password)

    }
    clickLogin(){
        cy.get(this.login_button).
        should('contain', 'Login')
        .click()

    }

}