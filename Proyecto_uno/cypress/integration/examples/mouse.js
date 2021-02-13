/// <reference types="Cypress"  />

//https://docs.cypress.io/api/commands/trigger.html#Syntax

require('cypress-plugin-tab')


describe("Mouse actions", () =>{
    it("Test uno", ()=>{
        
        cy.visit('http://www.webdriveruniversity.com/Actions/index.html')
        cy.title().should('eq','WebDriver | Actions')

        cy.get("#draggable").trigger('mousedown',{which: 1}) //toma el elemento
        cy.wait(500)
        cy.get("#droppable").trigger('mousemove').trigger('mouseup',{force:true})
        cy.wait(1500)
       
    });

    it("Test dos scroll", ()=>{
        
        cy.visit('https://www.cypress.io/')
        cy.title().should('eq','JavaScript End to End Testing Framework | cypress.io')

        cy.get("#page-content > main > section:nth-child(2) > div > div.text-center.styled__ContentWrapper-pbfeas-0.fTuxTi.row > div:nth-child(2) > a").scrollIntoView()
        //sirve para llevarte al objeto
        cy.wait(2000)
        cy.get("#page-content > main > section:nth-child(2) > div > div.text-center.styled__ContentWrapper-pbfeas-0.fTuxTi.row > div:nth-child(2) > a").click()

       
    });

    it.only("Test tres doble click", ()=>{
        
        cy.visit('http://www.webdriveruniversity.com/Actions/index.html')
        cy.title().should('eq','WebDriver | Actions')

        cy.get("#double-click").dblclick()
       
    });


    it("Test cuatro validar css", ()=>{
        
        cy.visit('http://www.webdriveruniversity.com/Actions/index.html')
        cy.title().should('eq','WebDriver | Actions')

        cy.get("#click-box").trigger('mousedown',{which: 1}).then(($el) =>{
            expect($el).to.have.css('background-color','rgb(0, 255, 0)')
        })
       
    });

    it.only("Test cinco mause over ", ()=>{
        
        cy.visit('http://www.webdriveruniversity.com/Actions/index.html')
        cy.title().should('eq','WebDriver | Actions')

        cy.get('.hover > .dropbtn').trigger('mouseover', { bubbles: true })
        cy.wait(2000)
     
       
    });

    




    
}) 