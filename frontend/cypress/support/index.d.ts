interface CurrentUser {
  email: string;
  id: number;
  icon: { url: string };
  name: string;
  profile: string;
  ['created_at']: Date;
}

declare namespace Cypress {
  interface Chainable {
    Logined({
      data: {
        email: string,
        id: number,
        icon: { url: string },
        name: string,
        profile: string,
        ['created_at']: Date,
      },
    }): void;
    FormErrorMessage(errrormessage: string): void;
    FlashMessage(type: 'success' | 'error', message: string): void;
    ErrorBoundary(message: string): void;
  }
}
