function selectGroupMenuMenuItem(groupName) {
  cy.contains('a', groupName).then( menu => {
    cy.wrap(menu).find('.expand-state g g').invoke('attr', 'data-name').then( attr => {
      if(attr.includes('left')) {
        cy.wrap(menu).click()
      }
    })
  })
}

export class NavigationPage{

  formLayoutsPage() {
    selectGroupMenuMenuItem('Forms')
    cy.contains('Form Layouts').click()
  }

  datepickerPage() {
    selectGroupMenuMenuItem('Forms')
    cy.contains('Datepicker').click({force: true})
  }

  toasterPage() {
    selectGroupMenuMenuItem('Modal & Overlays')
    cy.contains('Toastr').click()
  }

  smartTablePage() {
    selectGroupMenuMenuItem('Tables & Data')
    cy.contains('Smart Table').click()
  }

  tooltipPage() {
    selectGroupMenuMenuItem('Modal & Overlays')
    cy.contains('Tooltip').click()
  }

}

export const navigeTo = new NavigationPage()
