/// <reference types="cypress" />

import {faker} from '@faker-js/faker'
import home_page from '../support/pages/home_page'
import register_page from '../support/pages/register_page'
import login_page from '../support/pages/login_page'

const user_data_invalid = require ('../fixtures/desafio_invalid_data.json')
const user_data_valid = require('../fixtures/desafio_valid_data.json')
describe('Cadastro de usuário', ()=>{

    beforeEach('Acessando a página de cadastro', () => {
        home_page.acessRegisterPage()
    })
    it('Validar campo nome vazio', () => {
        register_page.saveRegister()
        register_page.checkMessage('O campo nome deve ser prenchido')
    });
    it('Validar campo e-mail vazio', () => {
        register_page.fillName(user_data_valid.name)
        register_page.saveRegister()
        register_page.checkMessage('O campo e-mail deve ser prenchido corretamente')
    });
    it('Validar campo e-mail inválido', () => {
        register_page.fillName(user_data_valid.name)
        register_page.fillEmail(user_data_invalid.email)
        register_page.saveRegister()
        register_page.checkMessage('O campo e-mail deve ser prenchido corretamente')
    });
    it('Validar campo senha vazio', () => {
        register_page.fillName(user_data_valid.name)
        register_page.fillEmail(user_data_valid.email)
        register_page.saveRegister()
        register_page.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
    });
    it('Validar campo senha inválido', () => {
        register_page.fillName(user_data_valid.name)
        register_page.fillEmail(user_data_valid.email)
        register_page.fillPassword(user_data_invalid.password)
        register_page.saveRegister()
        register_page.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
    });
    it('Cadastro realizado com sucesso', () => {
        const name = faker.person.fullName()
        register_page.fillName(name)
        register_page.fillEmail(user_data_valid.email)
        register_page.fillPassword(user_data_valid.password)
        register_page.saveRegister()
        login_page.messageSucess('Cadastro realizado!')
    });
})