/// <reference types = "cypress" />

import "../../support/cadastro/cadastroCommands";
import "../../support/cadastro/cadastroAssertions";
import { fakerPT_BR as faker} from '@faker-js/faker';

const nome = faker.person.fullName();
const email = faker.internet.email();
const senha = faker.internet.password(8);

describe('Cadastro', () => {
  beforeEach(() => {
    cy.visit('/register')
  });

  it('Cadastro com sucesso', () => {
    cy.preencherNome(nome);
    cy.preencherEmail(email);
    cy.preencherSenha(senha);
    cy.clicarBotaoCadastrar();
    cy.validaMsgSucesso("Cadastro realizado!");
    cy.validaMsgBoasVindas();
    cy.fecharModal();
  })

  it('Cadastro com nome em branco', () => {
    cy.limparCampoNome();
    cy.preencherEmail(email);
    cy.preencherSenha(senha);
    cy.clicarBotaoCadastrar();
    cy.validaAlertaErro("O campo nome deve ser prenchido");
  })

  it('Cadastro com e-mail em branco', () => {
    cy.preencherNome(nome);
    cy.limparCampoEmail();
    cy.preencherSenha(senha);
    cy.clicarBotaoCadastrar();
    cy.validaAlertaErro("O campo e-mail deve ser prenchido corretamente");
  })

  it('Cadastro com e-mail inválido', () => {
    cy.preencherNome(nome);
    cy.preencherEmail("teste.teste.com");
    cy.preencherSenha(senha);
    cy.clicarBotaoCadastrar();
    cy.validaAlertaErro("O campo e-mail deve ser prenchido corretamente");
  })

  it('Cadastro com e-mail com números', () => {
    cy.preencherNome(nome);
    cy.preencherEmail("72398237812");
    cy.preencherSenha(senha);
    cy.clicarBotaoCadastrar();
    cy.validaAlertaErro("O campo e-mail deve ser prenchido corretamente");
  })

  it('Cadastro com e-mail com caracter especial', () => {
    cy.preencherNome(nome);
    cy.preencherEmail("!#@!#@!$@!$");
    cy.preencherSenha(senha);
    cy.clicarBotaoCadastrar();
    cy.validaAlertaErro("O campo e-mail deve ser prenchido corretamente");
  })
})