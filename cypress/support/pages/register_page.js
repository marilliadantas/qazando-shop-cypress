/// <reference types="cypress"/>

let el = require('../elements/registerElements').register

// Ações/métodos/funções
export default {
    fillInformations(nome, email, senha) {
        if (nome !== null) {
        cy.get(el.fields.name)
            .should('be.visible')
            .type(nome)
        }

        if (email !== null) {
        cy.get(el.fields.email)
            .should('be.visible')
            .type(email)
        }

        if (senha !== null) {
        cy.get(el.fields.password)
            .should('be.visible')
            .type(senha)
        }
    },

    saveRegister() {
        cy.get(el.buttons.register)
            .click()
    },
    
    checkMessage(message) {
        cy.get(el.messages.error)
            .should('have.text', message)
    },
    
    checkRegisterSuccess(name) {
        cy.get(el.messages.successTitle)
            .should('have.text', 'Cadastro realizado!')
        
        cy.get(el.messages.successSubtitle, {timeout: 3000})
            .should('have.text', `Bem-vindo ${name}`)
    }
}