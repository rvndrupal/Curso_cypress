require('cypress-plugin-tab')
class Muno_sipvi {
    Po_login(email,password){
        cy.visit('http://10.16.3.36:8007/login')
        cy.title().should('eq','SIPVI | SENASICA')
        //cy.wait(6000)

       
        cy.get("#usuario").should("be.visible").type(email)
        cy.get("#contrasenia").should("be.visible").type(password)
        cy.get('#id_ingresar_sipvi').should('be.visible').click({force: true})  
        cy.screenshot("Login") 
    }

    Po_menu(opcion){
        cy.get('#id_menu_catalogos').should('be.visible').click({force: true})
        cy.get('#id_menu_cat_rastros').should('be.visible').click({force: true})
        //cy.wait(20000)
        cy.get('#id_btn_nuevo').should('be.visible').click({force: true})
        cy.get("#id_tipo_rastro").select(opcion)
        cy.get('#id_btn_siguiente').should('be.visible').click({force: true})
        cy.screenshot("Menu") 

    }

    Po_generales(){
        // cy.get('#id_razon_social_tif').should('be.visible').should('be.enabled').clear().type('Demo del contenido')
        // cy.get('#id_ntif').should('be.visible').should('be.enabled').clear().type('1245')
        // cy.get('#id_telefono').should('be.visible').should('be.enabled').clear().type('5540783188')
        // cy.get('#id_correo_electronico').should('be.visible').should('be.enabled').clear().type('rodrigo@gmail.com')
        // cy.get('#id_salir_sipvi').should('be.visible').click({force: true})

        cy.get('#id_razon_social_tif').should('be.visible').should('be.enabled').clear().type('Demo del contenido').tab()
        .type('1245').tab()
        .type('5540783188').tab()
        .type('rodrigo@gmail.com')
        cy.get('#id_salir_sipvi').should('be.visible').click({force: true})
        cy.screenshot("Generales") 

    }

    Po_domicilio(){
        cy.get('#id_entidad').select('Aguascalientes').should('have.value','1')
        cy.get('#id_municipio').select('Asientos').should('have.value','2')
        cy.get('#id_localidad').select('Adolfo Lopez Mateos').should('have.value','2598')
        cy.get('#id_cp').should('be.visible').should('be.enabled').clear().type('07990').tab()
        .type('Calle demo').tab()
        .type('879').tab()
        .type('12')
        cy.screenshot("Domicilio") 

        //cy.wait(5000)
        cy.get('#id_salir_sipvi').should('be.visible').click({force: true})
    }

    Po_curp(){
        let num=Math.floor((Math.random() * 30) + 1);
        cy.get('#id_curp').should('be.visible').should('be.enabled').clear().type('VINR970128HDFLTD'+num.toString())
        cy.get('#id_btn_curp').should('be.visible').click()
        //cy.wait(300)

        cy.get("#id_alert_warning").should('be.visible').then(()=>{
            cy.get('#id_curp').should('be.visible').should('be.enabled').clear().type('VINR970128HDFLTD'+num.toString())
            cy.get('#id_nombre').should('be.visible').should('be.enabled').clear().type('Nombre uno').tab()
            .type('Apellido Paterno uno').tab()
            .type('Apellido Materno')
        })   
        cy.screenshot("Curp") 
        cy.get('#id_salir_sipvi').should('be.visible').click({force: true})
    }
}

export default Muno_sipvi;