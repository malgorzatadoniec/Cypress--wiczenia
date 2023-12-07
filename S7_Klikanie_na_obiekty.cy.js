describe('Klikanie - demonstracja sposobów', () => {
  beforeEach(() => {
    cy.visit('https://trytestingthis.netlify.app/')
  })

  it('Scenario: 1 Jednorazowe kliknięcie', () => {
    cy.get('.pop-up-alert > button').click()

  })

  it('Scenario: 2 Podwójne kliknięcie', () => {
    cy.get('[ondblclick="myFunction()"]').dblclick()

  })

  it('Scenario: 3 Kliknięcie prawym przyciskiem myszy', () => {
    cy.get('[href="/"]').rightclick()

  })
})