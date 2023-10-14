/// <reference types="cypress" />

Cypress.Commands.add('saveRegister', () => {
    cy.get('#btnRegister')
        .click()
})

Cypress.Commands.add('fillName', (name) => {
    cy.get('#user')
        .type(name)
})

Cypress.Commands.add('fillEmail', (email) => {
    cy.get('#email')
        .should('be.visible')
        .type(email)
})

Cypress.Commands.add('fillPassword', (password) => {
    cy.get('#password')
        .should('be.visible')
        .type(password)
})

Cypress.Commands.add('checkMessage', (message) => {
    cy.get('#errorMessageFirstName')
        .should('have.text', message)
})