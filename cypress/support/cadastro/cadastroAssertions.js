import loc from "../locators";

Cypress.Commands.add("validaMsgSucesso", (msgPopup) => {
  cy.get(loc.cadastro.msgSucesso).should('contain', msgPopup);
});

Cypress.Commands.add("validaMsgBoasVindas", () => {
  cy.get(loc.cadastro.msgBoasVindas)
    .invoke("text")
    .then((mensagem) => {
      const regex = /Bem-vindo (.+)/;
      const match = mensagem.match(regex);

      if (match) {
        const nomeUsuario = match[1];
        cy.log(`Bem-vindo ${nomeUsuario}`);
      } else {
        cy.log("Não foi possível extrair o nome do usuário.");
      }
    });
});

Cypress.Commands.add("validaAlertaErro", (alertErro) => {
    cy.get(loc.cadastro.alertaErro).should('contain', alertErro);
  });

