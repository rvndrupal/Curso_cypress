/// <reference types="Cypress"  />

//https://docs.cypress.io/api/commands/check.html#Syntax

require('cypress-plugin-tab')

describe("Combo autocomplite", () =>{
    it("Test uno", ()=>{
        
        cy.visit('http://www.webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html')
        cy.title().should('eq','WebDriver | Contact Us')

        cy.get("#myInput").type("A")

        cy.get("#myInputautocomplete-list > * ").each(($el, index, $list) => {
            const prod= $el.text();
            cy.log(prod)

            if(prod === "Avacado"){
                cy.get("#submit-button").click();
                cy.wait(1000)
               
            }
        })
    });

    it("Test dos", ()=>{
        
        cy.visit('http://www.webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html')
        cy.title().should('eq','WebDriver | Contact Us')

        cy.get("#myInput").type("Avacado")
        cy.wait(1000)
        cy.get("#submit-button").click();

        cy.url().should('include','Avacado').then(()=>{
            cy.get("#myInput").type("Carrots")
            cy.wait(1000)
            cy.get("#submit-button").click();
            cy.url().should('include','Carrots')
        })


       
    });



    
}) 