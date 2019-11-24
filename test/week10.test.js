const { sumDigits } = require("../challenges/week10");

describe.only("sumDigits", () => {
  test("returns sum of multiples of numbers divisible by 3 or 5", () => {
    expect(sumDigits(123).toBe(6);
    expect(sumDigits(4223).toBe(11);
  });
});
