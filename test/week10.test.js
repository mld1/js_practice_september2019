const {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
} = require("../challenges/week10");

describe("sumDigits", () => {
  test("returns sum of each digit in n", () => {
    expect(sumDigits(123)).toBe(6);
    expect(sumDigits(4223)).toBe(11);
  });
});

describe("createRange", () => {
  test("returns array of numbers beginning with start value, then adds every value after adding step to array, and end value", () => {
    expect(createRange(1, 12, 2)).toEqual([1, 3, 5, 7, 9, 11, 12]);
    expect(createRange(4, 20, 5)).toEqual([4, 9, 14, 19, 20]);
  });
});

describe("getScreentimeAlertList", () => {
  test("returns array of usernames if user has screen time usage of over 100", () => {
    expect(
      getScreentimeAlertList(
        [
          {
            username: "beth_1234",
            name: "Beth Smith",
            screenTime: [
              {
                date: "2019-05-01",
                usage: { twitter: 34, instagram: 22, facebook: 40 }
              },
              {
                date: "2019-05-02",
                usage: { twitter: 56, instagram: 40, facebook: 31 }
              },
              {
                date: "2019-05-03",
                usage: { twitter: 12, instagram: 15, facebook: 19 }
              },
              {
                date: "2019-05-04",
                usage: { twitter: 10, instagram: 56, facebook: 61 }
              }
            ]
          },
          {
            username: "sam_j_1989",
            name: "Sam Jones",
            screenTime: [
              {
                date: "2019-06-11",
                usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 }
              },
              {
                date: "2019-06-13",
                usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 }
              },
              {
                date: "2019-06-14",
                usage: { mapMyRun: 0, whatsApp: 40, facebook: 0, safari: 31 }
              }
            ]
          }
        ],
        "2019-05-04"
      )
    ).toEqual(["beth_1234"]);
    expect(
      getScreentimeAlertList(
        [
          {
            username: "beth_1234",
            name: "Beth Smith",
            screenTime: [
              {
                date: "2019-05-01",
                usage: { twitter: 34, instagram: 22, facebook: 40 }
              },
              {
                date: "2019-05-02",
                usage: { twitter: 0, instagram: 30, facebook: 31 }
              },
              {
                date: "2019-05-03",
                usage: { twitter: 12, instagram: 15, facebook: 19 }
              },
              {
                date: "2019-05-04",
                usage: { twitter: 10, instagram: 16, facebook: 61 }
              }
            ]
          },
          {
            username: "sam_j_1989",
            name: "Sam Jones",
            screenTime: [
              {
                date: "2019-06-11",
                usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 }
              },
              {
                date: "2019-06-13",
                usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 }
              },
              {
                date: "2019-06-14",
                usage: { mapMyRun: 0, whatsApp: 40, facebook: 100, safari: 91 }
              }
            ]
          }
        ],
        "2019-06-14"
      )
    ).toEqual(["sam_j_1989"]);
  });
});

describe("hexToRGB", () => {
  test("returns RGB from hex code", () => {
    expect(hexToRGB("FF1133")).toBe("rgb(255,17,51)");
    expect(hexToRGB("FF5733")).toBe("rgb(255,87,51)");
  });

  test("ignores all punctuation in input string", () => {
    expect(hexToRGB("#FF,11,33")).toBe("rgb(255,17,51)");
  });
});

describe.only("findWinner", () => {
  test("returns winner of game from noughts and crosses game as array", () => {
    expect(
      findWinner([
        ["X", "0", null],
        ["X", null, "0"],
        ["X", null, "0"]
      ])
    ).toBe("X");
    expect(
      findWinner([
        [null, "X", "0"],
        ["X", null, "0"],
        ["X", null, "0"]
      ])
    ).toBe("0");
  });

  test("returns null if there is no winner", () => {
    expect(
      findWinner([
        [null, "X", null],
        ["X", null, "0"],
        ["X", null, "0"]
      ])
    ).toBe(null);
  });
});
