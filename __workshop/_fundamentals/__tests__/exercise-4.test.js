// We import (require) the function that we want to test.
const wrapAfter40Chars = require("../exercise-4");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 4", () => {
  expect(
    wrapAfter40Chars(
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    )
  ).toBe(
    "Lorem Ipsum is simply dummy text of the \nprinting and typesetting industry. Lorem\nIpsum has been the industry's standard \ndummy text ever since the 1500s, when an\nunknown printer took a galley of type a\nnd scrambled it to make a type specimen \nbook."
  );
  // add more tests here...
});

// More info on jest expect: https://jestjs.io/docs/en/expect
