import loc from "../locators";

Cypress.Commands.add("acessarPage", () => {
    cy.visit("/login#!")
});

Cypress.Commands.add("fillInEmail", (email) => {
    cy.get(loc.login.inputEmail).type(email, {log: false});
});

Cypress.Commands.add("fillInPassword", (password) => {
    cy.get(loc.login.inputPassword).type(password, {log: false});
});

Cypress.Commands.add("clickButton", () => {
    cy.get(loc.login.btnLogin).click();
});

Cypress.Commands.add("clickButtonOk", () => {
    cy.get(loc.login.btnOk).click();
});

Cypress.Commands.add("clearFieldEmail", () => {
    cy.get(loc.login.inputEmail).clear();
});

Cypress.Commands.add("clearFieldPassword", () => {
    cy.get(loc.login.inputPassword).clear();
});

Cypress.Commands.add("selectCheckbox", () => {
    cy.get(loc.login.checkbox).check();
});

Cypress.Commands.add("deselectCheckbox", () => {
    cy.get(loc.login.checkbox).uncheck();
});

Cypress.Commands.add("clickLinkCreateAccount", () => {
    cy.get(loc.login.linkCreateAccount).click({force: true});
});

Cypress.Commands.add("logIn", () => {
    cy.fillInEmail(Cypress.env("email"));
        cy.fillInPassword(Cypress.env("senha"));
        cy.clickButton();
        cy.validateMsgSuccess("Login realizado");
        cy.validateMsgWelcome("Olá, kylian@teste.com");
        cy.clickButtonOk();
});