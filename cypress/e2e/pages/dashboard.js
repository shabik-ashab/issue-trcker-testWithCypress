

export class Dashboard{

    nav_rateus = '.css-obqxoz > .MuiDrawer-root > .MuiPaper-root > :nth-child(1) > [href="/dashboard/userReview"] > .MuiButton-root'
    dashboardLogout_button = '.css-obqxoz > .MuiDrawer-root > .MuiPaper-root > :nth-child(1) > .MuiButton-textError'

    clickRateus(){
        cy.get(this.nav_rateus).click()
    }
    clickDashboardLogout(){
        cy.get(this.dashboardLogout_button).click()
    }

}