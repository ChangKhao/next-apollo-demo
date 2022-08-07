describe('initial test', () => {
  it('passes', () => {
    expect(true).to.equal(true)
    cy.visit('https://mb-apollo-client.herokuapp.com/contact-list')
  })
})