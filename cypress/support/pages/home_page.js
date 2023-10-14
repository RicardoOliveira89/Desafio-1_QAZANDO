/// <reference types="cypress" />

export default{
    acessRegisterPage(){
        cy.visit('/')
            .get('.header-logo')
        cy.get('#top_header  li:nth-child(2) > a')
            .click()
        cy.get('#user')
            .should('be.visible')
    }
}