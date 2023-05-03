describe('', () => {
    beforeEach('', () => {
        cy.visit('https://orteil.dashnet.org/cookieclicker/');
    })

    specify('Choose langauge', () => {
        cy.get('#promptContentChangeLanguage').within(() => {
            cy.get('.langSelectButton.title').first().click()
            cy.url().should('include', 'https://orteil.dashnet.org/cookieclicker/')
        })
        for(let i = 0; i < 100; i++) {
            cy.get('#bigCookie').click()
        }
        cy.get('#cookies').should('have.text', '10 cookiesper second: 0')
    })
})