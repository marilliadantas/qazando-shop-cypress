/// <reference types = "cypress" />

import homePage from "../../support/pages/home_page";
import loginPage from "../../support/pages/login_page";

describe('Login', () => {
    beforeEach(() => {
        homePage.accessLoginPage()
    });

    it('Login success', () => {
        const email = Cypress.env('CYPRESS_EMAIL');
        const senha = Cypress.env('CYPRESS_SENHA');

        loginPage.fillEmail(email)
        loginPage.fillPassword(senha)
        loginPage.logIn()
        loginPage.checkLoginSuccess()
        loginPage.checkUrl('/my-account');
    });

    it('Login with invalid email', () => {
        loginPage.fillEmail("emailinvalido")
        loginPage.fillPassword()
        loginPage.logIn()
        loginPage.checkMessage("E-mail inválido.")
    });

    it('Login with invalid password', () => {
        loginPage.fillEmail()
        loginPage.fillPassword("teste23871")
        loginPage.logIn()
        loginPage.checkMessage("Senha inválida.")
    });

    it('Login with blank email', () => {
        loginPage.fillPassword()
        loginPage.logIn()
        loginPage.checkMessage("E-mail inválido.")
    });

    it('Login with blank password', () => {
        loginPage.fillEmail()
        loginPage.logIn()
        loginPage.checkMessage("Senha inválida.")
    });

    it('Login with blank email and password', () => {
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