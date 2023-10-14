/// <reference types="cypress" />

//Elements
const elements = {
    messages: {
        messageSucess: '#swal2-title'
    }
}

//Methods/Functions
Cypress.Commands.add('checkRegisterSucess', (message) => {
    cy.get(elements.messages.messageSucess)
        .should('have.text', message)
})