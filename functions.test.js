const {
  returnTwo,
  greeting,
  add,
  multiply,
  divide,
  subtract,
} = require("./functions");

test("this should return 2", () => {
  expect(returnTwo()).toBe(2);
});

test("this should return a string with hello name specified", () => {
  expect(greeting("James")).toBe("Hello, James");
  expect(greeting("Jill")).toBe("Hello, Jill");
});

describe("math tests", () => {
  test("this test should return the sum of two numbers", () => {
    expect(add(1, 2)).toBe(3);
    expect(add(5, 9)).toBe(14);
  });

  test("this test should return the product of two numbers", () => {
    expect(multiply(4, 6)).toBe(24);
    expect(multiply(2, 7)).toBe(14);
  });

  test("this test should return the quotient of two numbers", () => {
    expect(divide(12, 3)).toBe(4);
    expect(divide(10, 5)).toBe(2);
  });

  test("this test should return the difference of two numbers", () => {
    expect(subtract(3, 1)).toBe(2);
    expect(subtract(7, 2)).toBe(5);
  });
});
