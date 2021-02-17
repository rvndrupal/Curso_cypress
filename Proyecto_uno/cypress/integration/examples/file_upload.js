/// <reference types="Cypress"  />



//https://www.npmjs.com/package/cypress-file-upload
//CARGAR LA LIBRERIA EN SUPPORT->COMMANDS.JS > import 'cypress-file-upload';

require('cypress-plugin-tab')

describe("Seleccionar Elementos de una tabla y de otros campos", () =>{

    beforeEach(()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get("#file-upload").invoke('removeAttr','target').click({force:true})
        
        cy.title().should('eq','File Upload')
        //NO REPETIR EN TODAS
    })

    it("Saludos", ()=>{
       cy.log("Hola saludos")

    });


    it("File upload", ()=>{
        cy.fixture("carro1.jpg").then( fileContent => {
            cy.get("#myFile").attachFile(
                {
                    fileContent,
                    fileName: "carro1.jpg",
                    MimeType: "image/jpg"
                },
                {
                    uploadType: "input"
                }
            )
        })
        cy.get("#submit-button").click()

    });



})