/// <reference types = "cypress" />

import "../../support/logout/logoutCommands";
import "../../support/logout/logoutAssertions";
import "../../support/login/loginCommands";
import "../../support/login/loginAssertions";

describe('Logout', () => {
    beforeEach(() => {
        cy.visit("/login#!")
    });

    it('Logout success', () => {
        cy.logIn();
        cy.clickLogout();
        cy.validateMsgLogoutSuccess("Logout Sucessfull");
        cy.validateMsgThanks("Thank You");
        cy.clickButtonOk();
        cy.validatePageLogin();
    });
});