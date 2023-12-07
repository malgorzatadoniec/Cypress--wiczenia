describe('ID scenariusza: 3 Feature: Dodawanie i usuwanie produktów z koszyka', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/v1/inventory.html')
  })

  it('Scenariusz 1: Pomyślne dodanie i usunięcie przedmiotu z koszyka z poziomu strony głównej', () => {
    cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
    cy.get('.btn_secondary').click()

  })

  it('Scenariusz 2: Pomyślne dodanie i usunięcie przedmiotu z koszyka z poziomu koszyka', () => {
    cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
    cy.get('.shopping_cart_container').click()
    cy.location('pathname').should('eq', '/v1/cart.html')
    cy.get('.inventory_item_name').should('be.visible')
    cy.get('.item_pricebar > .btn_secondary').click()


  })
})