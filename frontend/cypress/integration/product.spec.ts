/// <reference types="cypress" />
import { productindexURL, productshowURL } from '../../src/urls/index';
import { products } from '../fixtures/products.json';

describe('Index', () => {
  it('successfully', () => {
    cy.intercept('GET', productindexURL, { fixture: 'products' });
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
    cy.visit('/products');
    cy.fixture('products').then((Products) => {
      cy.get(
        `[data-testid= ${Products.products[0].id}] > .card >.content >.header`,
      ).should('have.text', Products.products[0].name);
    });
  });
  it('faild', () => {
    cy.intercept('GET', productindexURL, { statusCode: 401 });
    cy.visit('/products');
    cy.get('[data-testid = error]').should(
      'have.text',
      'エラーが発生しました。',
    );
  });
});

describe('New', () => {
  it('successfully', () => {
    cy.intercept('POST', productindexURL, { statusCode: 201 });
    cy.visit('/product/new');
    cy.get('[data-testid =name] > input').type('coffee-name');
    cy.get('[data-testid =shopname] > input').type('coffee-shop-name');
    cy.get('[data-testid =price] > input').type('1000');
    cy.get('[data-testid =url] > input').type('http://www.example.com');
    cy.get('[data-testid =caption]').type('coffeeの説明文');
    cy.get('[data-testid =submit]').click();
    cy.url().should('eq', 'http://localhost:3000/products');
    cy.get('[data-testid =success]').should('have.text', '登録成功しました。');
  });
  it('failed', () => {
    cy.intercept('POST', productindexURL, { statusCode: 401 });
    cy.visit('/product/new');
    cy.get('[data-testid =name] > input').type('coffee-name');
    cy.get('[data-testid =shopname] > input').type('coffee-shop-name');
    cy.get('[data-testid =price] > input').type('1000');
    cy.get('[data-testid =url] > input').type('http://www.example.com');
    cy.get('[data-testid =caption]').type('coffeeの説明文');
    cy.get('[data-testid =submit]').click();
    cy.url().should('eq', 'http://localhost:3000/product/new');
    cy.get('[data-testid =error]').should('have.text', '登録に失敗しました。');
  });
  it('error message (caption)', () => {
    cy.intercept('POST', productindexURL, { statusCode: 401 });
    cy.visit('/product/new');
    cy.get('[data-testid =name] > input').type('coffee-name');
    cy.get('[data-testid =price] > input').type('1000');
    cy.get('[data-testid =caption]').focus().blur();
    cy.get('.ui.pointing.below.prompt.label').should(
      'have.text',
      '商品の説明が入力されていません。',
    );
  });
});
describe('Show', () => {
  it('successfully', () => {
    cy.intercept('GET', productshowURL(`${products[0].id}`), {
      statusCode: 200,
      body: { product: products[0] },
    });
    cy.visit(`/product/${products[0].id}`);
    cy.get('[data-testid = name]').should('have.text', products[0].name);
  });
  it('failed', () => {
    cy.intercept('GET', productshowURL(`${products[0].id}`), {
      statusCode: 401,
    });
    cy.visit(`/product/${products[0].id}`);
    cy.url().should('eq', 'http://localhost:3000/products');
  });
});
