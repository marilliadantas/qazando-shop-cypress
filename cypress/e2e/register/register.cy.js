/// <reference types = "cypress" />

import {fakerPT_BR as faker} from '@faker-js/faker';
import homePage from "../../support/pages/home_page";
import registerPage from '../../support/pages/register_page';

const name = faker.person.fullName()
const email = faker.internet.email()
const password = faker.internet.password(8);

describe('Register', () => {
  beforeEach(() => {
    homePage.accessRegisterPage()
  });

  it('Register success', () => {
    registerPage.fillName(name)
    registerPage.fillEmail(email)
    registerPage.fillPassword(password)
    registerPage.saveRegister()
    registerPage.checkRegisterSuccess(name)
  })

  it('Registration with blank name', () => {
    registerPage.fillEmail(email)
    registerPage.fillPassword(password)
    registerPage.saveRegister()
    registerPage.checkMessage('O campo nome deve ser prenchido')
  })

  it('Registration with blank email', () => {
    registerPage.fillName(name)
    registerPage.saveRegister()
    registerPage.checkMessage('O campo e-mail deve ser prenchido corretamente')
  })

  it('Registration with invalid password', () => {
    registerPage.fillName(name)
    registerPage.fillEmail(email)
    registerPage.fillPassword("test1")
    registerPage.saveRegister()
    registerPage.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
  })
  
  it('Registration with blank password', () => {
    registerPage.fillName(name)
    registerPage.fillEmail(email)
    registerPage.saveRegister()
    registerPage.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
  })

  it('Registration with invalid email', () => {
    registerPage.fillName(name)
    registerPage.fillEmail("emailinvalido")
    registerPage.fillPassword(password)
    registerPage.saveRegister()
    registerPage.checkMessage('O campo e-mail deve ser prenchido corretamente')
  })

  it('Registration with email with numbers', () => {
    registerPage.fillName(name)
    registerPage.fillEmail("32143151")
    registerPage.fillPassword(password)
    registerPage.saveRegister()
    registerPage.checkMessage('O campo e-mail deve ser prenchido corretamente')
  })

  it('Registration with special email address', () => {
    registerPage.fillName(name)
    registerPage.fillEmail("!#@!#@!$@!$")
    registerPage.fillPassword(password)
    registerPage.saveRegister()
    registerPage.checkMessage('O campo e-mail deve ser prenchido corretamente')
  })
})