/// <reference types="cypress" />

Cypress.Commands.add('checkRegisterSucess', (message) => {
    cy.get('#swal2-title')
        .should('have.text', message)
})