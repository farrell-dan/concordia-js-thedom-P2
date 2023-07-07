// We import (require) the function that we want to test.
const redacted = require("../exercise-1");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 1", () => {
  expect(redacted(["bacon", false, 42])).toStrictEqual(["redacted", false, 42]);
  // add more tests here...
});

// More info on jest expect: https://jestjs.io/docs/en/expect
