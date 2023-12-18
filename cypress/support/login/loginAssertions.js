import loc from "../locators";

Cypress.Commands.add("validateMsgSuccess", (msgSuccess) => {
    cy.get(loc.login.msgSucess).should('be.visible').and('contain', msgSuccess)
});

Cypress.Commands.add("validateMsgWelcome", (msgWelcome) => {
    cy.get(loc.login.msgWelcome).should('be.visible').and('contain', msgWelcome)
});

Cypress.Commands.add("validateMsgError", (msgErro) => {
    cy.get(loc.login.alertErro).should('be.visible').and('contain', msgErro)
});

Cypress.Commands.add("validateCheckboxSelected", () => {
    cy.get(loc.login.checkbox).should('be.checked');
});

Cypress.Commands.add("validateCheckboxDeselected", () => {
    cy.get(loc.login.checkbox).should('not.be.checked');
});

Cypress.Commands.add("validatePaginaRegistration", () => {
    cy.get(loc.register.titlePageRegister).should('be.visible');
});