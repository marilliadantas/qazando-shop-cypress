import loc from "../locators";

Cypress.Commands.add("validateMsgLogoutSuccess", (msgLogoutSuccess) => {
    cy.get(loc.logout.msgLogout).should('be.visible').and('have.text', msgLogoutSuccess)
});

Cypress.Commands.add("validateMsgThanks", (msgThanks) => {
    cy.get(loc.logout.msgThanks).should('be.visible').and('have.text', msgThanks)
});

Cypress.Commands.add("validatePageLogin", () => {
    cy.get(loc.login.titlePageLogin).should('be.visible');
});
