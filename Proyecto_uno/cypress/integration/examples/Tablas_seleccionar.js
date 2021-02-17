/// <reference types="Cypress"  />



//https://docs.cypress.io/api/commands/trigger.html#Syntax

require('cypress-plugin-tab')


describe("Seleccionar Elementos de una tabla y de otros campos", () =>{

    beforeEach(()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get("#data-table").invoke('removeAttr','target').click({force:true})
        cy.title().should('eq','WebDriver | Data Tables')
        //NO REPETIR EN TODAS
    })

    it("CHILDREN", ()=>{
        cy.get(".traversal-breadcrumb").children('.active').should('contain','Contact Us')
        cy.get(".traversal-breadcrumb").eq(0).should('contain','Home')

    });

    it("EQ element", ()=>{
        cy.get(".traversal-drinks-list > *").eq(2).should('contain','Milk')
    });

    it("Filter", ()=>{
        cy.get(".btn-group-toggle > *").filter('.active').should('contain','Button-1')
    });

    it("Find", ()=>{
        cy.get(".traversal-pagination").find('li').find('a').should('have.length', 7)
        cy.get(".traversal-pagination").find('li').find('a').should('contain', '4').as('cuatro')
        
    });

    it("First", ()=>{
        cy.get(".traversal-table > tbody > tr > td").first().should('contain',"Andy")
    });

    it("Last", ()=>{
        cy.get(".traversal-table > tbody > tr > td").last().should('contain',"Scott") //ultimo
    });

    it("NextALl", ()=>{
        cy.get(".traversal-drinks-list").contains('Tea').nextAll().should('have.length', 3)
    });

    it("Todos menos", ()=>{
        cy.get(".traversal-button-states > button").not('.disabled').should('not.have.class','disabled')
    });

    it("Seleccionar el padre", ()=>{
        cy.get(".traversal-mark").parent().should('contain','consectetur adipiscing elit')
    });

    it("Seleccionar el Previo", ()=>{
        cy.get("#sugar").prev().should('contain','Espresso')
    });

    it("Seleccionar Todos los Previo", ()=>{
        cy.get(".sales").prevAll().should('have.have.length',2)
        const val=cy.get(".sales").prevAll()
        val.each(($el, index, $list)=>{
            cy.log($el.text()) //chingon obtengo los valores
            cy.log(index)
            cy.log($list)
        })
        
    });

    it("Valor de un tabla", ()=>{
        const datos=[];
        let cantidad=0;
        cy.get("#thumbnail-1 td").each(($el, index, $list)=>{
            datos[index]=$el.text()
        }).then(()=>{
            let i;
            for(i=0; i<datos.length; i++){
                cy.log(datos[i])
                if(Number(datos[i]))
                    {
                        cantidad+=Number(datos[i])
                    } 
            }
            cy.log(cantidad)
            cy.log("La cantidad total es: " + cantidad)
            expect(cantidad).to.eq(322)
        })
    });


    it.only("Valor de un tabla un solo valor", ()=>{
        
        const campo=cy.get("#thumbnail-1 tr td:nth-child(2)")
        
        campo.each(($el,index,$list)=>{
            const dato=$el.text()
            if(dato.includes("Woods")){
                campo.eq(index).next().then( age =>{
                    const edad=age.text()
                    cy.log(edad)
                    expect(edad).to.equal('80')
                })
            }
        })
          
    });




    
}) 