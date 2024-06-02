/// <reference types = "cypress" />

import {fakerPT_BR as faker} from '@faker-js/faker';
import initialPage from "../../support/pages/initial_page";
import registerPage from '../../support/pages/register_page';

const name = faker.person.fullName()
const email = faker.internet.email()
const password = faker.internet.password(8);

describe('Register', () => {
  beforeEach(() => {
    initialPage.accessRegisterPage()
  });

  it('Register success', () => {
    registerPage.fillInformations(name, email, password)
    registerPage.saveRegister()
    registerPage.checkRegisterSuccess(name)
  })

  it('Registration with blank name', () => {
    registerPage.fillInformations(null, email, password)
    registerPage.saveRegister()
    registerPage.checkMessage('O campo nome deve ser prenchido')
  })

  it('Registration with blank email', () => {
    registerPage.fillInformations(name, null, password)
    registerPage.saveRegister()
    registerPage.checkMessage('O campo e-mail deve ser prenchido corretamente')
  })

  it('Registration with invalid password', () => {
    registerPage.fillInformations(name, email, "test1")
    registerPage.saveRegister()
    registerPage.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
  })
  
  it('Registration with blank password', () => {
    registerPage.fillInformations(name, email, null)
    registerPage.saveRegister()
    registerPage.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
  })

  it('Registration with invalid email', () => {
    registerPage.fillInformations(name, "emailinvalido", password)
    registerPage.saveRegister()
    registerPage.checkMessage('O campo e-mail deve ser prenchido corretamente')
  })

  it('Registration with email with numbers', () => {
    registerPage.fillInformations(name, "32143151", password)
    registerPage.saveRegister()
    registerPage.checkMessage('O campo e-mail deve ser prenchido corretamente')
  })

  it('Registration with special email address', () => {
    registerPage.fillInformations(name, "!#@!#@!$@!$", password)
    registerPage.saveRegister()
    registerPage.checkMessage('O campo e-mail deve ser prenchido corretamente')
  })
})