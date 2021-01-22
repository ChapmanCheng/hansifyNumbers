const hansifyNumbers = require("../");

test("5000 should return 5000", () => {
  expect(hansifyNumbers(5000)).toBe("5000");
});

test("5000 should return 5千", () => {
  expect(
    hansifyNumbers(5000, {
      onlyFirstNum: true,
    })
  ).toBe("5千");
});

test("50000 should return 5萬", () => {
  expect(hansifyNumbers(50000)).toBe("5萬");
});

test("500000 should return 50萬", () => {
  expect(hansifyNumbers(500000)).toBe("50萬");
});

test("500000 should return 5十萬", () => {
  expect(hansifyNumbers(500000, {
    onlyFirstNum: true,
  })).toBe("50萬");
});
