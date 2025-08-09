Cypress.on("uncaught:exception", () => false);

describe("TC_006: A potential client attempts to contact Coding Collective.", () => {
  beforeEach(() => {
    cy.visit("https://codingcollective.com/");
    cy.get(".ul-navbar").contains("Contact Us").should("be.visible").click();

    cy.url().should("include", "/contact-us");
  });

  it("TC_006-01: Verify Contact Us Page Loads Successfully", () => {
    cy.contains("Contact Us").should("be.visible");
    cy.get("form").should("be.visible");
  });

  it("TC_006-03: Fill Contact Us Field with Invalid Data and Verify Errors", () => {
    cy.get(
      ":nth-child(1) > td > p > .wpcf7-form-control-wrap > .wpcf7-form-control"
    ).clear();
    cy.get(
      ":nth-child(2) > td > p > .wpcf7-form-control-wrap > .wpcf7-form-control"
    ).type("invalid-email-format");
    cy.get(
      ":nth-child(2) > td > p > .wpcf7-form-control-wrap > .wpcf7-form-control"
    ).clear();
    cy.get(
      ":nth-child(2) > td > p > .wpcf7-form-control-wrap > .wpcf7-form-control"
    ).clear();
    cy.get(".first > label > input").check();
    cy.get(
      ":nth-child(6) > td > p > .wpcf7-form-control-wrap > .wpcf7-form-control"
    ).clear();
    cy.get("label > .wpcf7-form-control").type("wrong answer");
    cy.get(".wpcf7-list-item > input").check();

    cy.get("p > .wpcf7-form-control").click();
    cy.contains(
      "One or more fields have an error. Please check and try again."
    ).should("be.visible");
  });
});
