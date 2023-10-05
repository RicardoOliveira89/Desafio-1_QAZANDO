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

    it('Validar campo e-mail vazio', () => {
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
        cy.visit('/')
        cy.get('#top_header  li:nth-child(2) > a')
            .click()
        cy.get('#user')
            .type('Ricardo Oliveira')
        cy.get('#email')
            .type('e-mail inválido')
        cy.get('#btnRegister')
            .click()
        cy.get('#errorMessageFirstName')
            .should('have.text', 'O campo e-mail deve ser prenchido corretamente')
            
    });

    it('Validar campo senha vazio', () => {
        cy.visit('/')
        cy.get('#top_header  li:nth-child(2) > a')
            .click()
        cy.get('#user')
            .type('Ricardo Oliveira')
        cy.get('#email')
            .type('ricardooliveira.qa@gmail.com')
        cy.get('#btnRegister')
            .click()
        cy.get('#errorMessageFirstName')
            .should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')
    });

    it('Validar campo senha inválido', () => {
        cy.visit('/')
        cy.get('#top_header  li:nth-child(2) > a')
            .click()
        cy.get('#user')
            .type('Ricardo Oliveira')
        cy.get('#email')
            .type('ricardooliveira.qa@gmail.com')
        cy.get('#password')
            .type('1234')
        cy.get('#btnRegister')
            .click()
        cy.get('#errorMessageFirstName')
            .should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')
    });

    it.only('Cadastro realizado com sucesso', () => {
        cy.visit('/')
        cy.get('#top_header  li:nth-child(2) > a')
            .click()
        cy.get('#user')
            .type('Ricardo Oliveira')
        cy.get('#email')
            .type('ricardooliveira.qa@gmail.com')
        cy.get('#password')
            .type('1234567')
        cy.get('#btnRegister')
            .click()
        cy.get('#swal2-title')
            .should('have.text', 'Cadastro realizado!')
    });
})