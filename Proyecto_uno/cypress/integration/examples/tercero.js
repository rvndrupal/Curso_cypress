describe('Proyecto tres', () => {
    it('test_one', () => {
      
        cy.visit('https://demo.nopcommerce.com/')
        cy.title().should('eq','nopCommerce demo store')
        cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch")
        cy.get("#small-search-box-form > .button-1").click()
        cy.get(".product-box-add-to-cart-button").click()
        //cy.get("#product_enteredQuantity_4").focused().clear()
        cy.get("#product_enteredQuantity_4").clear().type("3")
        cy.get("#add-to-cart-button-4").click()
        cy.wait(5000)
        cy.get("#topcartlink > a > span.cart-label").click()
        cy.wait(3000)
        cy.get(".product-unit-price").contains("$1,800.00")

    })

})