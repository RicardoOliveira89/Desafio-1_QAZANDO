/// <reference types="cypress" />

const user_name = 'Ricardo Oliveira'
const user_email = 'ricardooliveira.qa@gmail.com'
const user_password = '1234567'

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
            .type(user_name)
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
            .type(user_name)
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
            .type(user_name)
        cy.get('#email')
            .type(user_email)
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
            .type(user_name)
        cy.get('#email')
            .type(user_email)
        cy.get('#password')
            .type('1234')
        cy.get('#btnRegister')
            .click()
        cy.get('#errorMessageFirstName')
            .should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')
    });

    it('Cadastro realizado com sucesso', () => {
        cy.visit('/')
        cy.get('#top_header  li:nth-child(2) > a')
            .click()
        cy.get('#user')
            .type(user_name)
        cy.get('#email')
            .type(user_email)
        cy.get('#password')
            .type(user_password)
        cy.get('#btnRegister')
            .click()
        cy.get('#swal2-title')
            .should('have.text', 'Cadastro realizado!')
    });
})