/// <reference types="cypress" />
import {faker} from '@faker-js/faker'

const user_data_invalid = require ('../fixtures/desafio_invalid_data.json')
const user_data_valid = require('../fixtures/desafio_valid_data.json')
const nome = faker.name.fullName()

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
            .type(user_data_valid.name)
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
            .type(user_data_valid.name)
        cy.get('#email')
            .type(user_data_invalid.email)
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
            .type(user_data_valid.name)
        cy.get('#email')
            .type(user_data_valid.email)
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
            .type(user_data_valid.name)
        cy.get('#email')
            .type(user_data_valid.email)
        cy.get('#password')
            .type(user_data_invalid.password)
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
            .type(nome)
        cy.get('#email')
            .type(user_data_valid.email)
        cy.get('#password')
            .type(user_data_valid.password)
        cy.get('#btnRegister')
            .click()
        cy.get('#swal2-title')
            .should('have.text', 'Cadastro realizado!')
    });
})