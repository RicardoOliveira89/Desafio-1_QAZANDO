/// <reference types="cypress" />

describe('Cadastro de usuário', ()=>{
    it('Validar campo nome vazio', () => {
        cy.visit('/')
        cy.get('#top_header  li:nth-child(2) > a')
            .click()
        cy.get('#btnRegister')
            .click()
        cy.get('#errorMessageFirstName')
            .should('have.text', 'O campo nome deve ser prenchido')
    });

    it.only('Validar campo e-mail vazio', () => {
        cy.visit('/')
        cy.get('#top_header  li:nth-child(2) > a')
            .click()
        cy.get('#user')
            .type('Ricardo Oliveira')
        cy.get('#btnRegister')
            .click()
        cy.get('#errorMessageFirstName')
            .should('have.text', 'O campo e-mail deve ser prenchido corretamente')
    });

    it('Validar campo e-mail inválido', () => {
        
    });

    it('Validar campo senha vazio', () => {
        
    });

    it('Validar campo senha inválido', () => {
        
    });

    it('Cadastro realizado com sucesso', () => {
        
    });
})