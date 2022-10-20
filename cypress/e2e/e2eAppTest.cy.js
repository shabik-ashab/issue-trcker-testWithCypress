
import { LoginPage } from './pages/login_page';
import { HomePage } from './pages/home_page';
import { ProductsPage } from './pages/porducts_page';
import { Dashboard } from './pages/dashboard';


const loginPage = new LoginPage();
const homePage = new HomePage();
const pdPage = new ProductsPage();
const dashboard = new Dashboard();


describe('All Test', ()=> {
    beforeEach(()=> {
        cy.visit("https://drone-app-823d7.web.app/")
        homePage.loginClick()
        loginPage.enterEmail('shabik@gmail.com');
        loginPage.enterPassword('123456');
        loginPage.clickLogin();
    })

    it('homepage', ()=>{
        cy.wait(1000)
        cy.url().should('contain', "https://drone-app-823d7.web.app/" )
        homePage.productsClick()
        cy.wait(500)
        homePage.homeClick()

    })

    it('pdPage', ()=>{
        homePage.productsClick()
        pdPage.clickPurchase()
        pdPage.enterZipcode('1234')
        pdPage.enterAddress('Dhaka')
        pdPage.clickSubmit()
        pdPage.validateAlert()
    })

    it('dashboard', ()=> {
        homePage.dashboardClick()
        dashboard.clickRateus()
        dashboard.clickDashboardLogout()
    })


})
