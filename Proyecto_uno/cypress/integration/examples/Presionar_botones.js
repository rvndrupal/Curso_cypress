/// <reference types="Cypress"  />

require('cypress-plugin-tab')

describe("Presionar Botones", () =>{
    it("Test uno", ()=>{
        
        cy.visit('https://automationteststore.com/')
        cy.title().should('eq','A place to practice your automation skills!')
        
        cy.get('.nav-pills > :nth-child(1) > .active')

    

        
    });

   

}) 