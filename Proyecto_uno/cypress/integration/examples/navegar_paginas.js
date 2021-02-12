/// <reference types="Cypress"  />

require('cypress-plugin-tab')

describe("Pruebas con foreach", () =>{
    it("Test uno", ()=>{
        
        cy.visit('https://www.amazon.com.mx/s?k=microfonos&__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&ref=nb_sb_noss_1')
        cy.title().should('eq','Amazon.com.mx : microfonos')
        let mic=cy.get('[data-asin="B07NZZZ746"] > .sg-col-inner > .celwidget > .s-expand-height > .a-spacing-medium > [data-component-type="s-product-image"] > .a-link-normal > .a-section > .s-image')
        mic.click()

        cy.go('back')
        cy.reload() //muy chingon

        cy.go('forward')
        cy.go('back')

  
        
    });


}) 