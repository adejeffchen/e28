// https://docs.cypress.io/api/introduction/api.html

describe('Testing basic recipes and signin/sign out/register features', () => {
  it('visits the homepage', () => {
    cy.visit('/')
    cy.contains('h1', 'Welcome to Jeff Recipe Book!')
    // check homepage has 10 recipes 
    cy.get('.recipe-name').should('have.length', 10);
  })

  it('goes to homepage and then click on first recipe', () => {
    cy.visit('/')
    // click on first recipe 
    cy.get('.recipe-name').contains('Buffalo Chicken Sliders').click()
    // check for recipe cook time
    cy.contains('.recipe-detail', '26 minutes')
  })

  it('goes to my favorites, sign in, and sing out', () => {
    cy.visit('/myfavorites')
    cy.contains('Please login first')
    // fill in email
    cy.get('[data-test="login-email-field"]').type('jill@harvard.edu')
    // fill in password
    cy.get('[data-test="login-password-field"]').type('asdfasdf')
    // click login
    cy.get('[data-test="login-button"]').click()
    // check favorite recipes count
    cy.get('.recipe-name').should('have.length', 2)
    // click signout
    cy.get('[data-test="signout-button"]').click()
    // check sign out screen
    cy.contains('Please login first')
  })

  it('goes to my favorites, sign in - check form validation', () => {
    cy.visit('/myfavorites')
    // fill in email blank
    cy.get('[data-test="login-email-field"]').type(' ').blur()
    cy.contains('The email field is required.')
    // fill in email wrong format
    cy.get('[data-test="login-email-field"]').type('abc').blur()
    cy.contains('The email format is invalid.')
    // fill in password blank
    cy.get('[data-test="login-password-field"]').type(' ').blur()
    cy.contains('The password field is required.')
  })

  it('goes to my favorites, register new account, sign in', () => {
    cy.visit('/myfavorites')
    // fill in name
    cy.get('[data-test="register-name-field"]').type('Jeff Chen')
    // fill in email
    cy.get('[data-test="register-email-field"]').type('jchen@harvard.edu')
    // fill in password
    cy.get('[data-test="register-password-field"]').type('asdfasdf')
    // click register
    cy.get('[data-test="register-button"]').click();
    // check favorite recipes count
    cy.get('.recipe-name').should('have.length', 0);
    cy.contains("Hi Jeff Chen, you don't have any favorite recipe yet!")
  })

  it('goes to my favorites, register - check form validation', () => {
    cy.visit('/myfavorites')
    // fill in name blank
    cy.get('[data-test="register-name-field"]').focus().blur()
    cy.contains('The name field is required.')
    // fill in name less than 3 characters
    cy.get('[data-test="register-name-field"]').type('ab').blur()
    cy.contains('The name must be at least 3 characters.')
    // fill in email blank
    cy.get('[data-test="register-email-field"]').type(' ').blur()
    cy.contains('The email field is required.')
    // fill in email wrong format
    cy.get('[data-test="register-email-field"]').type('abc').blur()
    cy.contains('The email format is invalid.')
    // fill in password blank
    cy.get('[data-test="register-password-field"]').type(' ').blur()
    cy.contains('The password field is required.')
  })

  it('goes to my favorites, register an existing account (error case)', () => {
    cy.visit('/myfavorites')
    // fill in name
    cy.get('[data-test="register-name-field"]').type('Jill')
    // fill in email
    cy.get('[data-test="register-email-field"]').type('jill@harvard.edu')
    // fill in password
    cy.get('[data-test="register-password-field"]').type('asdfasdf')
    // click register
    cy.get('[data-test="register-button"]').click()
    // check server error message 
    cy.contains("The email has already been taken.")
  })
})
