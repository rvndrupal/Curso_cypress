/// <reference types="Cypress"  />

require('cypress-plugin-tab')

describe("Pruebas tabs", () =>{
    it("Test uno", ()=>{
        
        cy.visit('http://www.webdriveruniversity.com/')
        cy.title().should('eq','WebDriverUniversity.com')
        cy.get("#contact-us").invoke('removeAttr','target').click({force:true}) //muy chingon

        cy.get('[name="first_name"]').type("Rodrigo")
        cy.get('[name="last_name"]').type("Villanueva")

    });

   

}) 