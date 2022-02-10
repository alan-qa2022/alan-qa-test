describe('home page', () => {
    it('acessando site', () => {
        cy.viewport(1440, 900)
        cy.visit('http://localhost:8080/')
        cy.get('h1').should('have.text', 'To Do')
    })
})