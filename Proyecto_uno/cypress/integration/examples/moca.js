/// <reference types="Cypress"  />

require('cypress-plugin-tab')

describe("Tes uno contactos", () =>{
    it("Enviando el contacto", ()=>{
        // cy.visit("http://webdriveruniversity.com/")
        cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('#contact_form > input:nth-child(1)').should('be.visible').should('be.enabled').clear().type('Rodrigo')
        cy.get('#contact_form > input:nth-child(2)').should('be.visible').should('be.enabled').clear().type('Villanueva')
        cy.get('#contact_form > input:nth-child(3)').should('be.visible').should('be.enabled').clear().type('rodrigo@gmail.com')
        cy.get('#contact_form > textarea').should('be.visible').should('be.enabled').clear().type('Demo del contenido')
        cy.get('#form_buttons > input:nth-child(2)').should('be.visible').click()
        
    });

    it.only("Enviando el contacto negativo", ()=>{
        cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('#contact_form > input:nth-child(1)').should('be.visible').should('be.enabled').clear().type('Rodrigo')
        cy.get('#contact_form > input:nth-child(2)').should('be.visible').should('be.enabled').clear().type('Villanueva')
        cy.get('#contact_form > input:nth-child(3)').should('be.visible').should('be.enabled').clear().type('rodrigo@gmail.com').tab()
        .type("Demo del contenido").tab().tab()
        .click()

        cy.wait(5000)
    });
}) 