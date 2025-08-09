Cypress.on("uncaught:exception", () => false);

describe("TC_007: For Talents Page Tests", () => {
  it("TC_007-01: Verify For Talents page Loads Successfully", () => {
    cy.visit("https://codingcollective.com/");

    cy.get(".ul-navbar").contains("For Talents").should("be.visible").click();

    cy.url().should("include", "/for-talents");

    cy.contains("Kickstart Your Career as a Remote Web Developer").should(
      "be.visible"
    );
  });

  it("TC_007-02: Verify Recruitment Website Loads Successfully", () => {
    cy.visit("https://codingcollective.com/for-talents");

    cy.get("a")
      .contains("Apply with Us")
      .should("be.visible")
      .invoke("removeAttr", "target")
      .click();

    cy.origin("https://recruitment.codingcollective.com", () => {
      cy.url().should("include", "/candidate");
      cy.contains("CANDIDATE FORM").should("be.visible");
    });
  });

  it("TC_007-03: Verify Apply For Jobs Hyperlink Loads Successfully", () => {
    cy.visit("https://codingcollective.com/for-talents");

    cy.get(
      ".elementor-element-18900c9 > .elementor-element > .elementor-widget-container > .elementor-heading-title > a"
    )
      .first()
      .should("be.visible")
      .click();

    cy.contains("Job Details").scrollIntoView().should("be.visible");
  });
});
