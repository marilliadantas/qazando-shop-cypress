/// <reference types="cypress"/>

// let el = require('../elements/registerElements').register
import { register } from '../elements/registerElements'

// Ações/métodos/funções
export default {
    fillInformations(nome, email, senha) {
        if (nome !== null) {
        cy.get(register.fields.name)
            .should('be.visible')
            .type(nome)
        }

        if (email !== null) {
        cy.get(register.fields.email)
            .should('be.visible')
            .type(email)
        }

        if (senha !== null) {
        cy.get(register.fields.password)
            .should('be.visible')
            .type(senha)
        }
    },

    saveRegister() {
        cy.get(register.buttons.register)
            .click()
    },
    
    checkMessage(message) {
        cy.get(register.messages.error)
            .should('have.text', message)
    },
    
    checkRegisterSuccess(name) {
        cy.get(register.messages.successTitle)
            .should('have.text', 'Cadastro realizado!')
        
        cy.get(register.messages.successSubtitle, {timeout: 3000})
            .should('have.text', `Bem-vindo ${name}`)
    }
}