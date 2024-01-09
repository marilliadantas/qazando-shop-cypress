import loc from "../locators";

Cypress.Commands.add("fillInName", (name) => {
    cy.get(loc.register.inputName).type(name);
});

Cypress.Commands.add("fillInEmail", (email) => {
    cy.get(loc.register.inputEmail).type(email);
});

Cypress.Commands.add("fillInPassword", (password) => {
    cy.get(loc.register.inputPassword).type(password, {log: false});
});

Cypress.Commands.add("clickRegisterButton", () => {
    cy.get(loc.register.btnRegister).click();
})

Cypress.Commands.add("closeModal", () => {
    cy.get(loc.register.btnOk).click();
})

Cypress.Commands.add("blankNameField", () => {
    cy.get(loc.register.inputName).clear();
})

Cypress.Commands.add("blankEmailField", () => {
    cy.get(loc.register.inputEmail).clear();
})

Cypress.Commands.add("blankPasswordField", () => {
    cy.get(loc.register.inputEmail).clear();
})