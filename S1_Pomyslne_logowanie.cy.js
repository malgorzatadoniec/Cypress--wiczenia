describe('ID scenariusza: 1 Feature: Logowanie użytkownika', () => {
  beforeEach(() => {
    cy.visit('https://trytestingthis.netlify.app/')
  })

  it.only('Scenariusz 1: Pomyślne logowanie', () => {
    cy.get('#uname').type("test")
    cy.get('#pwd').type("test")
    cy.get('[type="submit"]').click()
    cy.contains("Login Successful :)").should('be.visible')
  })

  it('Scenariusz2: Próba logowania bez podania hasła', () => {
    cy.get('#uname').type("test")
    cy.get('#pwd').type("test2")
    cy.get('[type="submit"]').click()
  })
  
  it('Scenariusz 3: Próba logowania bez podania nazwy użytkownika', () => {
    cy.get('#uname').type("test2")
    cy.get('#pwd').type("test")
    cy.get('[type="submit"]').click()
  })

  it('Scenariusz 4: Próba logowania bez podania nazwy użytkownika i hasła', () => {
    cy.get('[type="submit"]').click()
  })

  it('Scenariusz 5: Próba logowania przy użyciu nieprawidłowej nazwy użytkownika i nieprawidłowego hasła', () => {
    cy.get('#uname').type("test2")
    cy.get('#pwd').type("test2")
    cy.get('[type="submit"]').click()
  })

  it('Scenariusz 6: Próba logowania przy użyciu nieprawidłowej nazwy użytkownika i prawidłowego hasła', () => {
    cy.get('#uname').type("test2")
    cy.get('#pwd').type("test")
    cy.get('[type="submit"]').click()
  })

  it('Scenariusz 7: Próba logowania przy użyciu prawidłowej nazwy użytkownika i nieprawidłowego hasła', () => {
    cy.get('#uname').type("test")
    cy.get('#pwd').type("test2")
    cy.get('[type="submit"]').click()
  })
})