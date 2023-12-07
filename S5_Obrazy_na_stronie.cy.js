describe('ID scenariusza: 5 Umiejscowienie obrazów na stronie głównej', () => {
  it('Scenariusz: 1 Położenie obrazu', () => {
    cy.visit('https://trytestingthis.netlify.app/')
    cy.get('.side').should('exist')
    cy.get('.side > h2').should('exist').contains("This is your layout one")
    cy.get('.side > h4').should('exist').contains("This is your sample photo")
    cy.get('.fakeimg').should('exist')
    cy.get('.side > :nth-child(6)').should('exist').contains("This is your description of the photo")
    cy.get('.side > :nth-child(9)').should('exist')
  })
})