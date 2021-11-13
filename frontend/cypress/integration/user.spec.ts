/// <reference types="cypress" />
import {
  sessionvalidateURL,
  RegistrationShowURL,
  RegistrationNewURL,
  FollowExistsURL,
} from '../../src/urls/index';
import currentuser from '../fixtures/currentuser.json';
import user from '../fixtures/users.json';
import updateuser from '../fixtures/updateuser.json';

describe('mypage', () => {
  it('successfully', () => {
    cy.setCookie(
      'token',
      '{"access-token":"access-token","client":"client","uid":"uid"}',
    );
    cy.intercept('GET', sessionvalidateURL, {
      statusCode: 200,
      body: currentuser,
    });
    cy.visit('/mypage');
    cy.get('[data-testid = name]').should('have.text', currentuser.data.name);
  });
  it('failed', () => {
    cy.visit('/mypage');
    cy.url().should('eq', 'http://localhost:3000/sign_in');
    cy.get('[data-testid = error]').should(
      'have.text',
      'ログインしてから、お試しください。',
    );
  });
});
describe('show', () => {
  it('successfully', () => {
    cy.setCookie(
      'token',
      '{"access-token":"access-token","client":"client","uid":"uid"}',
    );
    cy.intercept('GET', sessionvalidateURL, {
      statusCode: 200,
      body: currentuser,
    });

    cy.intercept('GET', RegistrationShowURL(`${user.users[1].id}`), {
      statusCode: 200,
      body: { data: user.users[1] },
    });
    cy.visit(`/registration/${user.users[1].id}`);
    cy.get('[data-testid = name]').should('have.text', user.users[1].name);
  });
  it('failed', () => {
    cy.intercept('GET', RegistrationShowURL(`${user.users[0].id}`), {
      statusCode: 401,
    });
    cy.visit(`/registration/${user.users[0].id}`);
    cy.get('[data-testid = error-message]').should(
      'have.text',
      'ユーザー情報が存在しません。',
    );
  });
});
describe('Edit', () => {
  it('successfully', () => {
    cy.setCookie(
      'token',
      '{"access-token":"access-token","client":"client","uid":"uid"}',
    );
    cy.intercept('GET', sessionvalidateURL, {
      statusCode: 200,
      body: currentuser,
    });
    cy.intercept('PUT', RegistrationNewURL, {
      statusCode: 200,
      body: { data: updateuser },
    });
    cy.visit('/registration/edit');

    cy.get('[data-testid = name] > input')
      .clear({ force: true })
      .type(updateuser.name, { force: true });
    cy.get('[data-testid = email] > input')
      .clear({ force: true })
      .type(updateuser.email, { force: true });
    cy.get('[data-testid = profile]')
      .clear({ force: true })
      .type(updateuser.profile, { force: true });
    cy.get('[data-testid = submit]').click({ force: true });
    cy.url().should('eq', 'http://localhost:3000/mypage');
    cy.get('[data-testid =success]').should(
      'have.text',
      'アカウント情報を更新しました。',
    );
  });
  it('error message(name)', () => {
    cy.setCookie(
      'token',
      '{"access-token":"access-token","client":"client","uid":"uid"}',
    );
    cy.intercept('GET', sessionvalidateURL, {
      statusCode: 200,
      body: currentuser,
    });
    cy.visit('/registration/edit');
    cy.get('[data-testid = name] > input').clear({ force: true }).blur();
    cy.get('.ui.pointing.below.prompt.label').should(
      'have.text',
      'アカウント名が入力されていません。',
    );
  });
  it('error message(passowrd)', () => {
    cy.setCookie(
      'token',
      '{"access-token":"access-token","client":"client","uid":"uid"}',
    );
    cy.intercept('GET', sessionvalidateURL, {
      statusCode: 200,
      body: currentuser,
    });
    cy.visit('/registration/edit');
    cy.get('[data-testid=accodion]').click({ force: true });
    cy.get('[data-testid = password] > input')
      .clear({ force: true })
      .type('pass', { force: true });
    cy.get('[data-testid = submit]').click({ force: true });
    cy.get('.ui.pointing.below.prompt.label').should(
      'have.text',
      'パスワードは最低８文字以上必要ですパスワードが一致しません',
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
    });
    cy.intercept('PUT', RegistrationNewURL, {
      statusCode: 401,
    });
    cy.visit('/registration/edit');
    cy.get('[data-testid = name] > input')
      .clear({ force: true })
      .type(updateuser.name, { force: true });
    cy.get('[data-testid = email] > input')
      .clear({ force: true })
      .type(updateuser.email, { force: true });
    cy.get('[data-testid = profile]')
      .clear({ force: true })
      .type(updateuser.profile, { force: true });
    cy.get('[data-testid = submit]').click({ force: true });
    cy.url().should('eq', 'http://localhost:3000/registration/edit');
    cy.get('[data-testid = error]').should(
      'have.text',
      '入力が正しくありません。',
    );
  });
});
