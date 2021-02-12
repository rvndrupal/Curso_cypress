/// <reference types="Cypress"  />

require('cypress-plugin-tab')

//https://docs.cypress.io/guides/guides/web-security.html#Set-chromeWebSecurity-to-false

describe("Páginas con seguridad", () =>{
    it("Test uno", ()=>{
        
        cy.visit('https://www.paypal.com/es/home')
        cy.title().should('eq','Comprar, vender y enviar dinero por Internet | PayPal España')
        

    });

   

}) 