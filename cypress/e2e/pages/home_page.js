

export class HomePage{

    navbar_login = 'login'


    loginClick(){
        cy.contains(this.navbar_login).click()
    }


}