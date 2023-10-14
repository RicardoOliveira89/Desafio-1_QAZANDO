/// <reference types="cypress" />

// Elements
const elements = {
    buttons:{
        register: '#btnRegister'
    },
    fields:{
        name: '#user',
        email: '#email',
        password: '#password'
    },
    messages:{
        errorMessage: '#errorMessageFirstName' 
    }
}

//Methods/Functions
export default{
    saveRegister(){
        cy.get(elements.buttons.register)
        .click()
    },
    fillName(name){
        cy.get(elements.fields.name)
        .type(name)
    },
    fillEmail(email){
        cy.get(elements.fields.email)
        .should('be.visible')
        .type(email)
    },
    fillPassword(password){
        cy.get(elements.fields.password)
        .should('be.visible')
        .type(password)
    },
    checkMessage(message){
        cy.get(elements.messages.errorMessage)
        .should('have.text', message)
    }
}
