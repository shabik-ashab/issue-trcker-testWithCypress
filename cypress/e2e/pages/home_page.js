

export class HomePage{

    navbar_login = 'login'
    navbar_products = '.App > :nth-child(1) > :nth-child(1) > .navbar > .container-fluid > #navbarTogglerDemo01 > .navbar-nav > :nth-child(2) > a'
    navbar_home = ':nth-child(1) > a'
    navbar_dashboard = '.App > :nth-child(1) > :nth-child(1) > .navbar > .container-fluid > #navbarTogglerDemo01 > .navbar-nav > :nth-child(3) > a'

    loginClick(){
        cy.contains(this.navbar_login).click()
    }

    productsClick(){
        cy.get(this.navbar_products).click()
    }

    homeClick(){
        cy.get(this.navbar_home).click({multiple: true, force: true})
    }

    dashboardClick(){
        cy.get(this.navbar_dashboard).
        should('contain', 'Dashboard').
        last().click()
    }


}