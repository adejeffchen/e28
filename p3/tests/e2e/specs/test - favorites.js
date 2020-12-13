// https://docs.cypress.io/api/introduction/api.html

describe('Testing favorites features', () => {
  it('goes to my favorites, sign in, check fav button labels on different recipes', () => {
    cy.visit('/myfavorites')
    // fill in email
    cy.get('[data-test="login-email-field"]').type('jill@harvard.edu')
    // fill in password
    cy.get('[data-test="login-password-field"]').type('asdfasdf').blur()
    // click login
    cy.get('[data-test="login-button"]').click()
    cy.contains('Hi Jill Harvard, here are your favorite recipes!')
    // go to recipe 1
    cy.visit('/recipes/1');
    // check fav button label = Remove from favorites
    cy.contains('[data-test="fav-button"]', 'Remove from favorites')
    // go to recipe 3
    cy.visit('/recipes/3')
    // check fav button label = Add to favorites
    cy.contains('[data-test="fav-button"]', 'Add to favorites')
  })

  it('sign in, add and remove a recipe to favorite', () => {
    cy.visit('/myfavorites')
    // fill in email
    cy.get('[data-test="login-email-field"]').type('jill@harvard.edu')
    // fill in password
    cy.get('[data-test="login-password-field"]').type('asdfasdf').blur()
    // click login
    cy.get('[data-test="login-button"]').click()
    cy.contains('Hi Jill Harvard, here are your favorite recipes!')
    // go to recipe 5
    cy.visit('/recipes/5');
    // Click Add to favorites
    cy.wait(2000)
    cy.get('[data-test="fav-button"]').click()
    cy.wait(2000)
    cy.contains("Sausage, Shrimp & Quinoa Skillet")
    cy.contains('[data-test="fav-button"]', 'Remove from favorites')
    // check favorite recipes count
    cy.visit('/myfavorites')
    cy.get('.recipe-name').should('have.length', 3)
    cy.contains("Sausage, Shrimp & Quinoa Skillet")
    // go to recipe 1
    cy.visit('/recipes/1');
    // Click Remove from favorites
    cy.contains("Buffalo Chicken Sliders")
    cy.wait(2000)
    cy.get('[data-test="fav-button"]').click()
    cy.wait(2000)
    cy.contains('[data-test="fav-button"]', 'Add to favorites')
    // check favorite recipes count & recipe 1 title does not exist 
    cy.visit('/myfavorites')
    cy.wait(3000)
    cy.get('.recipe-name').should('have.length', 2)
    cy.contains("Buffalo Chicken Sliders").should('not.exist')
  })
})
