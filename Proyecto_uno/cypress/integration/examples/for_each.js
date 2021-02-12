/// <reference types="Cypress"  />

require('cypress-plugin-tab')

describe("Pruebas con foreach", () =>{
    it("Test uno", ()=>{
        
        cy.visit('https://automationteststore.com/')
        cy.title().should('eq','A place to practice your automation skills!')
        cy.get(".thumbnail").as("Productos") //alias para todos los productos
        cy.get("@Productos").find(".oneprice").each(($el, index, $list)=>{
            cy.log($el.text()) //muestra todos los Precios.
        });
        
        
    });

    it("Test dos for clasico", ()=>{
        
        cy.visit('https://automationteststore.com/')
        cy.title().should('eq','A place to practice your automation skills!')
        cy.get(".thumbnail").find(".oneprice").invoke('text').as('Precios')  //busca y toma el texto

        var itemsTotales=0;
        cy.get("@Precios").then($datos => {
            let PrecioTotal=0;
            let ItemPrecio=$datos.split('$') //quita el $
            let i;
            for(i=0; i<ItemPrecio.length; i++){
                cy.log(ItemPrecio[i]) //muestra los precios
                PrecioTotal +=Number(ItemPrecio[i])
            }
            cy.log("Precio total: " + PrecioTotal)
        });
        
    });

    it("Test tres for clasico", ()=>{
        
        cy.visit('https://automationteststore.com/')
        cy.title().should('eq','A place to practice your automation skills!')
        cy.get(".thumbnail").find(".oneprice").invoke('text').as('Precios')  //busca y toma el texto

        let PrecioTotal=0;
        cy.get("@Precios").then($datos => {
            
            let ItemPrecio=$datos.split('$') //quita el $
            let i;
            for(i=0; i<ItemPrecio.length; i++){
                cy.log(ItemPrecio[i]) //muestra los precios
                PrecioTotal +=Number(ItemPrecio[i])
            }
            cy.log("Precio total: " + PrecioTotal)
        })
        .then(() =>{
            cy.log("Esto es el final cargo el Precio total: " + PrecioTotal)
            expect(PrecioTotal).to.equal(349.6)
        });
        
    });

}) 