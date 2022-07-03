import {navigeTo} from "../support/page_objects/navigationPage";

describe('Test with Page Objects', () => {

  beforeEach('open application', () => {
    cy.visit('/')
  })

  it('verify navigations across pages', () => {
    navigeTo.formLayoutsPage()
    navigeTo.datepickerPage()
    navigeTo.toasterPage()
    navigeTo.smartTablePage()
    navigeTo.tooltipPage()
  })

})
