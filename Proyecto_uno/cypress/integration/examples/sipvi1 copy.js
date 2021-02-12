// type definitions for Cypress object "cy"
// <reference types="cypress" />

describe('Sipvi', () => {

    before(function () {
        cy.fixture('datos').then(function (data) {
          globalThis.data = data;
        })
      })

    it('test_one', () => {
      
        cy.visit('http://10.16.3.36:8007/login')
        cy.title().should('eq','SIPVI | SENASICA')
        cy.wait(5000)    
        cy.get('#usuario').should('be.visible').should('be.enabled').clear().type(data.user)        
        cy.get('#contrasenia').should('be.visible').should('be.enabled').clear().type(data.password)
        cy.get('#id_ingresar_sipvi').should('be.visible').should('be.enabled').click()
        cy.get('body > app-root > div > app-bienvenidos > div > div:nth-child(1) > h3').should('be.visible').contains('Bienvenidos')
        cy.wait(500)
        cy.get('#id_menu_catalogos').should('be.visible').click()
        cy.get('#id_menu_cat_rastros').should('be.visible').click()
        cy.get('body > app-root > div > app-catalogos-principal > app-cat-rastros > div.row > div > h3').should('be.visible').contains('Módulo de Administración de rastros')
        cy.wait(6000)
        cy.get('#id_btn_nuevo').should('be.visible').click()
        cy.get('#id_tipo_rastro').select('Establecimiento TIF').should('have.value','2')
        cy.get('#id_btn_siguiente').should('be.visible').click()
        cy.get('#id_razon_social_tif').should('be.visible').should('be.enabled').clear().type('Prueba de registro ET_32')
        cy.get('#id_ntif').should('be.visible').should('be.enabled').clear().type('123-32')
        cy.get('#id_telefono').should('be.visible').should('be.enabled').clear().type('5540783145')
        cy.get('#id_correo_electronico').should('be.visible').should('be.enabled').clear().type('rodrigo@gmail.com')
        cy.get('#id_entidad').select('Aguascalientes').should('have.value','1')
        cy.wait(500)
        cy.get('#id_municipio').select('Asientos').should('have.value','2')
        cy.wait(500)
        cy.get('#id_localidad').select('4 Milpas [Rancho]').should('have.value','106168')

       
        cy.get('#id_cp').should('be.visible').should('be.enabled').clear().type('07990')
        cy.get('#id_calle').should('be.visible').should('be.enabled').clear().type('Calle demo 134')
        cy.get('#id_numero_exterior').should('be.visible').should('be.enabled').clear().type('567')
        cy.get('#id_numero_interior').should('be.visible').should('be.enabled').clear().type('123')

        cy.get('#id_curp').should('be.visible').should('be.enabled').clear().type('VINR970128HDFLTD09')
        cy.get('#id_btn_curp').should('be.visible').click()
        cy.wait(500)

        //curp
        cy.get("#id_alert_warning").should('be.visible').then(()=>{
            cy.get('#id_curp').should('be.visible').should('be.enabled').clear().type('VINR970128HDFLTD09')
            cy.get('#id_nombre').should('be.visible').should('be.enabled').clear().type('Nombre uno')
            cy.get('#id_paterno').should('be.visible').should('be.enabled').clear().type('Apellido Paterno uno')
            cy.get('#id_materno').should('be.visible').should('be.enabled').clear().type('Apellido Materno')
        })      
            
        //Especies
        cy.get('#id_especies_disponibles').select('Especie para sacrificio 7')
        cy.get('#id_btn_agregar_e').should('be.visible').click()

           
        //Horarios
        cy.get('.panel > .panel-body > .row > .col-md-12:nth-child(27) > h4').click()    
        cy.get('.ant-table-column-title > .ng-untouched > .checkbox > label > #id_check_horario_Lunes').click()    
        cy.get('.ant-table-column-title > .ng-untouched > .checkbox > label > #id_check_horario_Lunes').check('on')    
        cy.get('tr > .ng-star-inserted > .ng-dirty > #id_hora_inicio_Lunes > .ant-time-picker-input').click()    
        cy.get('.ant-time-picker-panel-inner > .ant-time-picker-panel-combobox > .ant-time-picker-panel-select:nth-child(1) > ul > .ant-time-picker-panel-select-option-selected').click()    
        cy.get('.ant-time-picker-panel-inner > .ant-time-picker-panel-combobox > .ant-time-picker-panel-select:nth-child(2) > ul > .ant-time-picker-panel-select-option-selected').click()    
        cy.get('.importacion-excel > .cdk-overlay-container > .cdk-overlay-backdrop').click()    
        cy.get('tr > .ng-star-inserted > .ng-dirty > #id_hora_fin_Lunes > .ant-time-picker-input').click()    
        cy.get('.ant-time-picker-panel-inner > .ant-time-picker-panel-combobox > .ant-time-picker-panel-select:nth-child(1) > ul > .ng-star-inserted:nth-child(18)').click()    
        cy.get('.ant-time-picker-panel-inner > .ant-time-picker-panel-combobox > .ant-time-picker-panel-select > ul > .ng-star-inserted:nth-child(48)').click()    
        cy.get('.importacion-excel > .cdk-overlay-container > .cdk-overlay-backdrop').click()

        //rfc  VINR770919JD1
        cy.get('#id_rfc_m').should('be.visible').should('be.enabled').clear().type('VINR770919JD1')
        cy.get("#id_btn_rfc_m").should('be.visible').should('be.enabled').click()
        cy.get(1000)
        cy.get("#id_alert_warning").should("be.visible").then(() =>{
                cy.get('#id_rfc_m').should('be.visible').should('be.enabled').clear().type('VINR770919JD1')
                cy.get('#id_nombre_m').should('be.visible').should('be.enabled').clear().type('Nombre Doctor 1')
                cy.get('#id_paterno_m').should('be.visible').should('be.enabled').clear().type('Paterno Doctor 1')
                cy.get('#id_materno_m').should('be.visible').should('be.enabled').clear().type('Materno Doctor')
        })

    })


   

})