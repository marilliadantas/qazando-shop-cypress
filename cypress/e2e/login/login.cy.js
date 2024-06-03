/// <reference types = "cypress" />

import initialPage from "../../support/pages/initial_page";
import loginPage from "../../support/pages/login_page";

describe('Login', () => {
    beforeEach(() => {
        initialPage.accessLoginPage()
    });

    it('Login success', () => {
        loginPage.fillLogin("kylian@teste.com", Cypress.env("senha"))
        loginPage.logIn()
        loginPage.checkLoginSuccess()
        loginPage.checkUrl('/my-account');
    });

    it('Login with invalid email', () => {
        loginPage.fillLogin("emailinvalido", Cypress.env("senha"))
        loginPage.logIn()
        loginPage.checkMessage("E-mail inválido.")
    });

    it('Login with invalid password', () => {
        loginPage.fillLogin("kylian@teste.com", "teste23871")
        loginPage.logIn()
        loginPage.checkMessage("Senha inválida.")
    });

    it('Login with blank email', () => {
        loginPage.fillLogin(null, Cypress.env("senha"))
        loginPage.logIn()
        loginPage.checkMessage("E-mail inválido.")
    });

    it('Login with blank password', () => {
        loginPage.fillLogin("kylian@teste.com", null)
        loginPage.logIn()
        loginPage.checkMessage("Senha inválida.")
    });

    it('Login with blank email and password', () => {
        loginPage.fillLogin(null, null)
        loginPage.logIn()
        loginPage.checkMessage("E-mail inválido.")
        loginPage.checkMessage("Senha inválida.")
    });

    it('Select and Deselect remember me checkbox', () => {
        loginPage.selectCheckbox()
        loginPage.checkCheckbox()
        loginPage.deselectCheckbox()
        loginPage.checkCheckboxUncheck()
    });

    it('Validate link create account', () => {
        loginPage.clickLinkCreateAccount()
        loginPage.checkLinkRegistration()
        loginPage.checkUrl('/register')
    });
});