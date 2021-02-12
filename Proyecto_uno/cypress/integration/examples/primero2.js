describe('Proyecto dos', () => {
    it('test_uno', () => {
      
        cy.visit('https://demo.nopcommerce.com/')
        cy.title().should('eq','nopCommerce demo store')

    })

    it('test_dos', () => {
      
        cy.visit('https://demo.nopcommerce.com/')
        cy.title().should('eq','nopCommerce demo storee')

    })
})