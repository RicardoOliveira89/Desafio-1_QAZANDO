/// <reference types="cypress" />
import {faker} from '@faker-js/faker'

const user_data_invalid = require ('../fixtures/desafio_invalid_data.json')
const user_data_valid = require('../fixtures/desafio_valid_data.json')
const nome = faker.person.fullName()

describe('Cadastro de usuário', ()=>{

    beforeEach('Acessando a página de cadastro', () => {
        cy.acessRegisterPage()
    })
    it('Validar campo nome vazio', () => {
        cy.saveRegister()
        cy.checkMessage('O campo nome deve ser prenchido')
    });
    it('Validar campo e-mail vazio', () => {
        cy.fillName(user_data_valid.name)
        cy.saveRegister()
        cy.checkMessage('O campo e-mail deve ser prenchido corretamente')
    });
    it('Validar campo e-mail inválido', () => {
        cy.fillName(user_data_valid.name)
        cy.fillEmail(user_data_invalid.email)
        cy.saveRegister()
        cy.checkMessage('O campo e-mail deve ser prenchido corretamente')
            
    });
    it('Validar campo senha vazio', () => {
        cy.fillName(user_data_valid.name)
        cy.fillEmail(user_data_valid.email)
        cy.saveRegister()
        cy.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
    });
    it('Validar campo senha inválido', () => {
        cy.fillName(user_data_valid.name)
        cy.fillEmail(user_data_valid.email)
        cy.fillPassword(user_data_invalid.password)
        cy.saveRegister()
        cy.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
    });
    it('Cadastro realizado com sucesso', () => {
        const name = faker.person.fullName()
        cy.fillName(name)
        cy.fillEmail(user_data_valid.email)
        cy.fillPassword(user_data_valid.password)
        cy.saveRegister()
        cy.get('#swal2-title')
            .should('have.text', 'Cadastro realizado!')
    });
})