// https://docs.cypress.io/api/introduction/api.html

describe('Testing My Recipes App', () => {
  it('visits the homepage', () => {
    cy.visit('/')
    cy.contains('h1', 'Welcome to Jeff Recipe Book!')
    // check homepage has 10 recipes 
    cy.get('.recipe-name').should('have.length', 10);
  })

  it('goes to homepage and then click on first recipe', () => {
    cy.visit('/')
    // click on first recipe 
    cy.get('.recipe-name').contains('Buffalo Chicken Sliders').click();
    // check for recipe cook time
    cy.contains('.recipe-detail', '26 minutes')
  })

  it('goes to my favorites, sign in, and sing out', () => {
    cy.visit('/myfavorites')
    cy.contains('Please login first')
    // click login
    cy.get('[data-test="login-button"]').click();
    // check favorite recipes count
    cy.get('.recipe-name').should('have.length', 2);
    // click signout
    cy.get('[data-test="signout-button"]').click();
    // check sign out screen
    cy.contains('Please login first')
  })

  it('goes to my favorites, register new account, sign in', () => {
    cy.visit('/myfavorites')
    // click register
    cy.get('[data-test="register-button"]').click();
    // check favorite recipes count
    cy.get('.recipe-name').should('have.length', 0);
    cy.contains("Hi Jeff Chen, you don't have any favorite recipe yet!")
  })
})
