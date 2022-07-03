import {navigeTo} from "../support/page_objects/navigationPage";
import {onFormLayoutsPage} from "../support/page_objects/formLayoutsPage";
import {onDatepickerPage} from "../support/page_objects/datepickerPage";
import {onSmartTablePage} from "../support/page_objects/smartTablePage";

describe('Test with Page Objects', () => {

  beforeEach('open application', () => {
    cy.openHomePage()
  })

  it('verify navigations across pages', () => {
    navigeTo.formLayoutsPage()
    navigeTo.datepickerPage()
    navigeTo.toasterPage()
    navigeTo.smartTablePage()
    navigeTo.tooltipPage()
  })

  it.skip('should submit Inline and Basic form and select tomorrow date in the calendar', () => {
    navigeTo.formLayoutsPage()
    onFormLayoutsPage.submitInlineFrmWithNameAndEmail('John', 'test@test.com')
    onFormLayoutsPage.submitBasicFormWithEmailAndPassword('test@test.com', 'password')
    navigeTo.datepickerPage()
    onDatepickerPage.selectCommonDatepickerFromToday(1)
    onDatepickerPage.selectDatepickerWithRangeFromToday(7, 14)
  })

  it('web tables ', () => {
    navigeTo.smartTablePage()
    onSmartTablePage.addNewRecordWithFirstAndLastName('John', 'Doe')
    onSmartTablePage.updateAgeByFirstName('John', '35')
    onSmartTablePage.deleteRowByIndex(1)
  })

})
