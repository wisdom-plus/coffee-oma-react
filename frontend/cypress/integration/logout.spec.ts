/// <reference types="cypress" />
import currentuser from '../fixtures/currentuser.json';
import { sessionvalidateURL, sessiondestroyURL } from '../../src/urls/index';

describe('Logout', () => {
  it('successfully', () => {
    cy.setCookie(
      'token',
      '{"access-token":"access-token","client":"client","uid":"uid"}',
    );
    cy.intercept('GET', sessionvalidateURL, {
      statusCode: 200,
      body: currentuser,
    }).as('Currentuser');
    cy.intercept('DELETE', sessiondestroyURL, { statusCode: 200 });
    cy.visit('/sign_out');
    cy.get('[data-testid = logout-message]').should(
      'have.text',
      'ログアウトが正常に行われました５秒後にトップページに移動します。Topへ',
    );
  });
  it('failed', () => {
    cy.setCookie(
      'token',
      '{"access-token":"access-token","client":"client","uid":"uid"}',
    );
    cy.intercept('GET', sessionvalidateURL, {
      statusCode: 200,
      body: currentuser,
    }).as('Currentuser');
    cy.intercept('DELETE', sessiondestroyURL, { statusCode: 401 });
    cy.visit('/sign_out');
    cy.get('[data-testid = error]').should(
      'have.text',
      'ログアウトに失敗しました。',
    );
  });
});
