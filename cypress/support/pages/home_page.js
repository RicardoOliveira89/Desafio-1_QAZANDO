/// <reference types="cypress" />

//Elements
const elements = {
    buttons: {
        register: '#top_header  li:nth-child(2) > a'
    },
    fields: {
        name: '#user'
    }
}
export default{
    acessRegisterPage(){
        cy.visit('/')
        cy.get(elements.buttons.register)
            .click()
        cy.get(elements.fields.name)
            .should('be.visible')
    }
}