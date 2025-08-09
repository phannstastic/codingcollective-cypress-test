Cypress.on('uncaught:exception', () => false);

describe('A user navigates to the Our Tech Community page to learn about the community', () => {
  
  it("TC_003-01: Verify Our Tech Community page Loads Successfully", () => {
    cy.visit("https://codingcollective.com/");
    cy.get(".ul-navbar")
      .contains("Our Tech Community")
      .should("be.visible")
      .click();

    cy.url().should("include", "/our-tech-community");

    cy.contains("Welcome to Our Community").should("be.visible");
  });

  it("TC_003-02: Verify Community Website Loads Successfully", () => {
    cy.visit("https://codingcollective.com/our-tech-community/");
    cy.url().should("include", "/our-tech-community");

    cy.get(
      ".elementor-element-f21dc61 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button"
    )
      .contains("Visit Site")
      .first()
      .then(($el) => {
        const href = $el.prop("href") || $el.attr("href");

        if (href) {
          cy.visit(href);
          cy.url().should("include", "jogjacodinghouse.com");
          cy.get("body").should("be.visible");
        } else {
          cy.wrap($el).click();
        }
      });
  });
});
