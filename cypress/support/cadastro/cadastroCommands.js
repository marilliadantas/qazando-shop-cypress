import loc from "../locators";

Cypress.Commands.add("preencherNome", (nome) => {
    cy.get(loc.cadastro.inputNome).type(nome);
});

Cypress.Commands.add("preencherEmail", (email) => {
    cy.get(loc.cadastro.inputEmail).type(email);
});

Cypress.Commands.add("preencherSenha", (senha) => {
    cy.get(loc.cadastro.inputSenha).type(senha, {log: false});
});

Cypress.Commands.add("clicarBotaoCadastrar", () => {
    cy.get(loc.cadastro.btnCadastrar).click();
})

Cypress.Commands.add("fecharModal", () => {
    cy.get(loc.cadastro.btnOk).click();
})

Cypress.Commands.add("limparCampoNome", () => {
    cy.get(loc.cadastro.inputNome).clear();
})

Cypress.Commands.add("limparCampoEmail", () => {
    cy.get(loc.cadastro.inputEmail).clear();
})