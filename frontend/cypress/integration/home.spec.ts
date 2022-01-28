/// <reference types="cypress" />
import { LikeIndexURL } from '../../src/urls/index';

describe('Home', () => {
  it('successfully loads', () => {
    cy.intercept('GET', LikeIndexURL, {
      fixture: 'likes',
    }).as('Products');
    cy.intercept(
      'GET',
      'http://localhost:3001/uploads/product/image/1/product-01.jpg',
      {
        fixture: 'images/product-01.jpg',
      },
    );
    cy.intercept(
      'GET',
      'http://localhost:3001/uploads/product/image/2/product-02.jpg',
      {
        fixture: 'images/product-02.jpg',
      },
    );
    cy.intercept(
      'GET',
      'http://localhost:3001/uploads/product/image/3/product-03.jpg',
      {
        fixture: 'images/product-03.jpg',
      },
    );
    cy.visit('/');
    cy.wait('@Products');
    cy.fixture('likes').then((Likes) => {
      cy.get(
        `[data-rankid= ${Likes.likes[0].id}] > .card >.content >.header`,
      ).should('have.text', Likes.likes[0].name);
    });
  });
});
