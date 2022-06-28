describe('lists and dropdowns tests', ()=> {

  it('lists and dropdowns', ()=> {
    cy.visit('/')
    //1
    // cy.get('nav nb-select')
    //   .click()
    // cy.get('.options-list')
    //   .contains('Dark')
    //   .click()
    // cy.get('nav nb-select')
    //   .should('contain', 'Dark')
    // cy.get('nb-layout-header nav')
    //   .should('have.css', 'background-color', 'rgb(34, 43, 69)')
    //2
    cy.get('nav nb-select').then( dropdown => {
      cy.wrap(dropdown)
        .click()
      cy.get('options-list nb-option')
        .each( (listItem, index) => {
          const itemText = listItem.text().trim()
          const colors = {
            "Light": "rgb(255, 255, 255)",
            "Dark": "rgb(34, 43, 69)",
            "Cosmic": "rgb(50, 50, 89)",
            "Corporate": "rgb(255, 255, 255)"
          }

          cy.wrap(listItem).click()
          cy.wrap(dropdown).should('contain', itemText)
          cy.get('nb-layout-header nav')
            .should('have.css', 'background-color', colors[itemText])
          if(index < 3) {
            cy.wrap(dropdown)
              .click()
          }
        })
    })

  })

})
