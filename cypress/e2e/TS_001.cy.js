Cypress.on('uncaught:exception', () => false);

describe('TS_001: A User explore the website', () => {
  
  beforeEach(() => {
    cy.visit('https://codingcollective.com/')
  })

  it('TC_001-01: Verify Homepage Loads Successfully', () => {
    cy.url().should('eq', 'https://codingcollective.com/')
    cy.get('body').should('be.visible')
  })

  it('TC_001-02: Verify Navigation Bar Functionality', () => {
      const menuItems = [
        { selector: 'nav a:contains("Our Tech Community")', url: '/our-tech-community' }
      ]
      menuItems.forEach((item) => {
        cy.get(item.selector).click()
        cy.url().should('include', item.url)
      })
  })

  it('TC_001-03: Verify Homepage Buttons Functionality', () => {
    cy.get('.elementor-element-3075efe > .elementor-widget-container > .elementor-button-wrapper > .elementor-button')
      .scrollIntoView()
      .should('be.visible')
      .click()

    cy.url().should('include', '/for-businesses')
  })

  it('TC_001-04: Verify Footer Hyperlinks Functionality', () => {
    cy.get('.elementor-element-94b05d8').scrollIntoView()

    const footerLinks = [
      { selector: '.elementor-element-9a2ebb6 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button > .elementor-button-content-wrapper > .elementor-button-text', url: '/about-us' },
      { selector: '.elementor-element-a8c04f3 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button > .elementor-button-content-wrapper > .elementor-button-text', url: '/for-businesses' }
    ]

    footerLinks.forEach(link => {
      cy.get(link.selector)
        .should('be.visible')
        .invoke('removeAttr', 'target') 
        .click()

      cy.url().should('include', link.url)
      cy.go('back')
      cy.get('.elementor-element-94b05d8').scrollIntoView()
    })
  })
})
