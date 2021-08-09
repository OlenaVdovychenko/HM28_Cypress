/// <reference types="cypress"/>
describe('',() => {
  before('', () => {
    cy.visit('http://localhost:1667/');
  });

  it('', () => {
    cy.get(':nth-child(2) > .nav-link').click();
    cy.get(':nth-child(1) > .form-control').type(`UserOlena1216@mail.com`);
    cy.get(':nth-child(2) > .form-control').type(`UserOlena1216!`);
    cy.get('.btn').click();

    cy.get('.navbar').contains('UserOlena1216').should('exist');
  });
});