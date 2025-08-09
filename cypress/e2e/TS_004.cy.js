Cypress.on("uncaught:exception", () => false);

describe("TC_004: A user navigates to the Blog page to read news", () => {

  it("TC_004-01: Verify Blog Page Loads Successfully", () => {
    cy.visit("https://codingcollective.com/");

    cy.get(".ul-navbar")
      .contains("Blog")
      .should("be.visible")
      .then(($el) => {
        const href = $el.prop("href") || $el.attr("href");

        if (href) {
          cy.visit(href);

          cy.origin("https://blog.codingcollective.com", () => {
            cy.url().should("include", "blog.codingcollective.com");
            cy.contains("Latest posts", { timeout: 10000 }).should(
              "be.visible"
            );
            cy.get("body").should("be.visible");
          });
        } else {
          cy.wrap($el).click();

          cy.origin("https://blog.codingcollective.com", () => {
            cy.url().should("include", "blog.codingcollective.com");
            cy.contains("Latest posts", { timeout: 10000 }).should(
              "be.visible"
            );
            cy.get("body").should("be.visible");
          });
        }
      });
  });
});
