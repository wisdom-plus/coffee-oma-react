/// <reference types="cypress" />
import currentuser from '../fixtures/currentuser.json';
import { sessionnewURL, productindexURL } from '../../src/urls/index';

describe('Login', () => {
  it('successfully', () => {
    cy.intercept('POST', sessionnewURL, {
      statusCode: 201,
      headers: { 'access-token': 'access-token', client: 'client', uid: 'uid' },
      body: currentuser,
    }).as('Currentuser');
    cy.intercept('GET', productindexURL, {
      fixture: 'products',
    }).as('Products');
    cy.visit('/sign_in');
    cy.get('[data-testid=email] > input').type('test@example.com');
    cy.get('[data-testid = password] > input').type('password');
    cy.get('[data-testid = login]').click();
    cy.url().should('eq', 'http://localhost:3000/');
    cy.get('[data-testid = success]').should(
      'have.text',
      'ログインに成功しました。',
    );
  });
});
describe('Login', () => {
  it('failed', () => {
    cy.intercept('POST', sessionnewURL, {
      statusCode: 401,
    }).as('Currentuser');
    cy.intercept('GET', productindexURL, {
      fixture: 'products',
    }).as('Products');
    cy.visit('/sign_in');
    cy.get('[data-testid=email] > input').type('test@example.com');
    cy.get('[data-testid = password] > input').type('pass');
    cy.get('[data-testid = login]').click();
    cy.get('[data-testid = error]').should(
      'have.text',
      'ログインに失敗しました。',
    );
  });
});
