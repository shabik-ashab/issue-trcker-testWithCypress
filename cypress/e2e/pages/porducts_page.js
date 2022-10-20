

export class ProductsPage{

    purchase_button = ':nth-child(1) > .card > .card-body > a > .MuiButton-root'
    zip_textbox = '#filled-number'
    address_textbox = ':nth-child(4) > .MuiOutlinedInput-root > #outlined-required'
    submit_button = '.MuiButton-root'
    alert_box = '.MuiAlert-message'

    clickPurchase(){
        cy.get(this.purchase_button).click()
    }

    enterZipcode(zip){
        cy.get(this.zip_textbox).type(zip)
    }
    enterAddress(address){
        cy.get(this.address_textbox).type(address)
    }

    clickSubmit(){
        cy.get(this.submit_button)
        .click()
    }

    validateAlert(){
        cy.on(this.alert_box, (txt)=> {
            expect(txt).to.be.equal('Place order sucessfully')
        })
    }


}