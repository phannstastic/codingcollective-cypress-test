Cypress.on('uncaught:exception', () => false);

describe('TCS_002: A user navigates to the "About Us" page to learn more about the company', () => {
  
  before(() => {
    cy.visit('https://codingcollective.com/')
  })

  it('TC_002-01: Verify About Us page Loads Successfully', () => {
    cy.get('.ul-navbar')
      .contains('About Us')
      .click()

    cy.url().should('include', '/about-us')

    cy.contains('Harnessing Best of Talents').should('be.visible')
    cy.get('body').should('be.visible')
   })
})
