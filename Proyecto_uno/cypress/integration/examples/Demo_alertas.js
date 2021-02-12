/// <reference types="Cypress"  />

require('cypress-plugin-tab')

describe("Alertas", () =>{
    it("Test uno", ()=>{
        
        cy.visit('http://www.webdriveruniversity.com/Popup-Alerts/index.html')
        cy.title().should('eq','WebDriver | Popups & Alerts')
        
        cy.get("#button1").click()

        cy.on('window:alert', (str) =>{
            expect(str).to.equal('I am an alert box!')
        })
        
    });

    it("Test dos", ()=>{
        
        cy.visit('http://www.webdriveruniversity.com/Popup-Alerts/index.html')
        cy.title().should('eq','WebDriver | Popups & Alerts')
        
        cy.get("#button4").click()

        cy.on('window:alert', (str) =>{
            return true; //Boton ok false cancel
        })
        
    });

    it("Test tres", ()=>{
        
        cy.visit('http://www.webdriveruniversity.com/Popup-Alerts/index.html')
        cy.title().should('eq','WebDriver | Popups & Alerts')
        
        cy.get("#button4").click()

        cy.on('window:confirm', (str) =>{
            return true; //Verdad
        })
        cy.get("#confirm-alert-text").contains("You pressed OK!")
        
    });

    it("Test cuatro", ()=>{
        
        cy.visit('http://www.webdriveruniversity.com/Popup-Alerts/index.html')
        cy.title().should('eq','WebDriver | Popups & Alerts')
        
        cy.get("#button4").click()

        cy.on('window:confirm', (str) =>{
            return false; //Para dos opciones en confirm y false es para cancelar
        })
        cy.get("#confirm-alert-text").contains("You pressed Cancel!")
        
    });


  



}) 