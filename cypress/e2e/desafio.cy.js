/// <reference types="cypress" />

describe('Cadastro de usuário', ()=>{
    it.only('Validar campo nome vazio', () => {
        cy.visit('/')
        cy.get('#top_header  li:nth-child(2) > a')
            .click()
        cy.get('#btnRegister')
            .click()
        cy.get('#errorMessageFirstName')
            .should('have.text', 'O campo nome deve ser prenchido')
    });

    it('Validar campo e-mail vazio', () => {
        
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