// https://docs.cypress.io/api/introduction/api.html

describe('Testing manage reviews features', () => {
  it('goes to manage reviews page without login', () => {
    cy.wait(2000)
    cy.visit('/managereviews')
    cy.wait(2000)
    // check page 
    cy.contains('Authenticated Users Area')
  })

  it('goes to manage reviews page after login and delete a review', () => {
    cy.visit('/myfavorites')
    cy.contains('Please login first')
    // fill in email
    cy.get('[data-test="login-email-field"]').type('jill@harvard.edu')
    // fill in password
    cy.get('[data-test="login-password-field"]').type('asdfasdf')
    // click login
    cy.get('[data-test="login-button"]').click()
    cy.wait(2000)
    cy.contains('Hi Jill Harvard, here are your favorite recipes!')
    cy.wait(2000)
    cy.visit('/managereviews')
    cy.contains('Manage Reviews')
    cy.get('[data-test="review"]').should('have.length', 3)
    // delete a review
    cy.get('[data-test="delete-review-button"]').first().click()
    cy.wait(2000)
    cy.get('[data-test="review"]').should('have.length', 2)
    // goes to recipe 1 to confirm review deleted 
    cy.visit('/recipes/1');
    cy.wait(2000)
    cy.contains("This is not very good.").should('not.exist')
  })
})
