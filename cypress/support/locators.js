const locators = {

    register: {
        titlePageRegister: 'div > h3',
        inputName: 'input[id="user"',
        inputEmail: 'input[id="email"]',
        inputPassword: 'input[id="password"]',
        btnRegister: 'button[id="btnRegister"]',
        msgSucess: 'h2[id="swal2-title"]',
        msgWelcome: 'div[class="swal2-html-container"]',
        btnOk: 'button[class="swal2-confirm swal2-styled"]',
        alertErro: 'span[class="errorLabel"]'
    },

    login: {
        inputEmail: 'input[id="user"]',
        inputPassword: 'input[id="password"]',
        btnLogin: 'button[id="btnLogin"]',
        msgSucess: 'h2[id="swal2-title"]',
        msgWelcome: 'div[id="swal2-html-container"]',
        btnOk: 'button[class="swal2-confirm swal2-styled"]',
        alertErro: '.invalid_input',
        checkbox: 'input[id="materialUnchecked"]',
        linkCreateAccount: '#createAccount'
    }
}

export default locators;