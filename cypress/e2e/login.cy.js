
import { LoginPage } from './pages/login_page';
import { HomePage } from './pages/home_page';

const loginPage = new LoginPage();
const homePage = new HomePage();


describe('All Login Test', ()=> {
    beforeEach(()=> {
        cy.visit("https://drone-app-823d7.web.app/")
        homePage.loginClick()
    })

    it('login test', ()=>{
        loginPage.enterEmail('shabik@gmail.com');
        loginPage.enterPassword('123456');
        loginPage.clickLogin();
    })
})