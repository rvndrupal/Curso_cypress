/// <reference types="Cypress"  />

//https://docs.cypress.io/api/commands/check.html#Syntax

require('cypress-plugin-tab')

describe("Combo box", () =>{
    it("Test uno", ()=>{
        
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.title().should('eq','WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)')
        
        cy.get("#dropdowm-menu-1").select('c#')
        cy.get("#dropdowm-menu-2").select('testng').should("have.value","testng")
        cy.get("#dropdowm-menu-3").select('jquery').contains("JQuery")
     
    });



    
}) 