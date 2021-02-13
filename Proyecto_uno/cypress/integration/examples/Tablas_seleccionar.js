/// <reference types="Cypress"  />

//https://docs.cypress.io/api/commands/trigger.html#Syntax

require('cypress-plugin-tab')


describe("Seleccionar Elementos de una tabla y de otros campos", () =>{

    beforeEach(()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get("#data-table").invoke('removeAttr','target').click({force:true})
        cy.title().should('eq','WebDriver | Data Tables')
        //NO REPETIR EN TODAS
    })

    it("CHILDREN", ()=>{
        cy.get(".traversal-breadcrumb").children('.active').should('contain','Contact Us')
        cy.get(".traversal-breadcrumb").eq(0).should('contain','Home')

    });

    it("EQ element", ()=>{
        cy.get(".traversal-drinks-list > *").eq(2).should('contain','Milk')
    });

    it("Filter", ()=>{
        cy.get(".btn-group-toggle > *").filter('.active').should('contain','Button-1')
    });

    it("Find", ()=>{
        cy.get(".traversal-pagination").find('li').find('a').should('have.length', 7)
        cy.get(".traversal-pagination").find('li').find('a').should('contain', '4').as('cuatro')
        
    });

    it("First", ()=>{
        cy.get(".traversal-table > tbody > tr > td").first().should('contain',"Andy")
    });

    it("Last", ()=>{
        cy.get(".traversal-table > tbody > tr > td").last().should('contain',"Scott") //ultimo
    });

    it("NextALl", ()=>{
        cy.get(".traversal-drinks-list").contains('Tea').nextAll().should('have.length', 3)
    });

    it("Todos menos", ()=>{
        cy.get(".traversal-button-states > button").not('.disabled').should('not.have.class','disabled')
    });



    
    




    
}) 