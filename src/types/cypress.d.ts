declare global {
  export namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}
