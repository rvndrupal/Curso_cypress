/// <reference types="Cypress"  />

require('cypress-plugin-tab')

describe("Cuadros Iframes", () =>{
    it("Test uno", ()=>{
        
        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
        cy.title().should('eq','WebDriver | IFrame')
        
        cy.get("#frame").then($iframe => {
            const body=$iframe.contents().find('body')
            cy.wrap(body).as('iframe') //pone el alias del iframe
        })

        cy.get('@iframe').find('#button-find-out-more').click()

        cy.get('@iframe').find('#myModal').as('Modal') //se dispara el modal y se le pone un alias

        cy.get('@Modal').should(($expectText) =>{
            const texto=$expectText.text() //toma todo el texto
            expect(texto).to.include("Welcome to webdriveruniversity.com we sell a wide range of electrical goods such")
        })

        cy.get("@Modal").contains('Close').click()

        
    });

   

}) 