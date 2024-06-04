

<h1 align="center"> AUTOMAÇÃO FRONT-END - QAZANDO SHOP 🍊</h1>

![STATUS](https://img.shields.io/static/v1?label=STATUS&message=%20Finalizado&color=&style=for-the-badge)


## 💬 Sobre o projeto
<p> O teste foi realizado no site [Qazando shop](https://automationpratice.com.br/). </p>

## 💻 Tecnologias utilizadas

- Node (v20.11.0)

- Cypress

## 📋 Pré-requisitos
- Instalar o [Node.js](https://nodejs.org/)
- Instalar a IDE [Visual Studio Code](https://code.visualstudio.com/download)
- Instalar o [Git](https://git-scm.com/downloads) 

##  📥 Clonando o projeto:
```bash
git clone https://github.com/sandro-augusto/orange-hrm-cypress.git
  ```

##  👩🏻‍💻​ Para instalar as dependências e os plugins:

Abra o terminal no VSCode (use CTRL + J) e digite o seguinte comando:

```bash
yarn install
  ```

### Comando para abrir o cypress:

```bash
yarn cypress open
  ```

#### Rodando em modo headless:
```bash
yarn cypress run
```

## Estrutura do Projeto Cypress

Este projeto utiliza uma estrutura organizada por funcionalidade para gerenciar os testes e comandos relacionados. Abaixo está a organização geral do projeto:

    cypress
|-- e2e
│   ├── login
│   │   ├── login.cy.js
│   ├── register
│   │   ├── register.cy.js
|-- fixtures
│   │   ├── login_data.json
|-- support
│   ├── pages
│   │   ├── initialPage.js
│   │   ├── loginPage.js
│   │   ├── registerPage.js
│   ├── elements
│   │   ├── loginElements.js
│   │   ├── registerElements.js
|-- .github
|-- cypress.config.js
|-- .gitignore
|-- package.json
|-- readme.md

## Recursos adicionais
- [Documentação Cypress](https://docs.cypress.io/guides/overview/why-cypress)
- [Exemplos](https://github.com/cypress-io/cypress-example-recipes)