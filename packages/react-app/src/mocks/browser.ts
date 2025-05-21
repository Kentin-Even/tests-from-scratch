import { setupServer } from "msw/node";
import { handlers } from "./handlers";
export const server = setupServer(...handlers);

export const setup = () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
};
