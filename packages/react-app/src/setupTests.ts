import '@testing-library/jest-dom';
import { server } from './mocks/browser';

// Avant tous les tests : démarrer MSW
beforeAll(() => server.listen());
// Après chaque test : reset handlers (réinitialise le state mocké)
afterEach(() => server.resetHandlers());
// Après tous les tests : fermer MSW
afterAll(() => server.close());