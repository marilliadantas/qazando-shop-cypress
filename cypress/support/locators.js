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
        btnOk: '.swal2-confirm',
        alertErro: '.invalid_input',
        checkbox: 'input[id="materialUnchecked"]',
        linkCreateAccount: '#createAccount',
        titlePageLogin: '.account_form > h3'
    },

    logout: {
        btnLogout: 'a[href="/#!"]',
        msgLogout: 'h2[id="swal2-title"]',
        msgThanks: 'div[id="swal2-html-container"]'
    }
}

export default locators;