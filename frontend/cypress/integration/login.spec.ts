/// <reference types="cypress" />
import currentuser from '../fixtures/currentuser.json';
import guestuser from '../fixtures/guestuser.json';
import {
  sessionnewURL,
  productindexURL,
  sessionvalidateURL,
  LikeIndexURL,
  SessionGuestLoginURL,
} from '../../src/urls/index';

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
    cy.intercept('GET', sessionvalidateURL, {
      statusCode: 200,
      body: currentuser,
    }).as('Loginuser');
    cy.visit('/sign_in');
    cy.get('[data-testid=email] > input').type('test@example.com', {
      force: true,
    });
    cy.get('[data-testid = password] > input').type('password', {
      force: true,
    });
    cy.get('[data-testid = login]').click({ force: true });
    cy.url().should('eq', 'http://localhost:3000/');
    cy.FlashMessage('success', 'ログインに成功しました。');
  });
  it('failed', () => {
    cy.intercept('POST', sessionnewURL, {
      statusCode: 401,
    }).as('Currentuser');
    cy.intercept('GET', productindexURL, {
      fixture: 'products',
    }).as('Products');
    cy.visit('/sign_in');
    cy.get('[data-testid=email] > input').type('test@example.com', {
      force: true,
    });
    cy.get('[data-testid = password] > input').type('pass', { force: true });
    cy.get('[data-testid = login]').click({ force: true });
    cy.FlashMessage('error', 'ログインに失敗しました。');
  });
});

describe('GuestLogin', () => {
  it('successfully', () => {
    cy.intercept('GET', LikeIndexURL, {
      fixture: 'likes',
    }).as('HomeLike');
    cy.intercept('GET', SessionGuestLoginURL, {
      statusCode: 201,
      headers: { 'access-token': 'access-token', client: 'client', uid: 'uid' },
      body: guestuser,
    });
    cy.visit('/');
    cy.wait('@HomeLike');
    cy.get('[data-testid = GuestButton]').click({ force: true });
    cy.FlashMessage('success', 'ログインに成功しました。');
  });

  it('failed', () => {
    cy.intercept('GET', LikeIndexURL, {
      fixture: 'likes',
    }).as('HomeLike');
    cy.intercept('GET', SessionGuestLoginURL, {
      statusCode: 404,
    });
    cy.visit('/');
    cy.wait('@HomeLike');
    cy.get('[data-testid = GuestButton]').click({ force: true });
    cy.FlashMessage('error', 'ログインに失敗しました。');
  });
});
