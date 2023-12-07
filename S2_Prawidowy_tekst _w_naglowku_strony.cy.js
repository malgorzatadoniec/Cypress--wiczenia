describe('ID scenariusza: 2 Feature: Prawidłowy tekst w nagłówku strony głównej', () => {
  it('Scenariusz 1: Nagłówek strony głównej zawiera "Your Website to practice Automation Testin"', () => {
    cy.visit('https://trytestingthis.netlify.app/')
    cy.get('h1').contains("Your Website to practice Automation Testing")
  })
})