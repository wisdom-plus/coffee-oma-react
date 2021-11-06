/// <reference types="cypress" />
import {
  sessionvalidateURL,
  RegistrationShowURL,
  FollowURL,
  FollowExistsURL,
  FollowDestroyURL,
} from '../../src/urls/index';
import { products } from '../fixtures/products.json';
import currentuser from '../fixtures/currentuser.json';
import { users } from '../fixtures/users.json';

describe('Create', () => {
  it('successfully', () => {
    localStorage.setItem('access-token', 'access-token');
    localStorage.setItem('client', 'client');
    localStorage.setItem('uid', 'uid');
    cy.intercept('GET', sessionvalidateURL, {
      statusCode: 200,
      body: currentuser,
    });
    cy.intercept('GET', RegistrationShowURL(`${users[1].id}`), {
      statusCode: 200,
      body: { data: users[1] },
    });
    cy.intercept('POST', FollowURL, { statusCode: 201 });
    cy.visit(`/registration/${users[1].id}`);
    cy.get('[data-testid = create]').click();
    cy.get('[data-testid = destroy]').should('have.text', 'フォロー解除');
  });
  it('failed', () => {
    localStorage.setItem('access-token', 'access-token');
    localStorage.setItem('client', 'client');
    localStorage.setItem('uid', 'uid');
    cy.intercept('GET', sessionvalidateURL, {
      statusCode: 200,
      body: currentuser,
    });
    cy.intercept('GET', RegistrationShowURL(`${users[1].id}`), {
      statusCode: 200,
      body: { data: users[1] },
    });
    cy.intercept('POST', FollowURL, { statusCode: 500 });
    cy.visit(`/registration/${users[1].id}`);
    cy.get('[data-testid = create]').click();
    cy.get('[data-testid = error]').should(
      'have.text',
      'エラーが発生しました。',
    );
  });
});

describe('Destory', () => {
  it('successfully', () => {
    localStorage.setItem('access-token', 'access-token');
    localStorage.setItem('client', 'client');
    localStorage.setItem('uid', 'uid');
    cy.intercept('GET', sessionvalidateURL, {
      statusCode: 200,
      body: currentuser,
    });
    cy.intercept('GET', RegistrationShowURL(`${users[1].id}`), {
      statusCode: 200,
      body: { data: users[1] },
    });
    cy.intercept('GET', `${FollowExistsURL}?follow_id=${users[1].id}`, {
      statusCode: 200,
    });
    cy.intercept('DELETE', FollowDestroyURL(`${users[1].id}`), {
      statusCode: 201,
    });
    cy.visit(`/registration/${users[1].id}`);
    cy.get('[data-testid = destroy]').click();
    cy.get('[data-testid = create]').should('have.text', 'フォローする');
  });
  it('failed', () => {
    localStorage.setItem('access-token', 'access-token');
    localStorage.setItem('client', 'client');
    localStorage.setItem('uid', 'uid');
    cy.intercept('GET', sessionvalidateURL, {
      statusCode: 200,
      body: currentuser,
    });
    cy.intercept('GET', RegistrationShowURL(`${users[1].id}`), {
      statusCode: 200,
      body: { data: users[1] },
    });
    cy.intercept('GET', `${FollowExistsURL}?follow_id=${users[1].id}`, {
      statusCode: 200,
    });
    cy.intercept('DELETE', FollowDestroyURL(`${users[1].id}`), {
      statusCode: 500,
    });
    cy.visit(`/registration/${users[1].id}`);
    cy.get('[data-testid = destroy]').click();
    cy.get('[data-testid = error]').should(
      'have.text',
      'エラーが発生しました。',
    );
  });
});
