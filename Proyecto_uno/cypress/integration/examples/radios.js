/// <reference types="Cypress"  />

//https://docs.cypress.io/api/commands/check.html#Syntax

require('cypress-plugin-tab')

describe("Checkboxes", () =>{
    it("Test uno", ()=>{
        
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.title().should('eq','WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)')
        
        cy.get("#radio-buttons").find("[type='radio']").first().check()
        cy.wait(2000)
        cy.get("#radio-buttons").find("[type='radio']").eq(1).check()
        cy.wait(2000)
        cy.get("#radio-buttons").find('[value="yellow"]').check()
     
    });

    it("Test dos", ()=>{
        
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.title().should('eq','WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)')
        
        cy.get("[value='lettuce']").should("not.be.checked").then(()=>{
            cy.get("[value='lettuce']").check()
        })

        cy.get("[value='cabbage']").should('be.disabled').then(()=>{
            cy.log("Botono deshabilitado")
        })
        
     
    });

    
}) 