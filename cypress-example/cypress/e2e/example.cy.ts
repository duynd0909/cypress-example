// https://on.cypress.io/api

describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'You did it!')
  })
})
describe("My ToDo App", () => {
  it('visits the app root url', () => {
      cy.visit("http://localhost:8080/blackbox/process/reportSystemInspection#");
      cy.get('input[id="idInput"]').type("WEEDS")
      cy.get('input[id="passwd"]').type("WEEDS")
      cy.get('a[id="loginButton"]').click()
  });
})