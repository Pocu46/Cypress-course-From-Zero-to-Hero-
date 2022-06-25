describe('Find HTML elements practice', ()=> {
  it('first find HTML elements test', ()=> {

    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()

    cy.get('[data-cy="signInButton"]')

    cy.contains('Sign in')

    cy.contains('[status="warning"]', 'Sign in')

    cy.get('#inputEmail3')
      .parents('form')
      .find('button')
      .should('contain', 'Sign in')
      .parents('form')
      .find('nb-checkbox')
      .click()

    cy.contains('nb-card', 'Horizontal form')
      .find('[type="email"]')

  })

})
