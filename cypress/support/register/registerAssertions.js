import loc from "../locators";

Cypress.Commands.add("validateSuccessMessage", (msgPopup) => {
  cy.get(loc.register.msgSucess).should('contain', msgPopup);
});

Cypress.Commands.add("validateWelcomeMessage", () => {
  cy.get(loc.register.msgWelcome)
    .invoke("text")
    .then((message) => {
      const regex = /Bem-vindo (.+)/;
      const match = message.match(regex);

      if (match) {
        const nomeUsuario = match[1];
        cy.log(`Bem-vindo ${nomeUsuario}`);
      } else {
        cy.log("Não foi possível extrair o nome do usuário.");
      }
    });
});

Cypress.Commands.add("validateErrorAlert", (alertError) => {
    cy.get(loc.register.alertErro).should('have.text', alertError);
  });

