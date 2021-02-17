/// <reference types="Cypress"  />



//https://docs.cypress.io/api/commands/trigger.html#Syntax

require('cypress-plugin-tab')


describe("Campos de Fechas", () =>{

    beforeEach(()=>{
        cy.visit('https://www.tutorialspoint.com/html5/html5_date.htm')
       // cy.get("#datepicker").invoke('removeAttr','target').click({force:true})
       // cy.title().should('eq','<input type="date"> - HTML: HyperText Markup Language | MDN')
        //NO REPETIR EN TODAS
    })

    it("Fechas", ()=>{
       
        cy.log('hola')
       
        cy.get('.result').type("05/09/2021")
        cy.wait(2000)

    });


    
}) 