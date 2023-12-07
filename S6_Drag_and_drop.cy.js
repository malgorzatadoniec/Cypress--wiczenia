describe('ID scenariusza: 6 Przeciągnięcie elementu', () => {
  beforeEach(() => {
    cy.visit('https://trytestingthis.netlify.app/')
  })

  it('Scenariusz 1: Drag and drop', () => {
    cy.get('#drag1').drag('#div1')
  })
})