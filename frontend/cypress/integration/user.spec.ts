/// <reference types="cypress" />
import {
  sessionvalidateURL,
  RegistrationShowURL,
  RegistrationNewURL,
} from '../../src/urls/index';
import currentuser from '../fixtures/currentuser.json';
import user from '../fixtures/users.json';
import updateuser from '../fixtures/updateuser.json';

describe('mypage', () => {
  it('successfully', () => {
    localStorage.setItem('access-token', 'access-token');
    localStorage.setItem('client', 'client');
    localStorage.setItem('uid', 'uid');
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
    cy.intercept('GET', RegistrationShowURL(`${user.users[0].id}`), {
      statusCode: 200,
      body: { data: user.users[0] },
    });
    cy.visit(`/registration/${user.users[0].id}`);
    cy.get('[data-testid = name]').should('have.text', user.users[0].name);
  });
  it('failed', () => {
    cy.intercept('GET', RegistrationShowURL(`${user.users[0].id}`), {
      statusCode: 401,
    });
    cy.intercept('GET', 'http://localhost:3001/api/products', {
      fixture: 'products',
    });
    cy.visit(`/registration/${user.users[0].id}`);
    cy.get('[data-testid = error]').should(
      'have.text',
      'エラーが発生しました。',
    );
  });
});
describe('Edit', () => {
  it('successfully', () => {
    localStorage.setItem('access-token', 'access-token');
    localStorage.setItem('client', 'client');
    localStorage.setItem('uid', 'uid');
    cy.intercept('GET', sessionvalidateURL, {
      statusCode: 200,
      body: currentuser,
    });
    cy.intercept('PUT', RegistrationNewURL, {
      statusCode: 200,
      body: { data: updateuser },
    });
    cy.visit('/registration/edit');

    cy.get('[data-testid = name] > input').clear().type(updateuser.name);
    cy.get('[data-testid = email] > input').clear().type(updateuser.email);
    cy.get('[data-testid = profile]').clear().type(updateuser.profile);
    cy.get('[data-testid = submit]').click();
    cy.url().should('eq', 'http://localhost:3000/mypage');
    cy.get('[data-testid =success]').should(
      'have.text',
      'アカウント情報を更新しました。',
    );
  });
  it('error message(name)', () => {
    localStorage.setItem('access-token', 'access-token');
    localStorage.setItem('client', 'client');
    localStorage.setItem('uid', 'uid');
    cy.intercept('GET', sessionvalidateURL, {
      statusCode: 200,
      body: currentuser,
    });
    cy.visit('/registration/edit');
    cy.get('[data-testid = name] > input').clear().blur();
    cy.get('.ui.pointing.below.prompt.label').should(
      'have.text',
      'アカウント名が入力されていません。',
    );
  });
  it('error message(passowrd)', () => {
    localStorage.setItem('access-token', 'access-token');
    localStorage.setItem('client', 'client');
    localStorage.setItem('uid', 'uid');
    cy.intercept('GET', sessionvalidateURL, {
      statusCode: 200,
      body: currentuser,
    });
    cy.visit('/registration/edit');
    cy.get('[data-testid=accodion]').click();
    cy.get('[data-testid = password] > input').clear().type('pass');
    cy.get('[data-testid = submit]').click();
    cy.get('.ui.pointing.below.prompt.label').should(
      'have.text',
      'パスワードは最低８文字以上必要ですパスワードが一致しません',
    );
  });
  it('failed', () => {
    localStorage.setItem('access-token', 'access-token');
    localStorage.setItem('client', 'client');
    localStorage.setItem('uid', 'uid');
    cy.intercept('GET', sessionvalidateURL, {
      statusCode: 200,
      body: currentuser,
    });
    cy.intercept('PUT', RegistrationNewURL, {
      statusCode: 401,
    });
    cy.visit('/registration/edit');
    cy.get('[data-testid = name] > input').clear().type(updateuser.name);
    cy.get('[data-testid = email] > input').clear().type(updateuser.email);
    cy.get('[data-testid = profile]').clear().type(updateuser.profile);
    cy.get('[data-testid = submit]').click();
    cy.url().should('eq', 'http://localhost:3000/registration/edit');
    cy.get('[data-testid = error]').should(
      'have.text',
      '入力が正しくありません。',
    );
  });
});
