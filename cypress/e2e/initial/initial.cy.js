/// <reference types = "cypress" />

import initialPage from "../../support/pages/initial_page";

describe('Newslatter', () => {
    beforeEach(() => {
        initialPage.accessInitialPage()
    });

    it('Send email Success', () => {
        initialPage.fillNewsLetter('teste@teste.com')
        initialPage.clickSendMail()
        initialPage.checkMessages().then(([msgTitle, msgSuccess]) => {
            expect(msgTitle).to.equal("Success")
            expect(msgSuccess).to.equal("Thank you for your Subscribtion")
        })
        initialPage.closeModal()
    })
})