import User from './user';

jest.mock('./user');

test("first test", () => {
  expect(User);
})