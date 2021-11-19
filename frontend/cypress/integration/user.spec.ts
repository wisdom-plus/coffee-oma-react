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
    cy.Logined(currentuser);
    cy.visit('/mypage');
    cy.get('[data-testid = name]').should('have.text', currentuser.data.name);
  });
  it('failed', () => {
    cy.visit('/mypage');
    cy.url().should('eq', 'http://localhost:3000/sign_in');
    cy.FlashMessage('error', 'ログインしてから、お試しください。');
  });
});
describe('show', () => {
  it('successfully', () => {
    cy.Logined(currentuser);
    cy.intercept('GET', RegistrationShowURL(`${user.users[1].id}`), {
      statusCode: 200,
      body: { data: user.users[1] },
    }).as('RegistrationShow');
    cy.visit(`/registration/${user.users[1].id}`);
    cy.wait('@RegistrationShow');
    cy.get('[data-testid = name]').should('have.text', user.users[1].name);
  });
  it('failed', () => {
    cy.intercept('GET', RegistrationShowURL(`${user.users[1].id}`), {
      statusCode: 404,
      body: { data: user.users[1] },
    }).as('RegistrationShow');
    cy.visit(`/registration/${user.users[0].id}`, { failOnStatusCode: false });
    cy.get('[data-testid=errormessage]').should(
      'have.text',
      'サーバーエラーが発生しました。時間をおいてから再度アクセスしてください。',
    );
  });
});
describe('Edit', () => {
  it('successfully', () => {
    cy.Logined(currentuser);
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
    cy.FlashMessage('success', 'アカウント情報を更新しました。');
  });
  it('error message(name)', () => {
    cy.Logined(currentuser);
    cy.visit('/registration/edit');
    cy.get('[data-testid = name] > input').clear({ force: true }).blur();
    cy.FormErrorMessage('アカウント名が入力されていません。');
  });
  it('error message(passowrd)', () => {
    cy.Logined(currentuser);
    cy.visit('/registration/edit');
    cy.get('[data-testid=accodion]').click({ force: true });
    cy.get('[data-testid = password] > input')
      .clear({ force: true })
      .type('pass', { force: true });
    cy.get('[data-testid = submit]').click({ force: true });
    cy.FormErrorMessage(
      'パスワードは最低８文字以上必要ですパスワードが一致しません',
    );
  });
  it('failed', () => {
    cy.Logined(currentuser);
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
    cy.FlashMessage('error', '入力が正しくありません。');
  });
});
