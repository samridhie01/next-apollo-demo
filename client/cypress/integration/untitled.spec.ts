/// <reference types="Cypress" />

describe('My First Test', () => {
    beforeEach(() => {});
  
    it('Visits the page', () => {
      cy.visit(`http://localhost:3000`);
    });
});

