/// <reference types="Cypress"  />

//https://docs.cypress.io/api/commands/check.html#Syntax

require('cypress-plugin-tab')

describe("Checkboxes", () =>{
    it("Test uno", ()=>{
        
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.title().should('eq','WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)')
        
        cy.get('#checkboxes > :nth-child(1) > input').click()
        cy.get('#checkboxes > :nth-child(3) > input').should('have.value','option-2').click() //validar
    
        //cy.get('#checkboxes > :nth-child(1)').check().should("be.checked") 

    });

    it("Test dos", ()=>{
        
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.title().should('eq','WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)')
        
        cy.get("input[type='checkbox']").check(["option-1","option-2","option-3","option-4"]).should("be.checked") 
        //selecciona las cuatro de un solo jalon

  


    });

   

}) 