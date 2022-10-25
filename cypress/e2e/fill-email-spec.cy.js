describe('Test cypress example website', () => {
  it('click on action button should go to action page', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type')
      .wait(2000)
      .click()
    cy.url().should('include', 'commands/actions')
    cy.get('input[id="email1"]')
      .type('fake@gmail.com')
      .should('have.value', 'fake@gmail.com')
  })
})