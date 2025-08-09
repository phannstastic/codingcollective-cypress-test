Cypress.on("uncaught:exception", () => false);

describe("TC_005: For potential client explores the services offered by Coding Collective.", () => {
  it("TC_005-01: Verify For Businesses Page Loads Successfully", () => {
    cy.visit("https://codingcollective.com/");

    cy.get(".ul-navbar")
      .contains("For Businesses")
      .should("be.visible")
      .click();

    cy.url().should("include", "/for-businesses");
    cy.get("body").should("be.visible");
  });

  it('TC_005-02: Verify "Contact Us" Buttons Functionality', () => {
    cy.visit("https://codingcollective.com/for-businesses");

    cy.get(
      ".elementor-element-5a24d25 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button"
    )
      .scrollIntoView()
      .should("be.visible")
      .click();

    cy.url().should("include", "/contact-us");
  });
});
