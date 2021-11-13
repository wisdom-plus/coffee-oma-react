/// <reference types="cypress" />
import {
  sessionvalidateURL,
  productshowURL,
  LikeCreateURL,
  LikeExistsURL,
  LikeDestroyURL,
} from '../../src/urls/index';
import { products } from '../fixtures/products.json';
import currentuser from '../fixtures/currentuser.json';
import { like } from '../fixtures/like.json';

describe('Create', () => {
  it('successfully', () => {
    cy.setCookie(
      'token',
      '{"access-token":"access-token","client":"client","uid":"uid"}',
    );
    cy.intercept('GET', sessionvalidateURL, {
      statusCode: 200,
      body: currentuser,
    });
    cy.intercept('GET', productshowURL(`${products[0].id}`), {
      statusCode: 200,
      body: { product: products[0] },
    });
    cy.intercept('GET', `${LikeExistsURL}?product_id=1`, {
      statusCode: 200,
      body: { count: 1, liked: false },
    });
    cy.intercept('POST', LikeCreateURL, { statusCode: 201 });
    cy.visit(`/product/${products[0].id}`);
    cy.get('[data-testid = create]').click({ force: true });
    cy.get('[data-testid = destroy]').should('have.text', '2');
  });

  it('failed', () => {
    cy.setCookie(
      'token',
      '{"access-token":"access-token","client":"client","uid":"uid"}',
    );
    cy.intercept('GET', sessionvalidateURL, {
      statusCode: 200,
      body: currentuser,
    });
    cy.intercept('GET', productshowURL(`${products[0].id}`), {
      statusCode: 200,
      body: { product: products[0] },
    });
    cy.intercept('GET', `${LikeExistsURL}?product_id=1`, {
      statusCode: 200,
      body: { count: 1, liked: false },
    });
    cy.intercept('POST', LikeCreateURL, { statusCode: 500 });
    cy.visit(`/product/${products[0].id}`);
    cy.get('[data-testid = create]').click({ force: true });
    cy.get('[data-testid = error]').should(
      'have.text',
      'エラーが発生しました。',
    );
  });
});

describe('Destroy', () => {
  it('successfully', () => {
    cy.setCookie(
      'token',
      '{"access-token":"access-token","client":"client","uid":"uid"}',
    );
    cy.intercept('GET', sessionvalidateURL, {
      statusCode: 200,
      body: currentuser,
    });
    cy.intercept('GET', productshowURL(`${products[0].id}`), {
      statusCode: 200,
      body: { product: products[0] },
    });
    cy.intercept('GET', `${LikeExistsURL}?product_id=1`, {
      statusCode: 200,
      body: like,
    });
    cy.intercept('DELETE', LikeDestroyURL(`${products[0].id}`), {
      statusCode: 201,
    });
    cy.visit(`/product/${products[0].id}`);
    cy.get('[data-testid=destroy]').click({ force: true });
    cy.get('[data-testid=create]').should('have.text', '1');
  });
  it('failed', () => {
    cy.setCookie(
      'token',
      '{"access-token":"access-token","client":"client","uid":"uid"}',
    );
    cy.intercept('GET', sessionvalidateURL, {
      statusCode: 200,
      body: currentuser,
    });
    cy.intercept('GET', productshowURL(`${products[0].id}`), {
      statusCode: 200,
      body: { product: products[0] },
    });
    cy.intercept('GET', `${LikeExistsURL}?product_id=1`, {
      statusCode: 200,
      body: like,
    });
    cy.intercept('DELETE', LikeDestroyURL(`${products[0].id}`), {
      statusCode: 500,
    });
    cy.visit(`/product/${products[0].id}`);
    cy.get('[data-testid=destroy]').click({ force: true });
    cy.get('[data-testid = error]').should(
      'have.text',
      'エラーが発生しました。',
    );
  });
});
