import loc from "../locators";

Cypress.Commands.add("clickLogout", () => {
    cy.get(loc.logout.btnLogout).click();
});
