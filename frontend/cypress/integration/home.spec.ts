/// <reference types="cypress" />

describe('The Home Page', () => {
  const baseUrl = Cypress.env('baseUrl');
  it('successfully loads', () => {
    cy.visit(baseUrl);
  });
});
