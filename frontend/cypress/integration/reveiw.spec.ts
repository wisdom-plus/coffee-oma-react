/// <reference types="cypress" />
import {
  sessionvalidateURL,
  ReviewCreateURL,
  productshowURL,
  ReviewExistsURL,
  LikeExistsURL,
  ReviewDestroyURL,
} from '../../src/urls/index';
import currentuser from '../fixtures/currentuser.json';
import { reviews } from '../fixtures/reviews.json';
import { products } from '../fixtures/products.json';
import { like } from '../fixtures/like.json';

describe('Exists', () => {
  beforeEach(() => {
    cy.intercept('GET', productshowURL(`${products[0].id}`), {
      statusCode: 200,
      body: { product: products[0] },
    });
  });
  it('successfully(login)', () => {
    cy.Logined(currentuser);
    cy.intercept('GET', `${LikeExistsURL}?product_id=1`, {
      statusCode: 200,
      body: like,
    });
    cy.intercept('GET', ReviewExistsURL(`${products[0].id}`), {
      statusCode: 200,
      body: { reviews },
    }).as('ReviewExists');
    cy.visit(`/product/${products[0].id}`);
    cy.wait('@ReviewExists');
    cy.get(`[data-testid = review${reviews[0].id}]`).should('be.visible');
  });

  it('successfully(not_login)', () => {
    cy.intercept('GET', `${LikeExistsURL}?product_id=1`, {
      statusCode: 200,
      body: { liked: false, count: 2 },
    });
    cy.intercept('GET', ReviewExistsURL(`${products[0].id}`), {
      statusCode: 200,
      body: { reviews },
    }).as('ReviewExists');
    cy.visit(`/product/${products[0].id}`);
    cy.wait('@ReviewExists');
    cy.get(`[data-testid = review${reviews[0].id}]`).should('be.visible');
  });

  it('failed(login)(404)', () => {
    cy.Logined(currentuser);
    cy.intercept('GET', `${LikeExistsURL}?product_id=1`, {
      statusCode: 200,
      body: like,
    });
    cy.intercept('GET', ReviewExistsURL(`${products[0].id}`), {
      statusCode: 404,
    }).as('ReviewExists');
    cy.visit(`/product/${products[0].id}`);
    cy.ErrorBoundary(
      'レビューが取得できませんでした。時間をおいてから再度アクセスしてください。',
    );
  });

  it('failed(not_login)(404)', () => {
    cy.intercept('GET', `${LikeExistsURL}?product_id=1`, {
      statusCode: 200,
      body: { liked: false, count: 2 },
    });
    cy.intercept('GET', ReviewExistsURL(`${products[0].id}`), {
      statusCode: 404,
    }).as('ReviewExists');
    cy.visit(`/product/${products[0].id}`);
    cy.ErrorBoundary(
      'レビューが取得できませんでした。時間をおいてから再度アクセスしてください。',
    );
  });
});

describe('Create', () => {
  beforeEach(() => {
    cy.intercept('GET', productshowURL(`${products[0].id}`), {
      statusCode: 200,
      body: { product: products[0] },
    }).as('ProductShow');
  });
  it('successfully', () => {
    cy.Logined(currentuser);
    cy.intercept('GET', `${LikeExistsURL}?product_id=1`, {
      statusCode: 200,
      body: like,
    });
    cy.intercept('GET', ReviewExistsURL(`${products[0].id}`), {
      statusCode: 200,
      body: { reviews: [reviews[1]] },
    }).as('ReviewExists');
    cy.intercept('POST', ReviewCreateURL(`${products[0].id}`), {
      statusCode: 201,
    }).as('ReviewCreated');
    cy.visit(`/product/${products[0].id}`);
    cy.wait('@ReviewExists');
    cy.get('[data-testid =title] > input').type(reviews[0].title, {
      force: true,
    });
    cy.get('[aria-posinset="5"]').click({ force: true });
    cy.get('[data-testid =content]').type(reviews[0].content, {
      force: true,
    });
    cy.get('[data-testid =submit]').click({ force: true });
    cy.FlashMessage('success', 'レビューが作成されました.');
  });

  it('failed(タイトル未入力)', () => {
    cy.Logined(currentuser);
    cy.intercept('GET', `${LikeExistsURL}?product_id=1`, {
      statusCode: 200,
      body: like,
    });
    cy.intercept('GET', ReviewExistsURL(`${products[0].id}`), {
      statusCode: 200,
      body: { reviews: [] },
    });
    cy.intercept('POST', ReviewCreateURL(`${products[0].id}`), {
      statusCode: 201,
    });
    cy.visit(`/product/${products[0].id}`);
    cy.get('[data-testid =title] > input').focus().blur();
    cy.get('[aria-posinset="5"]').click({ force: true });
    cy.get('[data-testid =content]').type(reviews[0].content, {
      force: true,
    });
    cy.FormErrorMessage('タイトルが入力されていません。');
  });

  it('failed(レビュー内容が未入力)', () => {
    cy.Logined(currentuser);
    cy.intercept('GET', `${LikeExistsURL}?product_id=1`, {
      statusCode: 200,
      body: like,
    });
    cy.intercept('GET', ReviewExistsURL(`${products[0].id}`), {
      statusCode: 200,
      body: { reviews: [] },
    });
    cy.intercept('POST', ReviewCreateURL(`${products[0].id}`), {
      statusCode: 201,
    });
    cy.visit(`/product/${products[0].id}`);
    cy.get('[data-testid =title] > input').type(reviews[0].title, {
      force: true,
    });
    cy.get('[aria-posinset="5"]').click({ force: true });
    cy.get('[data-testid =content]').focus().blur();
    cy.FormErrorMessage('レビュー本文が入力されていません。');
  });

  it('failed(404)', () => {
    cy.Logined(currentuser);
    cy.intercept('GET', `${LikeExistsURL}?product_id=1`, {
      statusCode: 200,
      body: like,
    });
    cy.intercept('GET', ReviewExistsURL(`${products[0].id}`), {
      statusCode: 200,
      body: { reviews: [reviews[1]] },
    }).as('ReviewExists');
    cy.intercept('POST', ReviewCreateURL(`${products[0].id}`), {
      statusCode: 404,
    }).as('ReviewCreated');
    cy.visit(`/product/${products[0].id}`);
    cy.wait('@ReviewExists');
    cy.get('[data-testid =title] > input').type(reviews[0].title, {
      force: true,
    });
    cy.get('[aria-posinset="5"]').click({ force: true });
    cy.get('[data-testid =content]').type(reviews[0].content, {
      force: true,
    });
    cy.get('[data-testid =submit]').click({ force: true });
    cy.FlashMessage('error', 'エラーが発生しました。');
  });

  it('failed(not_login)', () => {
    cy.intercept('GET', `${LikeExistsURL}?product_id=1`, {
      statusCode: 200,
      body: { liked: false, count: 2 },
    });
    cy.intercept('GET', ReviewExistsURL(`${products[0].id}`), {
      statusCode: 200,
      body: { reviews: [] },
    });
    cy.intercept('POST', ReviewCreateURL(`${products[0].id}`), {
      statusCode: 201,
    });
    cy.intercept('GET', ReviewExistsURL(`${products[0].id}`), {
      statusCode: 200,
      body: { reviews: [reviews[0]] },
    }).as('ReviewCreated');
    cy.visit(`/product/${products[0].id}`);
    cy.get('[data-testid =title] > input').should('not.exist');
  });
});
describe('Destroy', () => {
  beforeEach(() => {
    cy.intercept('GET', productshowURL(`${products[0].id}`), {
      statusCode: 200,
      body: { product: products[0] },
    });
    cy.intercept('GET', ReviewExistsURL(`${products[0].id}`), {
      statusCode: 200,
      body: { reviews },
    });
    cy.intercept('GET', ReviewExistsURL(`${products[0].id}`), {
      statusCode: 200,
      body: { reviews },
    }).as('ReviewExists');
  });

  it('successfully(login)', () => {
    cy.Logined(currentuser);
    cy.intercept('GET', `${LikeExistsURL}?product_id=1`, {
      statusCode: 200,
      body: like,
    });
    cy.intercept(
      'DELETE',
      ReviewDestroyURL(`${products[0].id}`, `${reviews[0].id}`),
      { statusCode: 200 },
    );
    cy.visit(`/product/${products[0].id}`);
    cy.wait('@ReviewExists');
    cy.get(`[data-testid =modalbutton${reviews[0].id}]`).click({ force: true });
    cy.get(`[data-testid =ReviewDestroy${reviews[0].id}]`).click({
      force: true,
    });
    cy.FlashMessage('success', 'レビューを削除しました。');
  });

  it('failed(404)', () => {
    cy.Logined(currentuser);
    cy.intercept('GET', `${LikeExistsURL}?product_id=1`, {
      statusCode: 200,
      body: like,
    });
    cy.intercept(
      'DELETE',
      ReviewDestroyURL(`${products[0].id}`, `${reviews[0].id}`),
      { statusCode: 404 },
    );
    cy.visit(`/product/${products[0].id}`);
    cy.wait('@ReviewExists');
    cy.get(`[data-testid =modalbutton${reviews[0].id}]`).click({ force: true });
    cy.get(`[data-testid =ReviewDestroy${reviews[0].id}]`).click({
      force: true,
    });
    cy.FlashMessage('error', 'エラーが発生しました。');
  });

  it('failed(not_login)', () => {
    cy.intercept('GET', `${LikeExistsURL}?product_id=1`, {
      statusCode: 200,
      body: { liked: false, count: 2 },
    });
    cy.intercept(
      'DELETE',
      ReviewDestroyURL(`${products[0].id}`, `${reviews[0].id}`),
      { statusCode: 200 },
    );
    cy.visit(`/product/${products[0].id}`);
    cy.wait('@ReviewExists');
    cy.get(`[data-testid =modalbutton${reviews[0].id}]`).should('not.exist');
  });
});
