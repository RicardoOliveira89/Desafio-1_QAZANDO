/// <reference types="cypress" />

//Elements
const elements = {
    messages: {
        sucessMessage: '#swal2-title'
    }
}

//Methods/Functions
export default{
    messageSucess(message){
        cy.get(elements.messages.sucessMessage)
            .should('have.text', message)
    }
}