/// <reference types="cypress" />
import { RegistrationNewURL } from '../../src/urls/index';

describe('Sign up', () => {
  it('successfully', () => {
    cy.intercept('POST', RegistrationNewURL, { statusCode: 200 });
    cy.visit('/sign_up');
    cy.get('[data-testid =name ] > input').type('test');
    cy.get('[data-testid =email ] > input').type('test@example.com');
    cy.get('[data-testid =password ] > input').type('password');
    cy.get('[data-testid =password_confirmation ] > input').type('password');
    cy.get('[data-testid = submit]').click();
    cy.url().should('eq', 'http://localhost:3000/send_mail');
  });
  it('failed', () => {
    cy.intercept('POST', RegistrationNewURL, { statusCode: 401 });
    cy.visit('/sign_up');
    cy.get('[data-testid =name ] > input').type('test');
    cy.get('[data-testid =email ] > input').type('test@example.com');
    cy.get('[data-testid =password ] > input').type('password');
    cy.get('[data-testid =password_confirmation ] > input').type('password');
    cy.get('[data-testid = submit]').click();
    cy.url().should('eq', 'http://localhost:3000/sign_up');
    cy.get('[data-testid = error]').should(
      'have.text',
      '無効な入力があります。',
    );
  });
  it('form failed(name.minlength)', () => {
    cy.visit('/sign_up');
    cy.get('[data-testid =name ] > input').type('t');
    cy.get('[data-testid =email ] > input').type('test@example.com');
    cy.get('[data-testid =password ] > input').type('password');
    cy.get('[data-testid =password_confirmation ] > input').type('password');
    cy.get('[data-testid = submit]').click();
    cy.get('.ui.pointing.below.prompt.label').should(
      'have.text',
      'アカウント名は最低2文字以上必要です',
    );
  });
  it('form failed(email)', () => {
    cy.visit('/sign_up');
    cy.get('[data-testid =name ] > input').type('test');
    cy.get('[data-testid =email ] > input').type(' ');
    cy.get('[data-testid =password ] > input').type('password');
    cy.get('[data-testid =password_confirmation ] > input').type('password');
    cy.get('[data-testid = submit]').click();
    cy.get('.ui.pointing.below.prompt.label').should(
      'have.text',
      'メールアドレスが入力されていません。',
    );
  });
  it('form failed(password)', () => {
    cy.visit('/sign_up');
    cy.get('[data-testid =name ] > input').type('test');
    cy.get('[data-testid =email ] > input').type('test@example.com');
    cy.get('[data-testid =password ] > input').type(' ');
    cy.get('[data-testid =password_confirmation ] > input').type('password');
    cy.get('[data-testid = submit]').click();
    cy.get('.ui.pointing.below.prompt.label').should(
      'have.text',
      'パスワードは最低８文字以上必要ですパスワードが一致しません',
    );
  });
  it('form failed(password_confirmation)', () => {
    cy.intercept('POST', RegistrationNewURL, { statusCode: 401 });
    cy.visit('/sign_up');
    cy.get('[data-testid =name ] > input').type('test');
    cy.get('[data-testid =email ] > input').type('test@example.com');
    cy.get('[data-testid =password ] > input').type('password');
    cy.get('[data-testid =password_confirmation ] > input').type('passwerd');
    cy.get('[data-testid = submit]').click();
    cy.get('[data-testid =password_confirmation ] > input').type('{backspace}');
    cy.get('.ui.pointing.below.prompt.label').should(
      'have.text',
      'パスワードが一致しません',
    );
  });
});
