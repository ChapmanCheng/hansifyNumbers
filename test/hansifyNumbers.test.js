const hansifyNumbers = require("../");

test("5000 should return 5000", () => {
  expect(hansifyNumbers(5000)).toBe("5000");
});

test("5000 should return 5千", () => {
  expect(hansifyNumbers(5000, {
    onlyFirstNum: true
  })).toBe("5千");
});

test("5000 should return 5000 when onlyFirstNum is false", () => {
  const result = hansifyNumbers(5000, {
    onlyFirstNum: false,
  });

  expect(result).toBe("5000");
});

test("5123 with decimal (2) should return 5.12", () => {
  const result = hansifyNumbers(5123, {
    withDecimal: 2,
  });
  expect(result).toBe("5.12千");
});

test("5200 with decimal (2) and trimZero should return 5.2", () => {
  const result = hansifyNumbers(5200, {
    withDecimal: 2,
  });
  expect(result).toBe("5.2千");
});

test("5203 with decimal (2) and trimZero should return 5.2", () => {
  const result = hansifyNumbers(5200, {
    withDecimal: 2,
    trimZero: true,
  });
  expect(result).toBe("5.2千");
});

test("520 should return 5百", () => {
  expect(hansifyNumbers(520)).toBe("5百");
});

test("52 should return 5十", () => {
  expect(hansifyNumbers(52)).toBe("5十");
});

test("5 should return 5", () => {
  expect(hansifyNumbers(5)).toBe("5");
});
