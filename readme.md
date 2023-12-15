# Projeto de automação na Aplicação Web Qazando Shop

## Plano de Testes

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
