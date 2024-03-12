# Projeto de automação na Aplicação Web Qazando Shop

## Site Utilizado

O teste foi realizado no site [Qazando shop](https://automationpratice.com.br/).

## Plano de Testes

### Funcionalidade de Login

| Número | Cenários                                                             |
|--------|---------------------------------------------------------------------|
| 1      | ✔️ **Login bem-sucedido**: Realiza login com sucesso usando credenciais válidas. |
| 2      | ❌ **Login com e-mail inválido**: Tenta fazer login com um e-mail inválido. |
| 3      | ❌ **Login com senha inválida**: Tenta fazer login com uma senha inválida. |
| 4      | ❌ **Login com campo de e-mail em branco**: Tenta fazer login com o campo de e-mail em branco. |
| 5      | ❌ **Login com campo de senha em branco**: Tenta fazer login com o campo de senha em branco. |
| 6      | ❌ **Login com campos de e-mail e senha em branco**: Tenta fazer login com ambos os campos em branco. |
| 7      | ✔️ **Selecionar e desmarcar a opção de lembrar-me**: Verifica se é possível selecionar e desmarcar a opção de lembrar-me. |
| 9      | ✔️ **Logout bem-sucedido**: Realiza logout da conta do usuário com sucesso. |

### Funcionalidade de Cadastro

| Número | Cenários                                                             |
|--------|---------------------------------------------------------------------|
| 10     | ✔️ **Cadastro bem-sucedido**: Realiza registro com sucesso utilizando informações válidas. |
| 11     | ❌ **Cadastro com campo de nome em branco**: Tenta realizar registro com o campo de nome em branco. |
| 12     | ❌ **Cadastro com campo de e-mail em branco**: Tenta realizar registro com o campo de e-mail em branco. |
| 13     | ❌ **Cadastro com senha inválida**: Tenta realizar registro com uma senha inválida. |
| 14     | ❌ **Cadastro com campo de senha em branco**: Tenta realizar registro com o campo de senha em branco. |
| 15     | ❌ **Cadastro com e-mail inválido**: Tenta realizar registro com um e-mail inválido. |
| 16     | ❌ **Cadastro com e-mail contendo apenas números**: Tenta realizar registro com um e-mail contendo apenas números. |
| 17     | ❌ **Cadastro com e-mail especial**: Tenta realizar registro com um e-mail com caracteres especiais. |


## Estrutura do Projeto Cypress

Este projeto utiliza uma estrutura organizada por funcionalidade para gerenciar os testes e comandos relacionados. Abaixo está a organização geral do projeto:

    cypress
    |-- e2e
    │   ├── cadastro
    │   │   ├── cadastro.cy.js
    |-- fixtures
    │   │   ├── exemples.json
    |-- support
    │   ├── cadastro
    │   │   ├── cadastroCommands.js
    │   │   ├── cadastroAssertions.js
    │   ├── login
    │   │   ├── loginCommands.js
    │   │   ├── loginAssertions.js
    |-- cypress.config.js
    |-- .gitignore
    |-- package.json
    |-- readme.md


## 📋 Pré-Requisitos
- Instalar o [Node.js](https://nodejs.org/)
- Instalar uma IDE, como o [Visual Studio Code](https://code.visualstudio.com/download)
- Instalar o [Git](https://git-scm.com/downloads) (caso queira trabalhar com projeto em sua máquina) 

## ⚙️ Configurando o ambiente

### Iniciando um projeto node
Abra o terminal no VSCode (utilize o CTRL + J) e digite o seguinte comando:

    npm init -y

### Instalando o cypress

Para instalar uma versão mais recente do cypress: 

    npm install cypress --save-dev

Para instalar uma versão específica:

    npm install cypress@3.8.3 --save-dev

#### Para iniciar o Cypress via Dashboard
    npx cypress open

#### Executando no modo headless 
    npx cypress run

## Recursos Adicionais
- [Documentação do Cypress](https://docs.cypress.io/guides/overview/why-cypress)
- [Exemplos de receitas](https://github.com/cypress-io/cypress-example-recipes)

