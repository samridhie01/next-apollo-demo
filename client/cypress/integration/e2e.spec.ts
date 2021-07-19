/// <reference types="Cypress" />

describe('User Link', () => {
  
    it('Visits the page', () => {
      cy.visit(`http://localhost:3000`);
    });

    it('Visits click User link', () => {
      cy.get('a:contains("User")')
    });

    // it('Visits click User link', () => {
    //   cy.url().should('include', '/users')
    // });

    // it('Visits click User link', () => {
    //   cy.url().should('include', '/users')
    // });
});

