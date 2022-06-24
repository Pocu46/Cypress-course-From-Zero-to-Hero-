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

  it.only('then and wrap methods', ()=> {

    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()

    // cy.contains('nb-card', 'Using the Grid')
    //   .find('[for="inputEmail1"]')
    //   .should('contain', 'Email')
    // cy.contains('nb-card', 'Using the Grid')
    //   .find('[for="inputPassword2"]')
    //   .should('contain', 'Password')
    // cy.contains('nb-card', 'Basic form')
    //   .find('[for="exampleInputEmail1"]')
    //   .should('contain', 'Email address')
    // cy.contains('nb-card', 'Basic form')
    //   .find('[for="exampleInputPassword1"]')
    //   .should('contain', 'Password')

    cy.contains('nb-card', 'Basic form')
      .then(firstForm => {
        const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text()
        const passwordLabelEmail = firstForm.find('[for="inputPassword2"]').text()
        expect(emailLabelFirst).to.equal('Email')
        expect(passwordLabelEmail).to.equal('Password')

        cy.contains('nb-card', 'Basic form').then( secondForm => {
          const passwordSecondText = secondForm.find('[for="exampleInputPassword1"]').text()
          expect(passwordLabelEmail).to.equal(passwordSecondText)

          cy.wrap(secondForm).find('[for="exampleInputPassword1"]').should('contain', 'Password')

        })
      })

  })

})
