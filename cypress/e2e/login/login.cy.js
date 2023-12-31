/// <reference types = "cypress" />

import "../../support/login/loginCommands";
import "../../support/login/loginAssertions";

describe('Login', () => {
    beforeEach(() => {
        cy.visit("/login#!")
    });

    it('Login success', () => {
        cy.fillInEmail(Cypress.env("email"));
        cy.fillInPassword(Cypress.env("senha"));
        cy.clickButton();
        cy.validateMsgSuccess("Login realizado");
        cy.validateMsgWelcome("Olá, kylian@teste.com");
        cy.clickButtonOk();
    });

    it('Login with invalid email', () => {
        cy.fillInEmail("teste@jdhajdsajkd.com");
        cy.fillInPassword(Cypress.env("senha"));
        cy.clickButton();
        cy.validateMsgError("E-mail inválido.");
    });

    it('Login with invalid password', () => {
        cy.fillInEmail("kylian@teste.com");
        cy.fillInPassword("teste23871");
        cy.clickButton();
        cy.validateMsgError("Senha inválida.");
    });

    it('Login with blank email', () => {
        cy.clearFieldEmail();
        cy.fillInPassword(Cypress.env("senha"));
        cy.clickButton();
        cy.validateMsgError("E-mail inválido.");
    });

    it('Login with blank password', () => {
        cy.fillInEmail(Cypress.env("email"));
        cy.clearFieldPassword();
        cy.clickButton();
        cy.validateMsgError("Senha inválida.");
    });

    it('Login with blank email and password', () => {
        cy.clearFieldEmail();
        cy.clearFieldPassword();
        cy.clickButton();
        cy.validateMsgError("E-mail inválido.");
        cy.validateMsgError("Senha inválida.");
    });

    it('Select and Deselect remember me checkbox', () => {
        cy.selectCheckbox();
        cy.validateCheckboxSelected();
        cy.deselectCheckbox();
        cy.validateCheckboxDeselected();
    });

    it('Validate link create account', () => {
        cy.clickLinkCreateAccount();
        cy.validatePaginaRegistration();
    });
});