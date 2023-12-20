/// <reference types = "cypress" />

import "../../support/register/registerCommands";
import "../../support/register/registerAssertions";
import { fakerPT_BR as faker } from '@faker-js/faker';

const name = faker.person.fullName();
const email = faker.internet.email();
const password = faker.internet.password(8);

describe('Register', () => {
  beforeEach(() => {
    cy.visit('/register')
    cy.title().should('eq', "QAZANDO Shop E-Commerce")
  });

  it('Register success', () => {
    cy.fillInName(name);
    cy.fillInEmail(email);
    cy.fillInPassword(password);
    cy.clickRegisterButton();
    cy.validateSuccessMessage("Cadastro realizado!");
    cy.validateWelcomeMessage();
    cy.closeModal();
  })

  it('Registration with blank name', () => {
    cy.blankNameField();
    cy.fillInEmail(email);
    cy.fillInPassword(password);
    cy.clickRegisterButton();
    cy.validateErrorAlert("O campo nome deve ser prenchido");
  })

  it('Registration with blank email', () => {
    cy.fillInEmail(name);
    cy.blankEmailField();
    cy.fillInPassword(password);
    cy.clickRegisterButton();
    cy.validateErrorAlert("O campo e-mail deve ser prenchido corretamente");
  })

  it('Registration with invalid password', () => {
    cy.fillInName(name);
    cy.fillInEmail(email);
    cy.fillInPassword("3827361782");
    cy.clickRegisterButton();
    cy.validateErrorAlert("O campo senha deve ser prenchido corretamente");
  })
  
  it('Registration with blank password', () => {
    cy.fillInName(name);
    cy.fillInEmail(email);
    cy.blankPasswordField();
    cy.clickRegisterButton();
    cy.validateErrorAlert("O campo senha deve ser prenchido corretamente");
  })

  it('Registration with invalid email', () => {
    cy.fillInName(name);
    cy.fillInEmail("teste.teste.com");
    cy.fillInPassword(password);
    cy.clickRegisterButton();
    cy.validateErrorAlert("O campo e-mail deve ser prenchido corretamente");
  })

  it('Registration with email with numbers', () => {
    cy.fillInName(name);
    cy.fillInEmail("72398237812");
    cy.fillInPassword(password);
    cy.clickRegisterButton();
    cy.validateErrorAlert("O campo e-mail deve ser prenchido corretamente");
  })

  it('Registration with special email address', () => {
    cy.fillInName(name);
    cy.fillInEmail("!#@!#@!$@!$");
    cy.fillInPassword(password);
    cy.clickRegisterButton();
    cy.validateErrorAlert("O campo e-mail deve ser prenchido corretamente");
  })
})