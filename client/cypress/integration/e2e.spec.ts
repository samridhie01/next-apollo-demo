/// <reference types="Cypress" />

describe('User Link', () => {
  
    it('Visits the page', () => {
      cy.visit(`http://localhost:3000`);
    });

    it('Check and click User link', () => {
      cy.get('a:contains("User")').click()
    });

    it('Check url navigation to users page', () => {
      cy.url().should("match", /users/)
    });

    it('Check 20 users card should get loaded', () => {
      cy.get('[data-testid="user-card"]').should('have.length', 20);
    });

    it('Check load more button on page', () => {
      cy.get('[data-testid="loading-button"]').click();
    });

    it('Check 20 users card should get loaded', () => {
      cy.get('[data-testid="user-card"]').should('have.length', 40);
    });
});

