// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import 'cypress-file-upload';

Cypress.Commands.add("c_login", (email, password) => { 
    cy.get("#usuario").should("be.visible").type(email)
    cy.get("#contrasenia").should("be.visible").type(password)
    cy.get('#id_ingresar_sipvi').should('be.visible').click({force: true})
    
 })

 Cypress.Commands.add("c_menu_opcion", (opcion) => { 
  
    cy.get('#id_menu_catalogos').should('be.visible').click({force: true})
    cy.get('#id_menu_cat_rastros').should('be.visible').click({force: true})
    cy.wait(3000)
    cy.get('#id_btn_nuevo').should('be.visible').click({force: true})
    cy.get("#id_tipo_rastro").select(opcion)
    cy.get('#id_btn_siguiente').should('be.visible').click({force: true})
    
 })
 

