import Muno_sipvi from '../../support/pageObjects/Muno_sipvi'
/// <reference types="Cypress"  />



//https://docs.cypress.io/api/commands/trigger.html#Syntax

require('cypress-plugin-tab')


describe("Seleccionar Elementos de una tabla y de otros campos", () =>{

    Cypress.config('defaultCommandTimeout', 30000) //muy bueno
  
    const M_uno =new Muno_sipvi(); //mando a llamar a todo el modulo uno

    beforeEach(()=>{
        // cy.visit('http://10.16.3.36:8007/login')
        // cy.title().should('eq','SIPVI | SENASICA')
        // cy.wait(6000)
        //NO REPETIR EN TODAS
       
        // cy.c_login('user.1','sipvint')
        //Establecimiento TIF 
        //Rastro 
        // cy.c_menu_opcion("Establecimiento TIF")
        //cy.viewport(550,750) //movil
        cy.clearCookies()
        cy.clearLocalStorage()
        M_uno.Po_login('user.1','sipvint')
        M_uno.Po_menu('Establecimiento TIF')
    })

    it("Datos Generales", ()=>{
        // cy.get('#id_razon_social_tif').should('be.visible').should('be.enabled').clear().type('Demo del contenido')
        // cy.get('#id_ntif').should('be.visible').should('be.enabled').clear().type('1245')
        // cy.get('#id_telefono').should('be.visible').should('be.enabled').clear().type('5540783188')
        // cy.get('#id_correo_electronico').should('be.visible').should('be.enabled').clear().type('rodrigo@gmail.com')
        // cy.get('#id_salir_sipvi').should('be.visible').click({force: true})
        M_uno.Po_generales()

    });

    it("Domicilio", ()=>{
        // cy.get('#id_entidad').select('Aguascalientes').should('have.value','1')
        // cy.get('#id_municipio').select('Asientos').should('have.value','2')
        // cy.get('#id_localidad').select('Adolfo Lopez Mateos').should('have.value','2598')
        // cy.get('#id_cp').should('be.visible').should('be.enabled').clear().type('07990')
        // cy.get('#id_calle').should('be.visible').should('be.enabled').clear().type('Calle demo')
        // cy.get('#id_numero_exterior').should('be.visible').should('be.enabled').clear().type('879')
        // cy.get('#id_numero_interior').should('be.visible').should('be.enabled').clear().type('12')
        // cy.wait(5000)
        // cy.get('#id_salir_sipvi').should('be.visible').click({force: true})
        M_uno.Po_domicilio()
    });

    it("Curp", ()=>{
        M_uno.Po_curp()
    });

   





    
}) 