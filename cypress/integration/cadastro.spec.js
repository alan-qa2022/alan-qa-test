describe('Cadastro', () => {
    it(" Cadastrar um nova task", () => {
        cy.viewport(1440, 900)
        cy.visit('http://localhost:8080/')
        var cadastro = {
            text: "Task-Alan_01"
        }
        cy.get('input[type="text"]').type(cadastro.text)
        cy.get('button[type="submit"]').click
    })
})